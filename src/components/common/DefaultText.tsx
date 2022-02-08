import { FC } from "react";
import styled from "styled-components";

interface Props {
  children: string;
}

const DefaultText: FC<Props> = ({ children }) => {
  return <Text>{children}</Text>;
};

const Text = styled.p`
  font-size: 16px;
  line-height: 23px;
  color: var(--clr-primary-2);
`;

export default DefaultText;
