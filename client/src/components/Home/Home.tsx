import { setSettings, setUpload } from "../../store/settings.store";
import Button from "../Button/Button";
import {
  ButtonsContainer,
  HomeContainer,
  HomeContent,
  MainContainer,
  SubText,
  Text,
  Title,
} from "./Styles";

function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <MainContainer>
          <Title>Welcome</Title>
          <Text>To get started, upload your first file</Text>
          <div style={{ "margin-top": "1em" }}>
            <SubText>
              To chat with audio files, enter your OpenAI API key
            </SubText>
          </div>
          <Text></Text>
          <ButtonsContainer>
            <Button width={144} height={56} onClick={() => setSettings(true)}>
              Open settings
            </Button>
            <Button width={144} height={56} onClick={() => setUpload(true)}>
              Upload
            </Button>
          </ButtonsContainer>
        </MainContainer>
      </HomeContent>
    </HomeContainer>
  );
}

export default Home;
