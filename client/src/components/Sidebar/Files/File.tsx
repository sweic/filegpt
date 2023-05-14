import { AiOutlineCheck } from "solid-icons/ai";
import { BiSolidFilePdf } from "solid-icons/bi";
import { FaRegularTrashCan, FaSolidFileAudio } from "solid-icons/fa";
import { FiEdit3, FiX } from "solid-icons/fi";
import { Component, Match, Switch } from "solid-js";
import {
  getConversations,
  getFiles,
  setConversations,
  setFiles,
} from "../../../store/data.store";
import {
  confirmFile,
  currentFileId,
  delFile,
  renameFile,
  setConfirmFile,
  setCurrentFileId,
  setDeleteFile,
  setRenameFile,
} from "../../../store/settings.store";
import { saveToStorage } from "../../../store/storage";
import { FileMeta } from "../../../store/types";
import { Text } from "../Styles";
import { FileContainer, OptionsContainer, TextInput } from "./Styles";
interface FileProps extends FileMeta {
  withCreate: boolean;
  withSettings: boolean;
}
const File: Component<FileProps> = ({ name, type, id }) => {
  // #TODO: add notification for loading restriction
  const handleClick = (e: MouseEvent) => {
    if (currentFileId() != id) {
      setCurrentFileId(id);
      setDeleteFile(false);
      setRenameFile(name);
      setConfirmFile(false);
    }
  };

  const icon =
    type === "pdf" ? (
      <BiSolidFilePdf size={24} />
    ) : (
      <FaSolidFileAudio size={24} />
    );

  return (
    <FileContainer onClick={handleClick} selected={currentFileId() == id}>
      <Switch>
        <Match when={currentFileId() == id}>
          <Switch>
            <Match when={delFile() && confirmFile()}>
              <FaRegularTrashCan size={24} color="d1d5db" />
              <Text>
                <p>Delete {`"${name}"`}</p>
              </Text>
            </Match>
            <Match when={!delFile() && confirmFile()}>
              {icon}
              <TextInput
                value={renameFile()}
                onInput={(e) => setRenameFile(e.currentTarget.value)}
              />
            </Match>
            <Match when={true}>
              {icon}
              <Text>
                <p>{name}</p>
              </Text>
            </Match>
          </Switch>
          <OptionsContainer>
            <Switch>
              <Match when={confirmFile()}>
                <AiOutlineCheck
                  size={16}
                  color="d1d5db"
                  onClick={() => {
                    setConfirmFile(false);

                    if (delFile()) {
                      const newFiles = getFiles().filter((f) => f.id != id);
                      setFiles([...newFiles]);
                      saveToStorage("files", newFiles);
                    } else {
                      const newFiles = [
                        ...getFiles().map((f) => {
                          if (f.id == id)
                            return {
                              ...f,
                              name: renameFile(),
                            };
                          return { ...f };
                        }),
                      ];
                      const targetId = id;
                      const newConversations = getConversations().map((c) => {
                        if (c.fileid == targetId)
                          return {
                            ...c,
                            filename: renameFile(),
                          };
                        return { ...c };
                      });
                      setFiles([...newFiles]);
                      setConversations([...newConversations]);
                      saveToStorage("files", newFiles);
                      saveToStorage("conversations", newConversations);
                    }
                  }}
                />
                <FiX
                  size={16}
                  color="d1d5db"
                  onClick={() => {
                    setConfirmFile(false);
                    setDeleteFile(false);
                  }}
                />
              </Match>
              <Match when={!confirmFile()}>
                <FiEdit3
                  size={16}
                  color="#d1d5db"
                  onClick={() => setConfirmFile(true)}
                />
                <FaRegularTrashCan
                  size={16}
                  color="#d1d5db"
                  onClick={() => {
                    setConfirmFile(true);
                    setDeleteFile(true);
                  }}
                />
              </Match>
            </Switch>
          </OptionsContainer>
        </Match>
        <Match when={true}>
          {icon}
          <Text>
            <p>{name}</p>
          </Text>
        </Match>
      </Switch>
    </FileContainer>
  );
};

export default File;
