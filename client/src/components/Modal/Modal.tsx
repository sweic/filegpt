import { Accessor, Component, JSX, Setter, Show } from "solid-js";
import ModalContent from "./ModalContent";
interface ModalProps {
  children: JSX.Element;
  escapeOnClick: boolean;
  opened: Accessor<boolean>;
  setOpened: Setter<boolean>;
  width?: number;
}
const Modal: Component<ModalProps> = ({
  children,
  escapeOnClick,
  opened,
  setOpened,
  width,
}) => {
  return (
    <Show when={opened()}>
      <ModalContent
        width={width}
        escapeOnClick={escapeOnClick}
        setOpened={setOpened}
      >
        {children}
      </ModalContent>
    </Show>
  );
};

export default Modal;
