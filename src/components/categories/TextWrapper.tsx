import styled from "styled-components";
import LinkBtn from "../common/LinkBtn";

const showQuestionWidget = (evt: { preventDefault: () => void }) => {
  evt.preventDefault();
  console.log("show Question Widget");
};

const TextWrapper = () => {
  return (
    <Wrapper>
      <p>Менеджер ответит на любой ваш вопрос о продуктах Kugoo</p>
      <LinkBtn onClickHandler={showQuestionWidget}> Задать вопрос</LinkBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: var(--clr-primary-2);

  button {
  }
`;

export default TextWrapper;
