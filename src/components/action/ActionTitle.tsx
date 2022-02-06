import { FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

const ActionTitle: FC<Props> = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.h4`
  font-weight: 600;
  font-size: 25px;
  line-height: 36px;
  text-transform: uppercase;
  color: var(--clr-primary-2);
  margin-bottom: 10px;
`;

export default ActionTitle;
