import { FC } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const showPrevImage = (evt: { preventDefault: () => void }) => {
  evt.preventDefault();
  console.log("show previous  slide");
};

const showNextImage = (evt: { preventDefault: () => void }) => {
  evt.preventDefault();
  console.log("show next  slide");
};

const Arrows: FC = () => {
  return (
    <ArrowsWrapper>
      <button className="arrow-btn" onClick={showPrevImage} title="предыдущее фото">
        <IoIosArrowBack />
      </button>
      <button className="arrow-btn" onClick={showNextImage} title="следующее фото">
        <IoIosArrowForward />
      </button>
    </ArrowsWrapper>
  );
};

const ArrowsWrapper = styled.div`
  width: 100%;
  position: absolute;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  bottom: 35%;
  left: 0;

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--clr-primary-5);
    border: none;
    opacity: 0;
    transition: var(--transition);

    &:hover svg {
      fill: var(--clr-primary-1);
      transition: var(--transition);
    }
  }

`;

export default Arrows;
