import { FC } from "react";
import styled from "styled-components";

const showQuestionWidget = (evt: { preventDefault: () => void }) => {
  evt.preventDefault();
  console.log("show Question Widget");
};

const ServiceWidget: FC = () => {
  return (
    <Wrapper>
      <ImageWrapper />
      <TextWrapper>
        <p>Менеджер ответит на любой ваш вопрос о продуктах Kugoo</p>
        <button onClick={showQuestionWidget}> Задать вопрос</button>
      </TextWrapper>
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

const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: var(--clr-primary-2);

  button {
    color: var(--clr-primary-1);
    border: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 10px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }

    &:active {
      color: var(--clr-primary-8);
    }
  }
`;
export default ServiceWidget;
