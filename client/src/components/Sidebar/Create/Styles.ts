import { styled } from "solid-styled-components";

export const CreateContainer = styled.div`
  position: absolute;
  width: calc(100% - 1em);
  background-color: #1e1e1f;
  z-index: 999;
  border-radius: 8px;
  top: 64px;
  overflow-y: auto;
  left: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
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
export const FileBox = styled.div`
  height: 280px;
  width: 100%;
  overflow-y: auto;
  border-bottom: 1px rgba(209, 213, 219, 0.4) solid;
`;
