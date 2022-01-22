import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { UserBlockData } from '../../consts/userBlock'

const UserBlock = () => {
  return (
    <Wrapper>
      {UserBlockData.map((item, index) => {
        const { link, icon, info, text_ru } = item

        return (
          <li key={index}>
            <Link to={link} aria-label={info}>
              {icon}
              {text_ru && <span>{text_ru}</span>}
            </Link>
          </li>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: flex;
`

export default UserBlock
