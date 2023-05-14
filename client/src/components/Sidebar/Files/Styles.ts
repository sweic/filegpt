import { styled } from "solid-styled-components";

export const FileBox = styled.div`
  height: 280px;
  width: 100%;
  overflow-y: auto;
  border-bottom: 1px rgba(209, 213, 219, 0.4) solid;
`;

export const FileContainer = styled.div<{ selected: boolean }>`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  box-sizing: border-box !important;
  gap: 0.3em;
  border-radius: 8px;
  height: 56px;

  transition: background-color 0.3s ease-in-out;
  background-color: ${({ selected }) => (selected ? "#403e3e" : "")};
  &:hover {
    background-color: #403e3e;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  margin-left: 0.2em;
  border-radius: 4px;
  border: 1px #d1d5db solid;
  color: white;
  z-index: 9999;
  font-weight: 500;
  padding: 0.2em 0.5em;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 0.5em;
  width: 50px;
  height: 100%;
  align-items: center;
  padding-left: 0.1em;

  > * {
    &:hover {
      color: white !important;
    }
  }
`;
