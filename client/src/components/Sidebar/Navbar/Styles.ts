import { styled } from "solid-styled-components";

export const NavbarContainer = styled.div`
  height: 48px;
  border-bottom: 1px rgba(209, 213, 219, 0.4) solid;
  padding: 0px 12px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #343541;
  color: white;
  font-weight: 600;
  font-size: 18px;
  justify-content: center;
  width: 100%;
`;
export const Text = styled.p`
  overflow: hidden;
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
