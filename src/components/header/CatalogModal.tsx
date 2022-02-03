import { FC } from "react";
import styled from "styled-components";
import { ICatalogInfo } from "../types/types";
import ModalList from "./ModalList";
import ModalTypeList from "./ModalTypeList";

interface CatalogModalProps {
  catalogInfoArray: {
    types: ICatalogInfo[];
    special: ICatalogInfo[];
    prescription: ICatalogInfo[];
  };
}

const CatalogModal: FC<CatalogModalProps> = ({ catalogInfoArray }) => {
  return (
    <CatalogModalWrapper className="visually-hidden">
      <ModalTypeList array={catalogInfoArray.types} />
      <ModalList title="Особенности" array={catalogInfoArray.special} />
      <ModalList title="Для кого" array={catalogInfoArray.prescription} />
    </CatalogModalWrapper>
  );
};

const CatalogModalWrapper = styled.div`
  display: flex;
  position: absolute;
  gap: 43px;
  z-index: 5;
  width: 100%;
  max-width: 650px;
  padding: 10px;
  background-color: var(--clr-primary-5);
  height: auto;
  box-shadow: 0px 10px 30px rgba(111, 115, 238, 0.1);
  border-radius: 5px;
  top: 100%;
  left: 15%;
`;

export default CatalogModal;
