import React, { FC } from "react";
import styled from "styled-components";
import { IBenefit } from "../types/types";
import BenefitsItem from "./BenefitsItem";
import Rating from "./Rating";

interface BenefitsListProps {
  benefitsList: IBenefit[];
}

const BenefitsList: FC<BenefitsListProps> = ({ benefitsList }) => {
  return (
    <div className="container">
      <BenefitsWrapper>
        <ul>
          {benefitsList.map((benefit: IBenefit, index: number) => (
            <BenefitsItem key={index} {...benefit} />
          ))}
        </ul>
        <Rating />
      </BenefitsWrapper>
    </div>
  );
};

const BenefitsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 60px;

  ul {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
`;

export default BenefitsList;
