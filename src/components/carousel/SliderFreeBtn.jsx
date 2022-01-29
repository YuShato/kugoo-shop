import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageRoute } from '../../consts/consts'

const SliderFreeBtn = () => {
  return (
    <Wrapper to={PageRoute.actions.route}>⚡Тест-драйв и обучение</Wrapper>
  )
}

const Wrapper = styled(Link)`
  display: block;
  position: absolute;
  left: 70%;
  top: 70%;
  background-color: rgba(255, 255, 255, 0.2);
  color: var(--clr-primary-5);
  border-radius: 5px;
  padding: 13px;
  width: fit-content;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  width: 230px;
  z-index: 4;

  &::after {
    content: 'Бесплатно';
    text-transform: uppercase;
    padding: 5px 10px;
    position: absolute;
    top: 40px;
    right: 20px;
    background-color: var(--clr-primary-5);
    color: var(--clr-primary-1);
    border-radius: 5px;
  }
`

export default SliderFreeBtn
