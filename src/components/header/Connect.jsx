import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ConnectLinkArray, SocialLinkArray } from '../../consts/consts'
import Phone from '../Phone'

function Connect () {
  return (
    <ConnectWrapper className='connect'>
      <ul className='connect__list connect'>
        {ConnectLinkArray.map((link, index) => {
          const { route, text_ru } = link
          return (
            <li key={index} className='connect__item'>
              <Link to={route}>{text_ru}</Link>
            </li>
          )
        })}
        <button type='button' className='connect__item'>
          Заказать звонок
        </button>
      </ul>
      <ul className='connect__social social'>
        {SocialLinkArray.map((socialLink, index) => {
          const { route, text_ru, icon } = socialLink
          return (
            <li key={index} className='social__link'>
              <Link to={route} aria-label={text_ru}>
                {icon}
              </Link>
            </li>
          )
        })}
      </ul>
      <Phone/>
    </ConnectWrapper>
  )
}

const ConnectWrapper = styled.div`
  width: 100%;
  display: flex;
`

export default Connect
