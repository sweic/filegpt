import { Show } from "solid-js";
import useWindowSize from "../../../hooks/useWindowSize";
import { NavbarContainer, Text } from "./Styles";
import { FiMenu } from "solid-icons/fi";
import { setVisible } from "../../../store/settings.store";
import { getCurrentConversation } from "../../../store/data.store";
function Navbar() {
  const [size] = useWindowSize();
  return (
    <NavbarContainer>
      <Text>
        {getCurrentConversation()
          ? `${getCurrentConversation()!.filename}.${
              getCurrentConversation()!.type
            }`
          : "FileGPT"}
      </Text>
      <Show when={size().width <= 800}>
        <FiMenu
          style={{
            position: "absolute",
            left: "16px",
            top: "10px",
            cursor: "pointer",
          }}
          onClick={() => setVisible(true)}
          size={24}
        />
      </Show>
    </NavbarContainer>
  );
}

export default Navbar;
