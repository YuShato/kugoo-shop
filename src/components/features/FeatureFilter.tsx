import { FC } from "react";
import styled from "styled-components";
import FilterButton from "../common/FilterButton";
import { IFilter } from "../../types/types";
interface Props {
  filters: IFilter[];
}

const FeatureFilter: FC<Props> = ({ filters }) => {
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
  justify-content: center;
  gap: 20px;
  margin: 50px auto;

  button {
    padding: 15px 25px;
  }
`;

export default FeatureFilter;
