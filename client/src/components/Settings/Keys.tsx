import { Accessor, Setter, onCleanup, onMount } from "solid-js";
import { getApiKey } from "../../store/data.store";
import { settings } from "../../store/settings.store";
import { KeyContainer, KeyInput, Text } from "./Styles";
function Keys({
  keyVal,
  setKeyVal,
}: {
  keyVal: Accessor<string>;
  setKeyVal: Setter<string>;
}) {
  let inputRef: HTMLInputElement | undefined;

  onMount(() => {
    if (inputRef) inputRef.focus();
  });

  onCleanup(() => {
    if (!settings()) setKeyVal(getApiKey());
  });

  return (
    <KeyContainer>
      <Text>OpenAI API Key</Text>
      <KeyInput
        value={keyVal()}
        onChange={(e) => setKeyVal(e.currentTarget.value)}
        autofocus
        ref={inputRef}
        type="text"
      />
    </KeyContainer>
  );
}

export default Keys;
