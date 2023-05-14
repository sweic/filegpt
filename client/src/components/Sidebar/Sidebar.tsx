import axios from "axios";
import { AiFillGithub } from "solid-icons/ai";
import { FiPlus, FiSettings } from "solid-icons/fi";
import { Accessor, Show } from "solid-js";
import useWindowSize from "../../hooks/useWindowSize";
import {
  create,
  setCreate,
  setSettings,
  setUpload,
  setVisible,
  visible,
} from "../../store/settings.store";
import IconButton from "../Button/IconButton";
import Conversations from "./Conversations/ConversationList";
import FileList from "./Files/FileList";
import {
  Button,
  Container,
  ContentBox,
  ContentBox2,
  HeaderContainer,
  IconsBar,
  TextHeader,
} from "./Styles";
import Create from "./Create/Create";
import Navbar from "./Navbar/Navbar";
import { VsClose } from "solid-icons/vs";
function Sidebar() {
  const [size] = useWindowSize();

  return (
    <>
      <Container visible={visible()}>
        <ContentBox>
          <Button onClick={() => setCreate(!create())}>New chat</Button>
          <Show when={size().width <= 800}>
            <VsClose
              style={{
                color: "white",
                cursor: "pointer",
                "flex-basis": "34px",
              }}
              onClick={() => setVisible(false)}
              size={24}
            />
          </Show>
          <Show when={create()}>
            <Create />
          </Show>
        </ContentBox>
        <ContentBox2>
          <TextHeader>Conversations</TextHeader>
        </ContentBox2>
        <Conversations />
        <HeaderContainer>
          <TextHeader>Files</TextHeader>
          <IconButton onClick={() => setUpload(true)} width={32} height={32}>
            <FiPlus style={{ "padding-top": "4px" }} size={28} />
          </IconButton>
        </HeaderContainer>
        <FileList withSettings={true} withCreate={false} />

        <IconsBar>
          <IconButton>
            <AiFillGithub
              size={24}
              onClick={() =>
                window.open("https://github.com/sweic/filegpt", "_blank")
              }
            />
          </IconButton>
          <IconButton onClick={() => setSettings(true)}>
            <FiSettings size={24} />
          </IconButton>
        </IconsBar>
      </Container>
    </>
  );
}
export default Sidebar;
