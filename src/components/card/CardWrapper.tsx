import styled from "styled-components";
import { MAX_PRODUCTS_LENGTH } from "../../consts/consts";
import { filters } from "../../consts/filters";
import mockCards from "../../consts/mockData";
import DefaultTitle from "../common/DefaultTitle";
import ProductFilters from "../products/Filters";
import { ICard } from "../types/types";
import CardItem from "./CardItem";

type Props = {};

const CardWrapper = (props: Props) => {
  return (
    <Container>
      <div className="container">
        <DefaultTitle title="Электросамокаты" />
        <ProductFilters filters={filters} />
      </div>
      <Wrapper>
        {mockCards
          .slice(0, MAX_PRODUCTS_LENGTH)
          .map((card: ICard, index: number) => (
            <CardItem card={card} key={index} />
          ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  max-width: 1170px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 28px;
  width: 100%;
  grid-template-columns: repeat(4, minmax(250px, 350px));
  margin-top: 50px;
`;

export default CardWrapper;
