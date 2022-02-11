import { FC } from "react";
import styled from "styled-components";
import { IBenefit } from "../../types/types";

const BenefitsItem: FC<IBenefit> = ({ ...benefit }) => {
  const { title, subtitle } = benefit;
  return (
    <Wrapper>
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h4 {
    font-weight: 600;
    font-size: 25px;
    line-height: 36px;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    line-height: 23px;
  }
`;

export default BenefitsItem;
