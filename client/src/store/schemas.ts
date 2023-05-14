import * as z from "zod";

export const apiKeySchema = z.string().optional();
export const messageSchema = z.object({
  byUser: z.boolean(),
  content: z.string().optional(),
});
export const fileTypeSchema = z.enum(["pdf", "mp3"]);
export const conversationMetaSchema = z.object({
  id: z.string(),
  name: z.string(),
  namespace: z.string(),
  type: fileTypeSchema,
  messages: z.array(messageSchema).optional(),
  filename: z.string(),
  fileid: z.string(),
});

export const fileMetaSchema = z.object({
  id: z.string(),
  name: z.string(),
  namespace: z.string(),
  type: fileTypeSchema,
});

export const conversationMetaArray = z.array(conversationMetaSchema).optional();

export const fileMetaArray = z.array(fileMetaSchema).optional();
export const stringSchema = z.string();
