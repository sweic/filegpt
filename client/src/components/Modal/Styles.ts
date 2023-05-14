import { styled } from "solid-styled-components";
export const ClickableOverlay = styled.div`
  padding: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  position: relative;
`;
export const ModalContainer = styled.div<{ width?: number }>`
  z-index: 10001;
  align-self: center;
  width: ${({ width }) => width ?? 800}px;
  z-index: 1000;
  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    width: min(calc(100% - 2em), ${({ width }) => width ?? 800});
  }
`;

export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;
