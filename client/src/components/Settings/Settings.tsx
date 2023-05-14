import { Match, Switch, createSignal } from "solid-js";
import { setSettings, settings } from "../../store/settings.store";
import {
  BodyContainer,
  ButtonsContainer,
  SettingsContainer,
  SettingsContent,
  Tab,
  TabsContainer,
  Text,
  Title,
  TitleContainer,
} from "./Styles";

import { FiKey, FiSettings, FiX } from "solid-icons/fi";
import { getApiKey, setApiKey } from "../../store/data.store";
import Button from "../Button/Button";
import General from "./General";
import Keys from "./Keys";

function Settings() {
  const [page, setPage] = createSignal<"general" | "keys">("keys");
  const [currentKey, setCurrentKey] = createSignal(getApiKey());

  return (
    <SettingsContainer>
      <TitleContainer>
        <Title>Settings</Title>
        <FiX
          color="#d1d5db"
          style={{ cursor: "pointer" }}
          size={24}
          onClick={() => setSettings(false)}
        />
      </TitleContainer>
      <BodyContainer>
        <TabsContainer>
          <Tab
            selected={page() == "general"}
            onClick={() => setPage("general")}
          >
            <FiSettings
              color="#d1d5db"
              size={20}
              style={{ "margin-top": "4px" }}
            />
            <Text>General</Text>
          </Tab>
          <Tab selected={page() == "keys"} onClick={() => setPage("keys")}>
            <FiKey color="#d1d5db" size={20} style={{ "margin-top": "4px" }} />
            <Text>Keys</Text>
          </Tab>
        </TabsContainer>
        <SettingsContent>
          <Switch>
            <Match when={settings() && page() == "general"}>
              <General />
            </Match>
            <Match when={settings() && page() == "keys"}>
              <Keys keyVal={currentKey} setKeyVal={setCurrentKey} />
            </Match>
          </Switch>
        </SettingsContent>
      </BodyContainer>
      <ButtonsContainer>
        <Button
          width={80}
          height={48}
          onClick={() => {
            setApiKey(currentKey());
            setSettings(false);
          }}
        >
          Save
        </Button>
      </ButtonsContainer>
    </SettingsContainer>
  );
}

export default Settings;
