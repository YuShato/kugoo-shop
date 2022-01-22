import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { PhoneNumberArray } from '../consts/consts'

const showPhoneModal = evt => {
  evt.preventDefault()
  console.log('modal phone open')
}

function Phone () {
  return (
    <div>
      <a href='tel:+7 (800) 505-54-61'>+7 (800) 505-54-61</a>
      <button type='button' onClick={showPhoneModal}>
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
    </div>
  )
}

export default Phone
