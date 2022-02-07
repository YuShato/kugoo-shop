import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageRoute } from "../../consts/menu";

const BannerLink: FC = () => {
  return <Btn to={PageRoute.actions.route}>Подробнее</Btn>;
};

const Btn = styled(Link)`
  display: flex;
  justify-self: flex-start;
  padding: 15px 25px;
  border-radius: 5px;
  background-color: var(--clr-primary-5);
  color: var(--clr-primary-2);
  font-size: 16px;
  line-height: 23px;
  cursor: pointer;
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: var(--clr-primary-8);
    color: var(--clr-primary-5);
  }

  &:active {
    opacity: 0.8;
  }


`;

export default BannerLink;
