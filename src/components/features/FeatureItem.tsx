import { FC } from "react";
import styled from "styled-components";
import LinkBtn from "../common/LinkBtn";
import { IFeature } from "../../types/types";

interface Props {
  feature: IFeature;
}

const FeatureItem: FC<Props> = ({ feature }) => {
  const { icon, subtitle, text, info } = feature;
  return (
    <Wrapper>
      {icon}
      <SubTitle>{subtitle}</SubTitle>
      <Text>{text}</Text>
      {info ? <LinkBtn onClickHandler={undefined}>{info}</LinkBtn> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
  padding: 20px;
  border: 1px solid var(--clr-primary-4);
  box-sizing: border-box;
  border-radius: 10px;

  svg {
    fill: var(--clr-primary-1);
    stroke: var(--clr-primary-1);
    width: 25px;
    height: 25px;

    & path {
      stroke: var(--clr-primary-1);
    }
  }

  button {
    padding: 0;
    background-color: transparent;
    text-align: left;
  }
`;
const Text = styled.p`
  font-size: 14px;
  line-height: 18px;
`;

const SubTitle = styled.h4`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
`;
export default FeatureItem;
