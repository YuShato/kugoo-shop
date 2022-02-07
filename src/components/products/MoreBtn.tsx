import { FC, MouseEventHandler } from "react";
import styled from "styled-components";

interface Props {
  onClickHandler: MouseEventHandler<HTMLButtonElement> | undefined
}

const MoreBtn: FC<Props> = ({onClickHandler}) => {
  return <Button onClick={onClickHandler}>Смотреть все</Button>;
};

const Button = styled.button`
  background-color: var(--clr-primary-5);
  color: var(--clr-primary-1);
  border: 1.3px solid var(--clr-primary-1);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 15px 25px;
  margin: 0 auto;
  cursor: pointer;
  transition: var(--transition);
  font-size: 16px;
  line-height: 23px;

  &:hover,
  &:focus {
    background-color: var(--clr-primary-1);
    color: var(--clr-primary-5);
  }

  &:active {
    opacity: 0.8;
  }
`;

export default MoreBtn;
