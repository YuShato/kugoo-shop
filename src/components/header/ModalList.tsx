import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICatalogInfo } from "../../types/types";

interface ModalListProps {
  title: string;
  array: ICatalogInfo[];
}

const ModalList: FC<ModalListProps> = ({ title, array }) => {
  return (
    <ListWrapper>
      <h3>{title}</h3>
      <ul>
        {array.map((item: ICatalogInfo, index: number) => {
          const { link, name_ru } = item;
          return (
            <li key={index} className="prescription__item">
              <Link to={link}>{name_ru}</Link>
            </li>
          );
        })}
      </ul>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  ul {
    display: grid;
    gap: 10px;
    padding-top: 15px;

    & a {
      color: var(--clr-primary-3);
      font-size: 14px;
      line-height: 20px;
    }

    & a:hover {
      color: var(--clr-primary-2);
    }

    & li:hover {
      cursor: pointer;
    }

    & svg {
      width: 18px;
      height: 18px;
    }
  }

  h3 {
    padding-top: 18px;
  }
`;

export default ModalList;
