import { FC } from "react";
import styled from "styled-components";
import FilterButton from "../common/FilterButton";
import { IFilter } from "../../types/types";

interface Props {
    filters: IFilter[]
}

const ProductFilters:FC<Props> = ({filters}) => {
  return (
    <Wrapper>
      {filters.map((filter: IFilter, index: number) => {
        return <FilterButton filter={filter} key={index} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default ProductFilters;
