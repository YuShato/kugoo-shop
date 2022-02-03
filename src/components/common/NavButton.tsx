import { FC } from "react";
import styled from "styled-components";

interface NavButtonProps {
  text: string;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const NavButton: FC<NavButtonProps> = ({ onClickHandler, text }) => {
  return (
    <DefaultLinkWrapper onClick={onClickHandler}>{text}</DefaultLinkWrapper>
  );
};

const DefaultLinkWrapper = styled.button`
  text-decoration: none;
  color: var(--clr-primary-3);
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  height: min-content;
  width: max-content;
  line-height: 20px;
  transition: var(--transition);

  &:hover {
    color: var(--clr-primary-10);
  }
`;

export default NavButton;
