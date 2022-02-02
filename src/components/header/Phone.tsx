import { FC } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import styled from 'styled-components'
import { IPhoneNumber } from '../types/types'

interface PhoneProps {
  phoneNumberArray: IPhoneNumber[]
}

const showPhoneModal = (evt: { preventDefault: () => void }) => {
  evt.preventDefault()
  console.log('modal phone open')
}

const  Phone:FC<PhoneProps> = ({phoneNumberArray}) => {
  return (
    <Wrapper>
      <a href='tel:+7 (800) 505-54-61'>+7 (800) 505-54-61</a>
      <button className='phone-btn' type='button' onClick={showPhoneModal}>
        <AiOutlinePlusCircle />
      </button>
      <ul className='phone visually-hidden'>
        {phoneNumberArray.map((phoneNumber:IPhoneNumber, index:number) => {
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
  margin-right: 50px;
  margin-top: 4px;

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
