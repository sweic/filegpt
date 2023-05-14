import { For, Index, createEffect, createSignal } from "solid-js";
import { ConversationsBox } from "./Styles";
import Conversation from "./Conversation";
import {
  getConversations,
  state,
  getCurrentConversation,
} from "../../../store/data.store";

function ConversationList() {
  return (
    <ConversationsBox>
      <For each={getConversations()}>
        {(item, idx) => {
          return <Conversation c={item}></Conversation>;
        }}
      </For>
    </ConversationsBox>
  );
}

export default ConversationList;
