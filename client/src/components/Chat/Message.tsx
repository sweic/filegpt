import { Component } from "solid-js";
import { MessageContainer, MessageContent } from "./Styles";
import { Message } from "../../store/types";
import SolidMarkdown from "solid-markdown";

const MessageV: Component<Message> = ({ byUser, content }) => {
  return (
    <MessageContainer byUser={byUser}>
      <MessageContent>
        <SolidMarkdown children={content}></SolidMarkdown>
      </MessageContent>
    </MessageContainer>
  );
};

export default MessageV;
