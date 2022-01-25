import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PageRoute } from '../../consts/consts'

const Logo = () => {
  return (
    <Wrapper
      to={PageRoute.main.route}
      aria-label='вернуться на главную  страницу'
    >
      KUGOO
    </Wrapper>
  )
}

const Wrapper = styled(Link)`
  font-weight: bold;
  font-size: 30px;
  line-height: 43px;
  text-transform: uppercase;
  color: #282739;
  transition: var(--transition);
  margin-left: 11px;

  &:hover {
    color: var(--clr-primary-8);
  }
`

export default Logo
