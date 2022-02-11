import { FC } from "react";
import styled from "styled-components";
import { IAction } from "../../types/types";
import BlurBlock from "../common/BlurBlock";

interface Props {
  category: IAction;
}

const CategoryItem: FC<Props> = ({ category }) => {
  const { id, title, offer } = category;
  return (
    <Category id={id.toString()}>
      <BlurBlock title={title} offer={offer} />
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

export default CategoryItem;
