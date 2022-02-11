import { FC } from "react";
import styled from "styled-components";
import { ICard } from "../../types/types";

interface Props {
  card: ICard;
}

const AccentBtn: FC<Props> = ({ card }) => {
  const { isHit, isNew } = card;
  return (
    <Wrapper>
      {isHit ? <AccentBtnHit>ХИТ</AccentBtnHit> : null}
      {isNew ? <AccentBtnNew>Новинка</AccentBtnNew> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display:flex;
  position: absolute;
  z-index: 5;
  top: 10px;
  left: 10px;
  
   & span {
    border-radius: 5px;
    color: var(--clr-primary-5);
    padding: 4px 9px;
    margin-right: 10px;
  }
`;

const AccentBtnHit = styled.span`
  background: var(--clr-primary-7);
  text-transform: uppercase;
`;

const AccentBtnNew = styled.span`
  text-transform: capitalize;
  background-color: var(--clr-primary-9);
`;

export default AccentBtn