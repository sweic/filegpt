import dotenv from "dotenv";
import { Request, Response } from "express";
import fs from "fs";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { createPineconeClient } from "./pinecone";
import * as crypto from "crypto";
import { sse } from "./sse";
dotenv.config();
export const streamPdf = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(404).json("File not found");
  }

  const filePath = req.file.path;
  try {
    const f = fs.readFileSync(filePath);
    const blob = new Blob([f]);
    const loader = new PDFLoader(blob, {
      splitPages: false,
      pdfjs: () => import("pdfjs-dist/legacy/build/pdf.js"),
    });
    const rawDocs = await loader.load();

    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    sse.send({ data: "split" });
    const docs = await textSplitter.splitDocuments(rawDocs);

    if (docs.length == 0) {
      throw new Error("t");
    }

    const embeddings = new OpenAIEmbeddings();
    const pinecone = await createPineconeClient();
    const index = pinecone.Index(process.env.PINECONE_INDEX);
    const id = crypto.randomUUID().substring(0, 8);
    if (docs) {
      docs.forEach((d) => {
        d.metadata["pdf"]["metadata"] = "test";
      });
    }
    await PineconeStore.fromDocuments(docs, embeddings, {
      pineconeIndex: index,
      namespace: id,
      textKey: "text",
    });
    return res.json(id);
  } catch (e) {
    console.log(e);
    return res.status(404).json(e.message);
  } finally {
    cleanup(filePath);
  }
};

const cleanup = (filePath: string) => {
  fs.unlinkSync(filePath);
};
