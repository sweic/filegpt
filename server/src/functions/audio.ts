import * as crypto from "crypto";
import dotenv from "dotenv";
import { Request, Response } from "express";
import fs from "fs";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { createPineconeClient } from "./pinecone";
import { sse } from "./sse";
dotenv.config();

export const streamAudio = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(404).json("File not found");
  }

  const filePath = req.file.path;

  try {
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    const loader = new TextLoader(filePath);
    const rawDocs = await loader.load();

    sse.send("split");

    const docs = await textSplitter.splitDocuments(rawDocs);

    if (docs.length == 0) throw new Error("t");
    console.log("split docs", docs);

    console.log("creating vector store...");
    const embeddings = new OpenAIEmbeddings();
    const pinecone = await createPineconeClient();
    const index = pinecone.Index(process.env.PINECONE_INDEX);
    const id = crypto.randomUUID().substring(0, 8);

    await PineconeStore.fromDocuments(docs, embeddings, {
      pineconeIndex: index,
      namespace: id,
      textKey: "text",
    });
    return res.json(id);
  } catch (e) {
    return res.status(404).json(e.message);
  } finally {
    cleanup(filePath);
  }
};
const cleanup = (filePath: string) => {
  fs.unlinkSync(filePath);
};
