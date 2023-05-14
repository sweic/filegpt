import { styled } from "solid-styled-components";

export const ChatContainer = styled.div`
  background-color: #343541;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;

export const HeaderInformation = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
`;

export const InputContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 0.5rem;
  min-height: 100px;
  max-height: 400px;
  z-index: 999;
  border-color: transparent;
  background-color: #343541 !important;

  @media (min-width: 768px) {
    border-top: none;
    background-color: #343541;
  }
  border-color: rgba(255, 255, 255, 0.2);

  padding-top: 2px;
  @media (min-width: 768px) {
    @supports (not (-webkit-touch-callout: none)) {
      background-image: linear-gradient(0deg, #00000040, transparent);
    }
  }
`;

export const ChatContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Text = styled.p`
  color: #d1d5db;
  font-size: 32px;
  text-overflow: break-word;
`;

export const MainContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 0;
  width: 100%;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100%;
  min-height: 0;
`;

export const MessageContainer = styled.div<{ byUser: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 1rem;
  width: 100%;
  color: #d1d5db;
  background-color: ${({ byUser }) => (byUser ? "#343541" : "#444654")};
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`;

export const MessageContent = styled.div`
  width: 100%;
  padding-left: 1.2rem;
  padding-right: 1rem;
  overflow-wrap: break-word;
  white-space: pre-wrap;

  > * {
    all: revert;
  }

  @media (min-width: 768px) {
    gap: 1.5rem;
    max-width: 42rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  /* Large devices */
  @media (min-width: 1024px) {
    max-width: 48rem;
    padding-left: 0;
    margin-left: auto;
    margin-right: auto;
  }

  /* Extra large devices */
  @media (min-width: 1280px) {
    max-width: 56rem;
  }
`;

export const PlaceholderContainer = styled.div`
  min-height: 200px;
  width: 100%;
`;

export const TextInput = styled.textarea`
  position: relative;
  background-color: #333;
  resize: none;
  color: #fff;
  min-height: 42px;
  max-height: 240px;
  padding: 10px;
  font-size: 16px;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  border-radius: 5px;
  font-weight: 500;
  width: 100%;
  z-index: 500;
  margin: 0 0.2em;
  border: 1px rgb(217, 217, 217) solid;
  &:focus {
    outline: none;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
  padding: 1em 0.5em;
  margin-right: 2px;
  gap: 0.75rem;

  &:last-of-type {
    margin-bottom: 2px;
  }

  @media (min-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 3rem;
    max-width: 36rem;
  }

  @media (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 56rem;
  }

  > svg {
    &:hover {
      color: white !important;
    }
  }
`;

export const LandingContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
`;
export const Title = styled.h3`
  color: #d1d5db;
  font-size: 2.5rem;
  text-overflow: break-word;
`;

export const SubText = styled.p`
  color: #9ca3af;
  font-size: 18px;
  text-overflow: break-word;
`;
