import { createEffect } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { apiKeySchema, conversationMetaArray, fileMetaArray } from "./schemas";
import { getStorageValue } from "./storage";
import { ConversationMeta, FileMeta, Message, StateObject } from "./types";
import { setCurrentFile, setRename } from "./settings.store";

const initialiseStateObject = () => {
  var result: StateObject = {
    apiKey: "",
    conversations: [],
    files: [],
    currentConversation: null,
  };

  const storage = window.localStorage;

  const tmpKey = storage.getItem("apiKey") ?? "";
  const tmpConvo = getStorageValue<ConversationMeta[]>("conversations");
  const tmpFiles = getStorageValue<FileMeta[]>("files");

  if (apiKeySchema.safeParse(tmpKey).success) result.apiKey = tmpKey;
  if (conversationMetaArray.safeParse(tmpConvo).success) {
    result.conversations = tmpConvo!;
    if (tmpConvo && tmpConvo.length > 0) {
      setRename(tmpConvo[0].name);
      result.currentConversation = { ...tmpConvo[0] };
    }
  } else {
    window.localStorage.removeItem("conversations");
  }
  if (fileMetaArray.safeParse(tmpFiles).success) {
    result.files = tmpFiles!;
    // if (tmpFiles && tmpFiles.length > 0) setCurrentFile(tmpFiles[0].id);
  } else {
    window.localStorage.removeItem("files");
  }

  return result;
};

export const [state, setState] = createStore<StateObject>(
  initialiseStateObject()
);

createEffect(() => {
  window.localStorage.setItem("apiKey", state.apiKey);
});

export const getApiKey = () => state.apiKey;
export const getConversations = () => state.conversations;
export const getFiles = () => state.files;
export const getCurrentConversation = () => state.currentConversation;

export const setApiKey = (a: string) => setState("apiKey", (s) => (s = a));

export const updateFiles = (a: FileMeta) =>
  setState(produce((s) => s.files.unshift({ ...a })));

export const setCurrentConversation = (a: ConversationMeta | null) =>
  setState("currentConversation", (s) =>
    a != null ? (s = { ...a }) : (s = a)
  );

export const updateConversations = (a: ConversationMeta) => {
  setState(produce((s) => s.conversations.unshift({ ...a })));
};

export const setConversations = (a: ConversationMeta[]) => {
  setState("conversations", (s) => (s = [...a]));
};
export const setFiles = (a: FileMeta[]) => {
  setState("files", (s) => (s = [...a]));
};
