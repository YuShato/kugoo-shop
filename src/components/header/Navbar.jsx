import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MenuLinkArray } from '../../consts/consts'
import InfoBtn from '../common/InfoBtn'

function Navbar () {
  return (
    <NavContainer className='nav'>
      <div className='container'>
        <ul>
          {MenuLinkArray.map((item, index) => {
            const { route, text_ru, info, icon } = item
            return (
              <li key={index}>
                <Link className='nav__link' to={route}>
                  {icon ? icon : null} {text_ru}
                </Link>
                {info && <InfoBtn title={info} />}
              </li>
            )
          })}
        </ul>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: min-content;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--clr-primary-4);
  padding-top: 8px;
  padding-bottom: 10px;
  padding-left: 17px;

  ul {
    display: flex;
    gap: 50px;
  }

  li {
    display: flex;
    gap: 8px;
    font-weight: 500;
    line-height: 20px;
  }

  .nav__link:hover {
    color: var(--clr-primary-1);
    transition: var(--transition);
  }
`

export default Navbar
