import { Component, JSX, Setter, onCleanup, onMount } from "solid-js";
import { Portal } from "solid-js/web";
import { ClickableOverlay, ModalContainer, Overlay } from "./Styles";
interface ModalContentProps {
  children: JSX.Element;
  escapeOnClick: boolean;
  setOpened: Setter<boolean>;
  width?: number;
}
const ModalContent: Component<ModalContentProps> = ({
  children,
  escapeOnClick,
  setOpened,
  width,
}) => {
  let divRef: HTMLDivElement | undefined;

  const handleClick = () => {
    if (escapeOnClick) {
      setOpened(false);
    }
  };

  onMount(() => {
    if (!divRef) return;
    divRef.addEventListener("click", handleClick);
  });

  onCleanup(() => {
    if (!divRef) return;
    divRef.removeEventListener("click", handleClick);
  });

  return (
    <Portal mount={document.getElementById("app")!}>
      <div
        style={{
          position: "fixed",
          "z-index": "999",
          width: "100%",
          height: "100%",
          left: "0",
          top: "0",
          "overflow-y": "auto",
          "background-color": "rgba(36, 66, 92, 0.5)",
        }}
      >
        <ClickableOverlay>
          <ModalContainer width={width}>{children}</ModalContainer>
          <Overlay ref={divRef} />
        </ClickableOverlay>
      </div>
    </Portal>
  );
};

export default ModalContent;
