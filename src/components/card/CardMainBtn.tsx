import { FC } from "react";
import styled from "styled-components";

const buyToClick = (evt: { preventDefault: () => void }) => {
  evt.preventDefault();
  console.log("Buy  to 1 click");
};

const CardMainBtn: FC = () => {
  return <Button onClick={buyToClick}>Купить в 1 клик</Button>;
};

const Button = styled.button`
  display: flex;
  width: calc(100% - 50px);
  text-align: center;
  padding-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  margin-bottom: 20px;
  color: var(--clr-primary-5);
  background-color: var(--clr-primary-1);
  border-radius: 5px;
  padding: 10px 20px;
  box-sizing: border-box;
  border: 1px solid transparent;
`;
export default CardMainBtn;
