import React from 'react'
import styled from 'styled-components'

const InfoBtn = ({ title }) => {
  return <InfoBtnWrapper>{title}</InfoBtnWrapper>
}

const InfoBtnWrapper = styled.button`
  border-radius: 300px;
  padding: 3px 6px;
  color: var(--clr-primary-5);
  background-color: var(--clr-primary-1);
  box-sizing: border-box;
  border: 1.5px solid var(--clr-primary-1);
  font-size: 10px;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export default InfoBtn
