import { FC } from "react";
import styled from "styled-components";

interface Props {
  text: string;
  isActive: boolean;
}

const FilterButton: FC<Props> = ({ text, isActive = false }) => {
  return <Button className={`${isActive ? "active" : null}`}>{text}</Button>;
};

const Button = styled.button`
  background: var(--clr-primary-4);
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 12px;
  line-height: 17px;
  text-transform: capitalize;
  min-width: 100px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid var(--clr-primary-4);
  transition: var(--transition);

  .active,
  &:hover,
  &:focus {
    color: var(--clr-primary-1);
    background-color: var(--clr-primary-5);
    border: 1px solid var(--clr-primary-1);
  }
`;

export default FilterButton;
