import { FC, MouseEventHandler } from "react";
import styled from "styled-components";

interface Props {
  onClickHandler: MouseEventHandler<HTMLButtonElement> | undefined;
  className: undefined | string;
}

const MoreBtn: FC<Props> = ({ onClickHandler, className }) => {
  return (
    <Button
      className={className}
      onClick={onClickHandler}
      disabled={className === "hidden" ? true : false}
    >
      {className === "hidden" ? "Товаров больше нет" : "Смотреть все"}
    </Button>
  );
};

const Button = styled.button`
  box-sizing: border-box;
  border-radius: 5px;
  padding: 15px 25px;
  margin: 0 auto;
  cursor: pointer;
  transition: var(--transition);
  font-size: 16px;
  line-height: 23px;
  background-color: var(--clr-primary-5);
  color: var(--clr-primary-1);
  border: 1.3px solid var(--clr-primary-1);
  min-width: 200px;

  &:hover,
  &:focus {
    background-color: var(--clr-primary-1);
    color: var(--clr-primary-5);
  }

  &:active {
    opacity: 0.8;
  }

  &.hidden {
    background-color: var(--clr-primary-5);
    color: var(--clr-primary-3);
    border: 1.3px solid var(--clr-primary-3);

    &:hover {
      background-color: var(--clr-primary-3);
      color: var(--clr-primary-5);
    }
  }
`;

export default MoreBtn;
