import { FC } from "react";
import CardTitle from "./CardTitle";
import styled from "styled-components";
import { ICard } from "../../types/types";
import ProductParams from "./ProductParams";
import Price from "./Price";
import UserBtns from "./UserBtns";
import CardMainBtn from "./CardMainBtn";
import Container from "../common/Container";
import ImageWrapper from "./ImageWrapper";

interface Props {
  card: ICard;
}

const CardItem: FC<Props> = ({ card }) => {
  const { title, isFavorite, oldPrice, currentPrice, isOnCart } =
    card;
  return (
    <CartItemWrapper>
      <ImageWrapper card={card}/>
      <CardTitle text={title} />
      <ProductParams card={card} />
      <Container>
        <Price oldPrice={oldPrice} currentPrice={currentPrice} />
        <UserBtns isOnCart={isOnCart} isFavorite={isFavorite} />
      </Container>
      <CardMainBtn />
    </CartItemWrapper>
  );
};

const CartItemWrapper = styled.article`
  min-height: 500px;
  border: 1.5px solid #eaebed;
  box-sizing: border-box;
  border-radius: 10px;
`;

export default CardItem;
