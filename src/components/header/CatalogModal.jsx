import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CatalogInfoArray } from '../../consts/catalog'

function CatalogModal () {
  return (
    <CatalogModalWrapper  className='visually-hidden'>
      <ul className='type'>
        {CatalogInfoArray.types.map((type, index) => {
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
        {CatalogInfoArray.special.map((special, index) => {
          const { link, name_ru } = special
          return (
            <li key={index} className='special__item'>
              <Link to={link}>{name_ru}</Link>
            </li>
          )
        })}
      </ul>
      <ul className='prescription'>
        {CatalogInfoArray.prescription.map((prescription, index) => {
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
