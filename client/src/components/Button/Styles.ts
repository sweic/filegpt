import { styled } from "solid-styled-components";
import { ButtonProps } from "./Button";
import { IconButtonProps } from "./IconButton";

export const ButtonContainer = styled.button<ButtonProps>`
  width: ${({ width }) => width ?? 48}px;
  height: ${({ height }) => height ?? 80}px;
  background-color: ${({ color }) => color ?? "#343541"};
  color: white;
  border: 1px rgb(217, 217, 217) solid;
  border-radius: 5px;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor ?? "#3c3e4d"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const IconContainer = styled.div<IconButtonProps>`
  width: ${({ width }) => width ?? 48}px;
  height: ${({ height }) => height ?? 48}px;
  background-color: #333;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #403e3e;
  }
`;
