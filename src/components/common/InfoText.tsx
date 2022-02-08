import { FC } from "react";
import styled from "styled-components";

interface Props {
  children: string;
}

const InfoText: FC<Props> = ({ children }) => {
  return <Text>{children}</Text>;
};

const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: var(--clr-primary-2);
`;

export default InfoText;
