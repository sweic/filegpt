import dotenv from "dotenv";
import { Request, Response } from "express";
import { CallbackManager } from "langchain/callbacks";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { OpenAI } from "langchain/llms/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { createPineconeClient } from "./pinecone";
dotenv.config();
const CONDENSE_PROMPT = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.
Chat History:
{chat_history}
Follow Up Input: {question}
`;

const QA_PROMPT = `You are a helpful AI assistant. Use the following pieces of context to answer the question at the end. Elaborate the answer to the best of your abilities. The context can be a document or an audio file.
If the question is not related to the context, answer the question using your own knowledge. Return any line spacings in "\n" Do not return the QUESTION
{context}
Question: {question}
Provide the answer here:`;

const makeChain = (
  vectorStore: PineconeStore,
  onTokenStream: (token: string) => void
) => {
  const callbacks = CallbackManager.fromHandlers({
    handleLLMNewToken: async (token) => onTokenStream(token),
  });
  const model = new OpenAI({
    temperature: 0.2, // increase temepreature to get more creative answers
    modelName: "gpt-3.5-turbo", //change this to gpt-4 if you have access
    streaming: Boolean(onTokenStream),
    verbose: true,
    callbackManager: callbacks,
  });

  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever(),
    {
      qaTemplate: QA_PROMPT,
      questionGeneratorTemplate: CONDENSE_PROMPT,
    }
  );

  return chain;
};

export const chat = async (req: Request, res: Response) => {
  const { namespace, query } = req.body;
  if (!namespace || !query) {
    return res.status(400).json("Invalid info");
  }

  const client = await createPineconeClient();
  const index = client.Index(process.env.PINECONE_INDEX);
  const vectorStore = await PineconeStore.fromExistingIndex(
    new OpenAIEmbeddings({}),
    {
      pineconeIndex: index,
      namespace,
      textKey: "text",
    }
  );
  const sendData = (data: string) => {
    res.write(`data: ${data}\n\n`);
  };

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache, no-transform",
    Connection: "keep-alive",
  });
  sendData(JSON.stringify({ data: "" }));

  const chain = makeChain(vectorStore, (token: string) => {
    sendData(JSON.stringify({ data: token }));
  });

  try {
    await chain.call({
      question: query,
      chat_history: [],
    });
  } catch (e) {
    console.log(e);
  } finally {
    sendData("[DONE]");
    res.end();
  }
};
