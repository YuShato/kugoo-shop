import { FC } from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const CardTitle: FC<Props> = ({ text }) => {
  return <Title>{text}</Title>;
};

const Title = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: var(--clr-primary-2);
  padding-left: 25px;
  padding-right: 35px;
  text-transform: capitalize;
`;

export default CardTitle;
