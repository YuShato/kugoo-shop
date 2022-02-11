import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ICatalogInfo } from "../../types/types";
import styled from "styled-components";

interface Props {
  array: ICatalogInfo[];
}

const ModalTypeList: FC<Props> = ({ array }) => {
  return (
    <ListWrapper>
      {array.map((type: ICatalogInfo, index: number) => {
        const { link, name_ru, icon } = type;
        return (
          <li key={index} className="type__item">
            {icon}
            <Link to={link}>{name_ru}</Link>
          </li>
        );
      })}
    </ListWrapper>
  );
};

const ListWrapper = styled.ul`
  display: grid;
  gap: 14px;
  background: #f4f7fb;
  border-radius: 5px;
  padding-top: 20px;
  padding-left: 24px;
  padding-bottom: 28px;
  padding-right: 34px;

  & a {
    padding-left: 10px;
    color: var(--clr-primary-2);
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
  }

  & svg {
    fill: var(--clr-primary-3);
  }

  & li:hover svg {
    fill: var(--clr-primary-1);
  }
  & li:hover a {
    color: var(--clr-primary-1);
  }
`;

export default ModalTypeList;
