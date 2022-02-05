import { FC } from "react";
import styled from "styled-components";

interface Props {
  oldPrice: number;
  currentPrice: number;
}

const Price: FC<Props> = ({ oldPrice, currentPrice }) => {
  return (
    <Wrapper>
      {oldPrice ? <OldPrice>{oldPrice}</OldPrice> : null}
      <CurrentPrice>{currentPrice}</CurrentPrice>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  margin-left: 25px;
  margin-right: 25px;
`;

const OldPrice = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  text-decoration-line: line-through;
  color: var(--clr-primary-3);
`;

const CurrentPrice = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
`;

export default Price;
