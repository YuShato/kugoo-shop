import React from 'react'
import styled from 'styled-components'

const DefaultButton = ({ onClickHandler, title, icon}) => {
  return <Wrapper onClick={onClickHandler}>{icon ? icon : null} {title}</Wrapper>
}

const Wrapper = styled.button`
  color: var(--clr-primary-5);
  background-color: var(--clr-primary-1);
  padding: 9px 15px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1.5px solid var(--clr-primary-1);
  font-size: 16px;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 13px;
    height: 13px;
  }
`

export default DefaultButton
