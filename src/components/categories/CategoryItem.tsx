import { FC } from "react";
import styled from "styled-components";
import { MAX_OFFER_LENGTH } from "../../consts/categories";
import { IAction } from "../types/types";

interface Props {
  category: IAction;
}

const CategoryItem: FC<Props> = ({ category }) => {
  const { id, title, offer } = category;
  return (
    <Category id={id.toString()}>
      <Wrapper>
        <h3>{title}</h3>
        <p>{offer.length < 20 ? offer : `${offer.slice(0, MAX_OFFER_LENGTH)}...`}</p>
      </Wrapper>
    </Category>
  );
};

const Category = styled.article`
  width: 255px;
  height: 255px;
  background: ${(props) =>
    `url(../../assets/img/categories/${props.id}.jpg) no-repeat`};
  border-radius: 10px;
  background-size: cover;
`;

const Wrapper = styled.div`
  display: grid;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  color: var(--clr-primary-5);
  padding: 10px;
  font-weight: 500;
  margin: 70% 10px 10px 10px;

  h3 {
    font-size: 18px;
    line-height: 26px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
  }
`;

export default CategoryItem;
