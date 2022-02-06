import { FC } from "react";
import styled from "styled-components";
import { ICard } from "../types/types";
import AccentBtn from "./AccentBtn";
import Arrows from "./Arrows";
import ScaleIcon from "./ScaleIcon";

interface Props {
  card: ICard;
}

const ImageWrapper: FC<Props> = ({ card }) => {
  const { title, isCompare } = card;
  return (
    <ImageContainer>
      <AccentBtn card={card} />
      <ScaleIcon isCompare={isCompare} />
      <Arrows />
      <img
        src="../../assets/img/test.jpg"
        alt={title}
        width={255}
        height={241}
      />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  background: #f0f1f5;
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  position: relative;

  &:hover .arrow-btn {
    opacity: 1;
    transition: var(--transition);
  }

  img {
    width: 100%;
    height: 241px;
    object-fit: contain;
    object-position: center;
    background: #f0f1f5;
    border-radius: 10px 10px 0px 0px;
  }
`;

export default ImageWrapper;
