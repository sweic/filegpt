import { fetchEventSource } from "@microsoft/fetch-event-source";
import {
  getConversations,
  getCurrentConversation,
  setConversations,
  setCurrentConversation,
} from "../../store/data.store";
import { setChatIsLoading } from "../../store/loading.store";
import { currentQuery, setCurrentQuery } from "../../store/settings.store";
import { saveToStorage } from "../../store/storage";

export default async function handleMessageSend(
  namespace: string,
  query: string,
  callback: () => void
) {
  const body = {
    namespace,
    query,
  };
  const ctrl = new AbortController();
  fetchEventSource(`${import.meta.env.VITE_SERVER_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    signal: ctrl.signal,
    onmessage: (event) => {
      if (event.data === "[DONE]") {
        ctrl.abort();
        callback(); // Call callback to save globally
      } else {
        const data = JSON.parse(event.data);
        const convo = getCurrentConversation();
        if (!convo) return;
        const len = convo.messages.length - 1;
        setCurrentConversation({
          ...convo,
          messages: convo.messages.map((m, idx) => {
            if (idx != len) return m;
            return {
              ...m,
              content: m.content + data.data,
            };
          }),
        }); // Save to current convo
      }
    },
  });
}

export const handleSend = async () => {
  const conversation = getCurrentConversation();
  if (!conversation) return;
  setChatIsLoading(true);
  setCurrentConversation({
    ...conversation,
    messages: [
      ...conversation.messages,
      {
        byUser: true,
        content: currentQuery(),
      },
      {
        byUser: false,
        content: "",
      },
    ],
  });
  const qn = currentQuery();
  setCurrentQuery("");

  await handleMessageSend(conversation.namespace, qn, () => {
    setChatIsLoading(false);
    const conversations = getConversations().map((m) => {
      if (m.id == conversation.id) return { ...getCurrentConversation()! };
      return m;
    });
    setConversations([...conversations]); // Set all conversations
    saveToStorage("conversations", conversations); // Save to storage
  });
};
