import { styled, keyframes } from "solid-styled-components";
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderContainer = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #333;
  border-radius: 50%;
  width: 30px !important;
  height: 30px !important;
  animation: ${spin} 1.5s linear infinite;
`;
