import { FC } from "react";
import styled from "styled-components";
import { MAX_CATEGORIES_LENGTH } from "../../consts/categories";
import DefaultTitle from "../common/DefaultTitle";
import MoreBtn from "../products/MoreBtn";
import { IAction } from "../types/types";
import CategoryItem from "./CategoryItem";
import ServiceWidget from "./ServiceWidget";

interface Props {
  categories: IAction[];
}

const showMore = (evt: { preventDefault: () => void }) => {
  evt.preventDefault();
  console.log("show more");
};

const Categories: FC<Props> = ({ categories }) => {
  return (
    <Wrapper>
      <div className="container">
        <DefaultTitle title="Популярные категории" />
        <ServiceWidget />
      </div>
      <Container>
        {categories
          .slice(0, MAX_CATEGORIES_LENGTH)
          .map((category: IAction, index: number) => {
            return <CategoryItem key={index} category={category} />;
          })}
      </Container>
      <MoreBtn onClickHandler={showMore} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
`;

export default Categories;
