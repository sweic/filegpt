import { styled } from "solid-styled-components";

export const SettingsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em 1.25em;
  background-color: #1e1e1f;
  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  height: 72px;
  align-items: center;
  border-bottom: 1px rgba(209, 213, 219, 0.4) solid;

  justify-content: space-between;
`;

export const BodyContainer = styled.div`
  display: flex;
  height: 400px;
`;

export const Title = styled.h3`
  font-size: 24px;
  color: #d1d5db;
  font-weight: bold;
`;

export const TabsContainer = styled.div`
  width: 160px;
  flex-basis: 200px;
  display: flex;
  padding: 1em 0.2em;
  flex-direction: column;
  gap: 4px;
`;

export const SettingsContent = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: 0.75em 1em;
`;

interface TabProps {
  selected: boolean;
}
export const Tab = styled.div<TabProps>`
  width: 100%;
  height: 48px;
  display: flex;
  box-sizing: border-box !important;
  gap: 1em;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box !important;
  padding: 8px 12px;
  transition: background-color 0.1s ease-in-out;

  background-color: ${(props) => (props.selected ? "#403e3e" : "#1e1e1f")};
`;

export const Text = styled.p`
  color: #d1d5db;
  font-size: 16px;
`;

export const KeyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
`;

export const KeyInput = styled.input`
  position: relative;
  background-color: #333;
  color: #fff;
  padding: 10px;
  height: 42px;
  font-size: 14px;
  border-radius: 5px;
  font-weight: 500;
  border: 1px #1a1a1a solid;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
