import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import styled from 'styled-components'
import { PhoneNumberArray } from '../consts/consts'

const showPhoneModal = evt => {
  evt.preventDefault()
  console.log('modal phone open')
}

function Phone () {
  return (
    <Wrapper>
      <a href='tel:+7 (800) 505-54-61'>+7 (800) 505-54-61</a>
      <button className='phone-btn' type='button' onClick={showPhoneModal}>
        <AiOutlinePlusCircle />
      </button>
      <ul className='phone visually-hidden'>
        {PhoneNumberArray.map((phoneNumber, index) => {
          const { phone, info, time } = phoneNumber
          return (
            <div key={index}>
              <p>{info}</p>
              <a href={`tel:${phone}`}>{phone}</a>
              {time && <p>{time}</p>}
            </div>
          )
        })}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
  margin-right: 38px;

  a {
    color: inherit;
    font-size: 12px;
    line-height: 18px;
    text-decoration: none;
    font-weight: 500;
  }

  .phone-btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-radius: 50%;
    /* width: 16px; */
    height: 18px;

    &:hover {
      background-color: var(--clr-primary-3);
      color: var(--clr-primary-5);
    }

    svg {
      width: 18px;
      height: 18px;
      cursor: pointer;
      color: var(--clr-primary-3);
      margin: 0 auto;
    }

    &:hover svg {
      fill: var(--clr-primary-5);
      stroke: var(--clr-primary-5);
      color: var(--clr-primary-5);
    }
  }
`

export default Phone
