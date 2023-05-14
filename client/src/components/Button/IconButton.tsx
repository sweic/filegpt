import { JSX } from "solid-js";
import { IconContainer } from "./Styles";
export interface IconButtonProps {
  width?: number;
  height?: number;
  children: JSX.Element;
  onClick?: () => void;
}
function IconButton(props: IconButtonProps) {
  return <IconContainer {...props}>{props.children}</IconContainer>;
}

export default IconButton;
