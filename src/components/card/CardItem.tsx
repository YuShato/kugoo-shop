import { FC } from "react";
import CardTitle from "./CardTitle";
import styled from "styled-components";
import { ICard } from "../types/types";
import AccentBtn from "./AccentBtn";
import ScaleIcon from "./ScaleIcon";
import Arrows from "./Arrows";
import ProductParams from "./ProductParams";
import Price from "./Price";
import UserBtns from "./UserBtns";

interface Props {
  card: ICard;
}

const CardItem: FC<Props> = ({ card }) => {
  const { title, isFavorite, oldPrice, currentPrice, isOnCart, isCompare } =
    card;
  return (
    <CartItemWrapper>
      <ImageWrapper>
        <AccentBtn card={card} />
        <ScaleIcon isCompare={isCompare} />
        <Arrows />
        <img
          src="../../assets/img/test.jpg"
          alt={title}
          width={255}
          height={241}
        />
      </ImageWrapper>
      <CardTitle text={title} />
      <ProductParams card={card} />
      <Container>
        <Price oldPrice={oldPrice} currentPrice={currentPrice} />
        <UserBtns isOnCart={isOnCart} isFavorite={isFavorite} />
      </Container>
    </CartItemWrapper>
  );
};

const CartItemWrapper = styled.article`
  min-height: 500px;
  border-radius: 1px solid red;
  border-radius: 10px 10px 0px 0px;
`;

const ImageWrapper = styled.div`
  background: #f0f1f5;
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  position: relative;

  &:hover .arrow-btn {
    opacity: 1;
    transition: var(--transition);
  }

  img {
    width: 100%;
    height: 241px;
    object-fit: contain;
    object-position: center;
    background: #f0f1f5;
    border-radius: 10px 10px 0px 0px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-right: 35px;
`


export default CardItem;
