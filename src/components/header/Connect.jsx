import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ConnectLinkArray, SocialLinkArray } from '../../consts/consts'
import DefaultLink from '../command/DefaultLink'
import NavButton from '../command/NavButton'
import Phone from '../Phone'

const showContactsModal = evt => {
  evt.preventDefault()
  console.log('contacts modal open')
}

function Connect () {
  return (
    <ConnectWrapper className='connect'>
      <div className='container'>
        <ul className='connect__list connect'>
          {ConnectLinkArray.map((link, index) => {
            const { route, text_ru } = link
            return (
              <li key={index} className='connect__item'>
                <DefaultLink href={route} text={text_ru} />
              </li>
            )
          })}
          <NavButton
            text={'Заказать звонок'}
            onClickHandler={showContactsModal}
          />
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
        <Phone />
      </div>
    </ConnectWrapper>
  )
}

const ConnectWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 12px 0;
  border-top: 1px solid #ecf3ff;
  border-bottom: 1px solid #ecf3ff;
  padding: 10px;

  .connect {
    display: flex;
    gap: 30px;
    margin-right: 24px;
  }

  .connect__item {
    height: min-content;
  }

  .social {
    display: flex;
    gap: 9px;
    margin-right: 15px;
  }

  .social__link {
    width: 12px;
    height: 12px;
  }

  .social__link a {
    color: var(--clr-primary-3);
  }
  .social__link:nth-of-type(1) a:hover {
    color: var(--telegram);
  }
  .social__link:nth-of-type(2) a:hover {
    color: var(--watsapp);
  }
  .social__link:nth-of-type(3) a:hover {
    color: var(--viber);
  }
`

export default Connect
