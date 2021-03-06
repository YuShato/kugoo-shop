import React, { FC } from "react";
import styled from "styled-components";
import { MAX_OFFER_LENGTH } from "../../consts/categories";
import InfoText from "./InfoText";

interface Props {
  title: string;
  offer: string;
}

const BlurBlock: FC<Props> = ({ title, offer, children }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <InfoText>
        {offer.length < MAX_OFFER_LENGTH
          ? offer
          : `${offer.slice(0, MAX_OFFER_LENGTH)}...`}
      </InfoText>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  color: var(--clr-primary-5);
  padding: 10px;
  font-weight: 500;
  margin: 70% 10px 10px 10px;
  max-width: 233px;

  h3 {
    font-size: 18px;
    line-height: 26px;
  }

  p {
    color: var(--clr-primary-5);
  }
`;

export default BlurBlock;
