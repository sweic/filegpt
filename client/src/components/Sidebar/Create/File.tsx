import { BiSolidFilePdf } from "solid-icons/bi";
import { FaSolidFileAudio } from "solid-icons/fa";
import { Component } from "solid-js";
import {
  getCurrentConversation,
  setCurrentConversation,
  updateConversations,
} from "../../../store/data.store";
import { globalIsLoading } from "../../../store/loading.store";
import { setCreate, setRename } from "../../../store/settings.store";
import { appendToStorage } from "../../../store/storage";
import { ConversationMeta, FileMeta } from "../../../store/types";
import { Text } from "../Styles";
import { FileContainer } from "./Styles";
interface FileProps extends FileMeta {
  withCreate: boolean;
  withSettings: boolean;
}
const File: Component<FileProps> = ({
  name,
  type,
  withCreate,
  namespace,
  id,
}) => {
  // #TODO: add notification for loading restriction
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    if (withCreate && !globalIsLoading()) {
      const newConversation: ConversationMeta = {
        filename: name,
        id: crypto.randomUUID().substring(0, 8),
        messages: [],
        name: `New Conversation - ${name}.${type}`,
        namespace,
        type,
        fileid: id,
      };
      setCurrentConversation({ ...newConversation });
      updateConversations(newConversation);
      appendToStorage("conversations", { ...newConversation });
      setCreate(false);
      setRename(getCurrentConversation()!.name);
    }
  };

  const icon =
    type === "pdf" ? (
      <BiSolidFilePdf size={24} />
    ) : (
      <FaSolidFileAudio size={24} />
    );
  return (
    <FileContainer selected={false} onClick={handleClick}>
      {icon}
      <Text>
        <p>{name}</p>
      </Text>
    </FileContainer>
  );
};

export default File;
