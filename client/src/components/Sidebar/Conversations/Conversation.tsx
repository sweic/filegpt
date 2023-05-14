import { AiOutlineCheck } from "solid-icons/ai";
import { FaRegularTrashCan } from "solid-icons/fa";
import { FiEdit3, FiX } from "solid-icons/fi";
import { IoChatbubbleOutline } from "solid-icons/io";
import { Match, Switch } from "solid-js";
import {
  getConversations,
  getCurrentConversation,
  setConversations,
  setCurrentConversation,
} from "../../../store/data.store";
import { globalIsLoading } from "../../../store/loading.store";
import {
  confirm,
  del,
  rename,
  setConfirm,
  setCurrentQuery,
  setDelete,
  setRename,
} from "../../../store/settings.store";
import { saveToStorage } from "../../../store/storage";
import { ConversationMeta } from "../../../store/types";
import { Text } from "../Styles";
import { ConversationContainer, OptionsContainer, TextInput } from "./Styles";
function Conversation({ c }: { c: ConversationMeta }) {
  const convo = getCurrentConversation();

  const { id, name } = c;

  return (
    <ConversationContainer
      selected={convo && convo!.id == id}
      onClick={() => {
        if (convo?.id != id && !globalIsLoading()) {
          // Change conversation
          const tmp = getConversations().find((m) => m.id == id);
          setCurrentConversation({ ...tmp! });
          setDelete(false);
          setConfirm(false);
          setRename(name);
          setCurrentQuery("");
        }
      }}
    >
      <Switch>
        <Match when={convo && convo.id == id}>
          <Switch>
            <Match when={del() && confirm()}>
              <FaRegularTrashCan size={24} color="d1d5db" />
              <Text>
                <p>Delete {`"${name}"`}</p>
              </Text>
            </Match>
            <Match when={!del() && confirm()}>
              <IoChatbubbleOutline size={24} />
              <TextInput
                value={rename()}
                onInput={(e) => setRename(e.currentTarget.value)}
              />
            </Match>
            <Match when={true}>
              <IoChatbubbleOutline size={24} />
              <Text>
                <p>{name}</p>
              </Text>
            </Match>
          </Switch>
          <OptionsContainer>
            <Switch>
              <Match when={confirm()}>
                <AiOutlineCheck
                  size={16}
                  color="#d1d5db"
                  onClick={() => {
                    setConfirm(false);
                    if (del()) {
                      const newConversations = getConversations().filter(
                        (c) => c.id != id
                      );

                      if (getCurrentConversation()!.id == id) {
                        setCurrentConversation(
                          newConversations.length > 0
                            ? newConversations[0]
                            : null
                        );
                      }

                      setConversations([...newConversations]);
                      saveToStorage("conversations", newConversations);
                    } else {
                      const newConversations = [
                        ...getConversations().map((c) => {
                          if (c.id == id)
                            return {
                              ...c,
                              name: rename(),
                            };
                          return { ...c };
                        }),
                      ];

                      setConversations([...newConversations]);
                      saveToStorage("conversations", newConversations);
                    }
                  }}
                />
                <FiX
                  size={16}
                  color="#d1d5db"
                  onClick={() => {
                    setConfirm(false);
                    setDelete(false);
                  }}
                />
              </Match>
              <Match when={!confirm()}>
                <FiEdit3
                  size={16}
                  color="#d1d5db"
                  onClick={() => setConfirm(true)}
                />
                <FaRegularTrashCan
                  size={16}
                  color="#d1d5db"
                  onClick={() => {
                    setConfirm(true);
                    setDelete(true);
                  }}
                />
              </Match>
            </Switch>
          </OptionsContainer>
        </Match>
        <Match when={true}>
          <IoChatbubbleOutline size={24} />
          <Text>
            <p>{name}</p>
          </Text>
        </Match>
      </Switch>
    </ConversationContainer>
  );
}

export default Conversation;
