import { FC } from "react";
import styled from "styled-components";
import { PageRoute } from "../../consts/menu";
import BlurBlock from "../common/BlurBlock";
import ShowMoreLink from "./ShowMoreLink";

const AboutImage: FC = () => {
  return (
    <Wrapper>
      <BlurBlock
        title="Тест-драйв в Москве"
        offer="Оцените все преимущества самокатов лично"
      >
        <ShowMoreLink route={PageRoute.testDrive.route} />
      </BlurBlock>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  background-image: url("../../assets/img/about.jpg");
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: cover;
  border-radius: 10px;
  padding-right: 30px;
  padding-bottom: 20px;
  width: 45%;
`;

export default AboutImage;
