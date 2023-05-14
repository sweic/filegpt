import { Component, Match, Switch } from "solid-js";

import Sidebar from "./components/Sidebar/Sidebar";

import { Toaster } from "solid-toast";
import Chat from "./components/Chat/Chat";
import Home from "./components/Home/Home";
import { AppContainer } from "./components/Home/Styles";
import Modal from "./components/Modal/Modal";
import Settings from "./components/Settings/Settings";
import Navbar from "./components/Sidebar/Navbar/Navbar";
import Upload from "./components/Upload/Upload";
import { getCurrentConversation } from "./store/data.store";
import {
  setSettings,
  setUpload,
  settings,
  upload,
} from "./store/settings.store";
import CreateGlobalStyles from "./styles/createGlobalStyles";
const App: Component = () => {
  return (
    <>
      <CreateGlobalStyles />
      <Toaster position="top-center" />
      <AppContainer id="app">
        <Sidebar />
        <div
          style={{
            display: "flex",
            "flex-direction": "column",
            width: "100%",
            height: "100%",
          }}
        >
          <Navbar />
          <Switch>
            <Match when={!getCurrentConversation()}>
              <Home />
            </Match>
            <Match when={!!getCurrentConversation()}>
              <Chat />
            </Match>
          </Switch>
        </div>
        <Modal
          width={800}
          escapeOnClick={true}
          opened={settings}
          setOpened={setSettings}
        >
          <Settings />
        </Modal>
        <Modal
          width={500}
          escapeOnClick={true}
          opened={upload}
          setOpened={setUpload}
        >
          <Upload />
        </Modal>
      </AppContainer>
    </>
  );
};

export default App;
