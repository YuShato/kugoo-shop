import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ICatalogInfo } from '../types/types'

function CatalogModal ({catalogInfoArray}) {
  return (
    <CatalogModalWrapper  className='visually-hidden'>
      <ul className='type'>
        {catalogInfoArray.types.map((type:ICatalogInfo, index:number) => {
          const { link, name_ru, icon } = type
          return (
            <li key={index} className='type__item'>
              {icon}
              <Link to={link}>{name_ru}</Link>
            </li>
          )
        })}
      </ul>
      <ul className='special'>
        {catalogInfoArray.special.map((special:ICatalogInfo, index:number) => {
          const { link, name_ru } = special
          return (
            <li key={index} className='special__item'>
              <Link to={link}>{name_ru}</Link>
            </li>
          )
        })}
      </ul>
      <ul className='prescription'>
        {catalogInfoArray.prescription.map((prescription:ICatalogInfo, index:number) => {
          const { link, name_ru } = prescription
          return (
            <li key={index} className='prescription__item'>
              <Link to={link}>{name_ru}</Link>
            </li>
          )
        })}
      </ul>
    </CatalogModalWrapper>
  )
}

const CatalogModalWrapper = styled.div`
  display: flex;
`

export default CatalogModal
