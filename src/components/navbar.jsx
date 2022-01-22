import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MenuLinkArray } from '../consts/consts'

function Navbar () {
  return (
    <NavContainer>
      <ul>
        {MenuLinkArray.map(
          (item, index) => {
            const { route, text_ru, info } = item
            return (
              <li key={index}>
                <Link to={route}>{text_ru}</Link>
                {info && <span>{info}</span>}
              </li>
            )
          }
        )}
      </ul>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Navbar
