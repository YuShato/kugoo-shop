import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
    children: ReactElement[] | (Element & string);
}

const Container:FC<Props> = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-right: 35px;
`;


export default Container;
