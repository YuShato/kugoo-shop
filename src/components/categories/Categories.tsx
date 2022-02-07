import { FC } from "react";
import styled from "styled-components";
import { MAX_CATEGORIES_LENGTH } from "../../consts/categories";
import DefaultTitle from "../common/DefaultTitle";
import { IAction } from "../types/types";
import CategoryItem from "./CategoryItem";

interface Props {
  categories: IAction[];
}

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

const ServiceWidget = styled.div`
  display: flex;
  width: 279px;
  background: var(--clr-primary-4);
  border-radius: 5px;
`;
export default Categories;
