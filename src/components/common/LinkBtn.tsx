import { FC, MouseEventHandler, ReactElement } from "react";
import styled from "styled-components";

interface Props {
  onClickHandler: MouseEventHandler<HTMLButtonElement> | undefined;
  children: ReactElement[] | (Element & string) | string;
}

const LinkBtn: FC<Props> = ({ onClickHandler, children }) => {
  return <Wrapper onClick={onClickHandler}>{children}</Wrapper>;
};

const Wrapper = styled.button`
  color: var(--clr-primary-1);
  border: none;
  cursor: pointer;
  transition: var(--transition);
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:active {
    color: var(--clr-primary-8);
  }
`;

export default LinkBtn;
