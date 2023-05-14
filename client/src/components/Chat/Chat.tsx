import { FiSend } from "solid-icons/fi";
import { Component, For, Show, createEffect, onMount } from "solid-js";
import { getCurrentConversation } from "../../store/data.store";
import { chatIsLoading } from "../../store/loading.store";
import { currentQuery, setCurrentQuery } from "../../store/settings.store";
import { handleSend } from "../../utils/api/handleMessageSend";
import Loader from "../Loader/Loader";
import Message from "./Message";
import {
  ChatContainer,
  InputContainer,
  InputContent,
  MainContainer,
  PlaceholderContainer,
  TextInput,
} from "./Styles";
const Chat: Component = () => {
  const conversation = getCurrentConversation();
  if (!conversation) return <></>;

  let scrollRef: HTMLDivElement | undefined;
  let inputRef: HTMLTextAreaElement | undefined;
  let containerRef: HTMLDivElement | undefined;

  const scrollToBottom = () => {
    if (!scrollRef) return;
    scrollRef.scrollTop = scrollRef.scrollHeight;
  };

  onMount(() => {
    scrollToBottom();
  });

  createEffect(() => {
    if (currentQuery().length >= 0 && inputRef) {
      if (containerRef)
        containerRef.style.height = `${inputRef.scrollHeight}px`;
      inputRef.style.height = "inherit";

      inputRef.style.height = `${inputRef.scrollHeight}px`;
    }
  });

  const handleKeyPress = async (event: KeyboardEvent) => {
    if (event.shiftKey && event.key == "Enter") {
      return;
    }
    if (event.key == "Enter") {
      event.preventDefault();

      if (chatIsLoading()) {
        return;
      }

      await handleSend();
    }
  };

  return (
    <ChatContainer ref={scrollRef} id="chatcont">
      <InputContainer ref={containerRef}>
        <InputContent>
          <TextInput
            value={currentQuery()}
            onInput={(e) => {
              setCurrentQuery(e.currentTarget.value);
            }}
            onkeypress={handleKeyPress}
            ref={inputRef}
          />

          <Show
            when={chatIsLoading()}
            fallback={
              <FiSend
                onClick={() => handleSend()}
                color="#d1d5db"
                size={22}
                style={{ cursor: "pointer" }}
              />
            }
          >
            <Loader />
          </Show>
        </InputContent>
      </InputContainer>
      <MainContainer id="here">
        <For each={conversation.messages}>
          {(item, idx) => {
            return <Message {...item} />;
          }}
        </For>
        <PlaceholderContainer ref={containerRef} />
      </MainContainer>
    </ChatContainer>
  );
};

export default Chat;
