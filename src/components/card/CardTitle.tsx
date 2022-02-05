import { FC } from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const CardTitle: FC<Props> = ({ text }) => {
  return <Title>{text.length < 50 ? text : `${text.slice(0, 40)}...`}</Title>;
};

const Title = styled.h4`
  word-break: break-word;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: var(--clr-primary-2);
  padding-left: 25px;
  padding-right: 35px;
  text-transform: capitalize;
  text-align: left;
  height: 45px;
  margin-top: 20px;
`;

export default CardTitle;
