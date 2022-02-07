import { FC } from "react";
import styled from "styled-components";
import { AboutData } from "../../consts/about";
import DefaultTitle from "../common/DefaultTitle";
import AboutImage from "./AboutImage";
import AboutList from "./AboutList";

interface Props {}

const About: FC<Props> = () => {
  return (
    <div className="container">
      <Wrapper>
        <AboutImage />
        <Description>
          <DefaultTitle title="Kugoo-Russia — первый официальный дилер Kugoo Kirin в России" />
          <p>
            Наша цель предоставить полный ассортимент современной продукции
            Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить
            комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся
            к сервисному обслуживанию.
          </p>
          <AboutList aboutInfo={AboutData} />
        </Description>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  display: flex;
  gap: 70px;
  border-radius: 10px;
  background-color: var(--clr-primary-4);
  padding: 29px;
  justify-content: start;
  margin: 50px auto;
`;

// const AboutImage = styled.div`
//   background-image: url("../../assets/img/about.jpg");
//   background-repeat: no-repeat;
//   background-size: cover;
//   width: 40%;
//   border-radius: 10px;
// `;

const Description = styled.article`
  display: grid;
  gap: 20px;
  font-size: 16px;
  line-height: 23px;
  color: var(--clr-primary-2);
  width: 45%;
`;

export default About;
