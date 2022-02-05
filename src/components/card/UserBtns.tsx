import { FC } from "react";
import styled from "styled-components";
import { BsFillCartCheckFill, BsCart } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";

interface Props {
  isOnCart: boolean;
  isFavorite: boolean;
}

const addToCart = (evt: { preventDefault: () => void }) => {
  evt.preventDefault();
  console.log("add  to cart");
};

const addToFavorite = (evt: { preventDefault: () => void }) => {
  evt.preventDefault();
  console.log("add  to favorite");
};

const UserBtns: FC<Props> = ({ isFavorite, isOnCart }) => {
  return (
    <Wrapper>
      {isOnCart ? (
        <Button className="active" onClick={addToCart} title="в корзине">
          <BsFillCartCheckFill />
        </Button>
      ) : (
        <Button onClick={addToCart} title="добавить в корзину">
          <BsCart />
        </Button>
      )}
      {isFavorite ? (
        <Button className="active" onClick={addToFavorite} title="в избранном">
          <AiFillHeart />
        </Button>
      ) : (
        <Button onClick={addToFavorite} title="добавить в избранное">
          <MdFavoriteBorder />
        </Button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.button`
  border-radius: 50%;
  background-color: var(--clr-primary-5);
  border: 1.3px solid var(--clr-primary-4);
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: var(--transition);

  & svg {
    fill: var(--clr-primary-3);
    width: 20px;
    height: 20px;
  }

  &.active svg {
    fill: var(--clr-primary-1);
  }

  &:hover {
    border: 1.3px solid var(--clr-primary-1);
  }
`;

export default UserBtns;
