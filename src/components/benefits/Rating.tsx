import { FC } from "react";
import styled from "styled-components";
import yandex from "../../assets/img/svg/yandex.svg";
import star from "../../assets/img/svg/star.svg";

const Rating: FC = () => {
  return (
    <Wrapper>
      {/* сделать ссылкой на  сайт яндекса, с запросом с API */}
      <img
        className="logo"
        src={yandex}
        alt="логотип компании Яндекс"
        width={56}
        height={56}
      />
      <p>Яндекс&nbsp;отзывы</p>
      <div className="rating">
        <img src={star} alt="рейтинг" width={14} height={14} />
        <h4>4,9</h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 190px;
  border: 1px solid rgba(93, 108, 123, 0.1);
  box-sizing: border-box;
  border-radius: 5px;
  display: grid;
  grid-column-gap: 18px;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;

  p {
    font-size: 12px;
    line-height: 17px;
    color: var(--clr-primary-3);
    width: 100px;
  }

  h4 {
    font-weight: 600;
    font-size: 25px;
    line-height: 36px;
    text-transform: uppercase;
    color: var(--clr-primary-2);
    display: inline-block;
    padding: 0;
    margin-left: 10px;
  }

  .rating {
    margin-top: -10px;
    grid-column: 2/4;
    align-self: center;
    padding-bottom: 5px;
  }

  .logo {
    grid-row: 1/3;
    grid-column: 1/2;
    align-self: center;
    margin-top: 7px;
  }
`;

export default Rating;
