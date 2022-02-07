import { FC } from "react";
import styled from "styled-components";
import TextWrapper from "./TextWrapper";

const ServiceWidget: FC = () => {
  return (
    <Wrapper>
      <ImageWrapper />
      <TextWrapper />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 279px;
  background: var(--clr-primary-4);
  border-radius: 5px;
  padding: 10px;
  gap: 19px;
`;

const ImageWrapper = styled.div`
  background-color: var(--clr-primary-8);
  background-image: url("../../assets/img/manager.png");
  background-size: cover;
  background-position-x: center;
  background-position-y: bottom;
  background-repeat: no-repeat;
  width: 100px;
  height: 70px;
  border-radius: 10px;
`;

export default ServiceWidget;
