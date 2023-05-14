import { AiOutlineCloudUpload } from "solid-icons/ai";
import { BiSolidFilePdf } from "solid-icons/bi";
import { FaSolidFileAudio } from "solid-icons/fa";
import { FiX } from "solid-icons/fi";
import { Match, Switch, createEffect } from "solid-js";
import {
  globalIsLoading,
  setUploadIsLoading,
  uploadIsLoading,
} from "../../store/loading.store";
import {
  currentFile,
  fileName,
  setCurrentFile,
  setFileName,
  setUpload,
  upload,
} from "../../store/settings.store";
import handleFileUpload from "../../utils/api/handleFileUpload";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import {
  BodyContainer,
  ButtonsContainer,
  Container,
  Dropzone,
  DropzoneDescription,
  FileBox,
  FileContainer,
  FileDetails,
  FileInput,
  FileRemove,
  Text,
  TextInput,
  Title,
  TitleContainer,
  UploadContainer,
} from "./Styles";
const Upload = () => {
  const formatSize = (size: number) => {
    const result = (size / 1048576).toFixed(1);
    return size >= 1 ? `${result} MB` : `${(size / 1024).toFixed(1)} KB`;
  };

  createEffect(() => {
    if (!upload()) {
      setCurrentFile(null);
      setFileName("");
    }
  });

  // #TODO: Set a file size limit

  return (
    <UploadContainer>
      <TitleContainer>
        <Title>Upload Files</Title>
        <FiX
          color="#d1d5db"
          style={{ cursor: "pointer" }}
          size={24}
          onClick={() => !uploadIsLoading() && setUpload(false)}
        />
      </TitleContainer>
      <BodyContainer>
        <Container>
          <Text>File Name</Text>
          <TextInput
            value={fileName()}
            onChange={(e) => setFileName(e.currentTarget.value)}
          />
        </Container>
        <Container>
          <Switch>
            <Match when={!currentFile()}>
              <Dropzone>
                <DropzoneDescription>
                  <AiOutlineCloudUpload size={40} />
                  <Text>Upload PDF/Audio files here</Text>
                  <Text>Drag and drop, or click to select</Text>
                </DropzoneDescription>
                <FileInput
                  accept=".pdf,.mp3"
                  max-size="52428800"
                  type="file"
                  onChange={(e) => setCurrentFile(e.currentTarget.files![0])}
                />
              </Dropzone>
            </Match>
            <Match when={currentFile()}>
              <FileContainer>
                <FileRemove>
                  <FiX
                    size={24}
                    onClick={() => setCurrentFile(null)}
                    color="#d1d5db"
                    style={{ cursor: "pointer" }}
                  />
                </FileRemove>
                <FileBox>
                  <Switch>
                    <Match when={currentFile()!.type.startsWith("application")}>
                      <BiSolidFilePdf size={48} />
                    </Match>
                    <Match when={currentFile()!.type.startsWith("audio")}>
                      <FaSolidFileAudio size={48} />
                    </Match>
                  </Switch>
                  <FileDetails>
                    <Text>{currentFile()!.name}</Text>
                    <Text>{formatSize(currentFile()!.size)}</Text>
                  </FileDetails>
                </FileBox>
              </FileContainer>
            </Match>
          </Switch>
        </Container>
      </BodyContainer>
      <ButtonsContainer>
        <Button
          disabled={!fileName() || !currentFile() || globalIsLoading()}
          width={100}
          height={48}
          onClick={async () => {
            setUploadIsLoading(true);
            const resp = await handleFileUpload(currentFile()!, fileName());
          }}
        >
          <Switch fallback={<Loader />}>
            <Match when={!globalIsLoading()}>Upload</Match>
          </Switch>
        </Button>
      </ButtonsContainer>
    </UploadContainer>
  );
};

export default Upload;
