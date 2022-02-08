import { FC } from "react";
import styled from "styled-components";

interface Props {
  type: string;
}

const BgBlock: FC<Props> = ({ type }) => {
  return <Wrapper className={`${type}`}></Wrapper>;
};

const Wrapper = styled.div`
  width: 50%;
  height: auto;
  background-position-x: right;
  background-position-y: center;
  background-size: cover;
  background-repeat: no-repeat;

  &.shop {
    background-image: url(../../assets/img/shop.png);
  }
  &.service {
    background-image: url(../../assets/img/service.png);
  }
`;

export default BgBlock;
