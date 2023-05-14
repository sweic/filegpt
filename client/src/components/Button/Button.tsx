import { JSX } from "solid-js";
import { ButtonContainer } from "./Styles";

export interface ButtonProps {
  width?: number;
  height?: number;
  color?: string;
  hoverColor?: string;
  children: JSX.Element;
  disabled?: boolean;
  onClick: () => void;
}
function Button(props: ButtonProps) {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
}

export default Button;
