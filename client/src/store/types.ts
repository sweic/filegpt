export interface ConversationMeta {
  id: string;
  name: string;
  namespace: string;
  messages: Message[];
  type: FileType;
  filename: string;
  fileid: string;
}

export interface Message {
  byUser: boolean;
  content: string;
}

export type FileType = "pdf" | "mp3";

export interface FileMeta {
  id: string;
  name: string;
  namespace: string;
  type: FileType;
}

export interface StateObject {
  apiKey: string;
  conversations: ConversationMeta[];
  files: FileMeta[];
  currentConversation: ConversationMeta | null;
}

export interface SettingsObject {
  settingsOpened: boolean;
  uploadOpened: boolean;
}
