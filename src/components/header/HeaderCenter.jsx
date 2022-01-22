import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import CatalogModal from './CatalogModal'
import SearchForm from './SearchForm'
import UserBlock from './UserBlock'

const showCatalogModal = evt => {
  evt.preventDefault()
  console.log('catalog modal open')
}

const HeaderCenter = () => {
  return (
    <Wrapper>
      <img src={logo} alt='kugoo shop' width={116} height={43} />
      <div className='catalog'>
        <button type='button' onClick={showCatalogModal}>
          Каталог
        </button>
        <CatalogModal />
        <SearchForm />
        <UserBlock />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`

export default HeaderCenter
