import { For } from "solid-js";
import { getFiles } from "../../../store/data.store";
import File from "./File";
import { FileBox } from "./Styles";
function FileList({
  withSettings,
  withCreate,
}: {
  withSettings: boolean;
  withCreate: boolean;
}) {
  return (
    <FileBox>
      <For each={getFiles()}>
        {(item, idx) => {
          return (
            <File
              withCreate={withCreate}
              withSettings={withSettings}
              {...item}
            />
          );
        }}
      </For>
    </FileBox>
  );
}

export default FileList;
