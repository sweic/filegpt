import { onMount, onCleanup } from "solid-js";
import { CreateContainer } from "./Styles";
import { setCreate } from "../../../store/settings.store";
import FileList from "./FileList";

function Create() {
  let divRef: HTMLDivElement | undefined;

  const handleClick = (e: MouseEvent) => {
    if (divRef && !divRef.contains(e.target as Node)) {
      setCreate(false);
    }
  };

  onMount(() => {
    document.addEventListener("click", handleClick);
  });

  onCleanup(() => {
    document.removeEventListener("click", handleClick);
  });

  return (
    <CreateContainer ref={divRef}>
      <FileList withCreate={true} withSettings={false} />
    </CreateContainer>
  );
}

export default Create;
