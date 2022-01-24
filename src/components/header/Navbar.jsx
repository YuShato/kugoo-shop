import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MenuLinkArray } from '../../consts/consts'
import InfoBtn from '../command/InfoBtn'

function Navbar () {
  return (
    <NavContainer>
      <ul>
        {MenuLinkArray.map(
          (item, index) => {
            const { route, text_ru, info, icon } = item
            return (
              <li key={index}>
                <Link to={route}>{icon ? icon : null} {text_ru}</Link>
                {info && <InfoBtn title={info}/>}
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

  ul {
    display: flex;
  }
`

export default Navbar
