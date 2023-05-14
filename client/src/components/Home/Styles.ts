import { styled } from "solid-styled-components";

export const HomeContainer = styled.div`
  background-color: #343541;
  width: 100%;
  padding: 0 1em;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const HomeContent = styled.div`
    width: 100%;
    height: 100%
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Text = styled.p`
  color: #d1d5db;
  font-size: 24px;
  text-overflow: break-word;
`;
export const SubText = styled.p`
  color: #9ca3af;
  font-size: 18px;
  text-overflow: break-word;
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: auto;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const MainContainer = styled.div`
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

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100%;
  min-height: 0;
`;

export const Title = styled.h3`
  color: #d1d5db;
  font-size: 2.5rem;
  text-overflow: break-word;
`;

export const ButtonsContainer = styled.div`
  padding-top: 3em;
  display: flex;
  gap: 1.5em;
`;
