import { FC } from "react";
import styled from "styled-components";
import DefaultTitle from "../common/DefaultTitle";
import FeatureList from "./FeatureList";
import { IFeature, IFilter } from "../types/types";
import FeatureFilter from "./FeatureFilter";

interface Props {
  featuresList: IFeature[];
  filters: IFilter[];
  type: string;
}

const Features: FC<Props> = ({ featuresList, filters, type }) => {
  return (
    <div className="container">
      <Wrapper>
        <DefaultTitle
          title="Предлагаем самые выгодные цены
            на&nbsp;продукты Kugoo за счет прямых поставок"
        />
        <SubTitle>и заботимся об удобстве покупателей</SubTitle>
        <FeatureFilter filters={filters} />
        <FeatureList featuresList={featuresList} type={type} />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  display: grid;
  margin: 50px auto;
  justify-items: center;

  h3 {
    max-width: 925px;
    text-align: center;
    margin-bottom: 18px;
  }
`;

const SubTitle = styled.p`
  font-size: 20px;
  line-height: 29px;
  color: var(--clr-primary-2);
`;

export default Features;
