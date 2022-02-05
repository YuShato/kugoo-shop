import { FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

const DefaultTitle: FC<Props> = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.h3`
  font-weight: 600;
  font-size: 35px;
  line-height: 51px;
  text-transform: uppercase;
  color: var(--clr-primary-2);
  word-break: break-word;
`;

export default DefaultTitle;
