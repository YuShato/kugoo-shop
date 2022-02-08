import { FC } from "react";
import styled from "styled-components";
import { MAX_FEATURES_AMOUNT } from "../../consts/features";
import { IFeature } from "../types/types";
import FeatureItem from "./FeatureItem";
import Offer from "./Offer";

interface Props {
  featuresList: IFeature[];
  type: string;
}

const FeatureList: FC<Props> = ({ featuresList, type }) => {
  const currentFeatures =
    featuresList.length < 5
      ? featuresList
      : featuresList.slice(0, MAX_FEATURES_AMOUNT);

  return (
    <Wrapper>
      {currentFeatures.map((feature: IFeature, index: number) => {
        return <FeatureItem feature={feature} key={index} />;
      })}
      <Offer type={type} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 350px));
  gap: 30px;
  margin: 0 auto 50px;
`;

export default FeatureList;
