import styled from "styled-components";

const showQuestionWidget = (evt: { preventDefault: () => void }) => {
  evt.preventDefault();
  console.log("show Question Widget");
};

const TextWrapper = () => {
  return (
    <Wrapper>
      <p>Менеджер ответит на любой ваш вопрос о продуктах Kugoo</p>
      <button onClick={showQuestionWidget}> Задать вопрос</button>
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

export default TextWrapper;
