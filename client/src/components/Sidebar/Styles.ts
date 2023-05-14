import { styled } from "solid-styled-components";
export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentBox = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  padding-right: 4px;
  position: relative;
  align-items: center;
  gap: 4px;
`;
export const ContentBox2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Text = styled.div`
  height: 2.5em;
  overflow: hidden;
  width: 100%;
  font-weight: 500;
  padding-left: 4px;
  padding-right: 4px;
  white-space: nowrap;
  align-self: center;
  display: flex;
  align-items: center;

  > p {
    font-weight: 600;
    font-size: 13px;
    line-height: 0.75rem;
  }
`;

export const TextHeader = styled(Text)`
  padding-left: 0.5em;
  color: silver;
`;

export const GradientBar = styled.div`
  position: absolute;
  inset-y: 0;
  right: 0;
  width: 8px;
  z-index: 10;
  background-image: linear-gradient(to left, #1f2937, #111827);
  transition: background-image 0.3s ease-in-out;

  &:hover {
    background-image: linear-gradient(to left, #2a2b32, #111827);
  }
`;

export const Button = styled.div`
  padding: 8px 20px;
  border-radius: 4px;
  width: 100%;
  background-color: #333;
  color: white;
  border: 1px #ccc solid;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #403e3e;
  }
`;

interface ContainerProps {
  visible: boolean;
}
export const Container = styled.div<ContainerProps>`
  background-color: #333;
  color: #ffff;
  display: flex;
  z-index: 99999;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  width: 300px;
  height: 100%;
  @media (max-width: 800px) {
    position: absolute;
    left: 0;
    width: 300px;
    transform: translateX(-110%);
    transform: ${(props) =>
      props.visible ? "translateX(0%)" : "translateX(-110%)"};
    transition: 350ms ease-out;
  }
`;

export const IconsBar = styled.div`
  display: flex;
  padding-left: 0.5em;
  width: 100%;
  gap: 0.5em;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.5em;
`;
