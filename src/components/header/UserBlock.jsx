import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { UserBlockData } from '../../consts/userBlock'

const UserBlock = () => {
  return (
    <Wrapper className='user'>
      {UserBlockData.map((item, index) => {
        const { link, icon, info, text_ru } = item

        return (
          <li key={index}>
            <Link className='user__link' to={link} aria-label={info}>
              {icon}
              {text_ru && <span className='user__text'>{text_ru}</span>}
            </Link>
          </li>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: flex;
  gap: 20px;
  margin-left: 45px;

  .user__link {
    color: inherit;
    border-radius: 50%;

    & svg {
      width: 30px;
      height: 18px;
    }

    &:hover {
      cursor: pointer;
      color: var(--clr-primary-1);
      background-color: var(--clr-primary-6);
      transition: var(--transition);
    }
  }
`

export default UserBlock
