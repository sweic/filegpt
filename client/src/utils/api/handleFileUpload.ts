import axios, { AxiosError } from "axios";
import toast from "solid-toast";
import {
  getApiKey,
  getCurrentConversation,
  setCurrentConversation,
  updateConversations,
  updateFiles,
} from "../../store/data.store";
import { setUploadIsLoading } from "../../store/loading.store";
import {
  currentFile,
  fileName,
  setRename,
  setUpload,
} from "../../store/settings.store";
import { appendToStorage } from "../../store/storage";
import { ConversationMeta, FileMeta, FileType } from "../../store/types";

export default async function handleFileUpload(file: File, name: string) {
  let id: string = "";
  const es = new EventSource(`${import.meta.env.VITE_SERVER_URL}/sse`);
  try {
    let newFile: File = file;
    const apiKey = getApiKey();
    const endpoint = file.type.startsWith("audio") ? "audio" : "pdf";
    if (file.type.startsWith("audio")) {
      id = toast.loading("Transcribing audio...");
      var formData = new FormData();
      formData.append("file", file);
      formData.append("model", "whisper-1");
      const resp = await axios.post(
        "https://api.openai.com/v1/audio/transcriptions",
        formData,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      if (resp.status != 200) throw new Error("a");
      const blob = new Blob([resp.data.text]);
      const tmp = new File([blob], "audio.mp3", { type: "text/plain" });
      newFile = tmp;
    } else {
      id = toast.loading("Converting pdf into text...");
    }

    es.onmessage = (ev) => {
      const data = JSON.parse(ev.data);
      if (data?.data === "split") {
        toast.loading("Creating embeddings...", { id });
      }
    };

    var form = new FormData();
    form.append("file", newFile);
    const apiURL = `${import.meta.env.VITE_SERVER_URL}/${endpoint}`;
    const resp = await axios.post(apiURL, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (resp.status == 200) {
      const fileObj: FileMeta = {
        id: resp.data,
        name,
        namespace: resp.data,
        type: endpoint == "audio" ? "mp3" : "pdf",
      };
      appendToStorage<FileMeta>("files", fileObj);
      updateFiles(fileObj);
      if (resp?.status == 200) {
        const type: FileType = currentFile()?.type.startsWith("audio")
          ? "mp3"
          : "pdf";
        const newConversation: ConversationMeta = {
          id: crypto.randomUUID().substring(0, 8),
          filename: fileName(),
          messages: [],
          name: `New Conversation - ${fileName()}.${type}`,
          type,
          namespace: resp.data,
          fileid: resp.data,
        };
        setCurrentConversation(newConversation);
        updateConversations(newConversation);
        appendToStorage<ConversationMeta>("conversations", newConversation);
        setUpload(false);
        setRename(getCurrentConversation()!.name);
        setUploadIsLoading(false);
      }
    }
    toast.success("Success! Start chatting!");
    return resp;
  } catch (e) {
    const error: AxiosError = e as AxiosError;
    const message = JSON.stringify(error?.response?.data);
    if (message === "t") {
      toast.error("Text not detected in pdf");
    } else if (message.startsWith("Pinecone")) {
      toast.error("Internal Server Error");
    } else if (error.response?.status == 401) {
      toast.error("Invalid API key");
    } else {
      toast.error("Text not detected in pdf");
    }
    //#TODO handle error here
  } finally {
    if (es) es.close();
    toast.dismiss(id);
  }
}
