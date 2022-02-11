import { FC } from "react";
import styled from "styled-components";
import { ICard } from "../../types/types";
import { GiCarBattery, GiSpeedometer } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { RiTimerLine } from "react-icons/ri";

interface Props {
  card: ICard;
}

const ProductParams: FC<Props> = ({ card }) => {
  return (
    <Wrapper>
      <PropItem>
        <GiCarBattery />
        {card.params.accamulator} mAh
      </PropItem>
      <PropItem>
        <GiSpeedometer />
        {card.params.speed} км/ч
      </PropItem>
      <PropItem>
        <ImPower />
        {card.params.power} л.с.
      </PropItem>
      <PropItem>
        <RiTimerLine />
        {card.params.time} часов
      </PropItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 25px;
  padding-right: 35px;
  column-gap: 24px;
  row-gap: 16px;
  margin-top: 20px;
  margin-bottom: 25px;
`;

const PropItem = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 16px;
  color: var(--clr-primary-3);

  & svg {
    width: 18px;
    height: 18px;
    fill: var(--clr-primary-3);
    margin-right: 10px;
  }
`;

export default ProductParams;
