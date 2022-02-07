import { FC } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  route: string;
}

const ShowMoreLink: FC<Props> = ({ route }) => {
  return (
    <Wrapper to={route}>
      Подробнее <BsArrowRight />
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 21px;
  margin-top: 10px;
  border-radius: 10px;
  color: var(--clr-primary-5);
  background-color: var(--clr-primary-1);
  cursor: pointer;
  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--clr-primary-8);
    background-color: var(--clr-primary-5);
  }

  &:active {
    opacity: 0.8;
  }
`;

export default ShowMoreLink;
