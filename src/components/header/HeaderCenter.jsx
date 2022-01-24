import React from 'react'
import styled from 'styled-components'
import DefaultButton from '../command/DefaultButton'
import CatalogModal from './CatalogModal'
import SearchForm from './SearchForm'
import UserBlock from './UserBlock'
import { VscListSelection } from 'react-icons/vsc'
import Logo from '../command/Logo'

const showCatalogModal = evt => {
  evt.preventDefault()
  console.log('catalog modal open')
}

const HeaderCenter = () => {
  return (
    <Wrapper>
      <Logo/>
      <div className='catalog'>
        <DefaultButton
          icon={<VscListSelection />}
          title={'Каталог'}
          onClickHandler={showCatalogModal}
        />
        <CatalogModal />
        <SearchForm />
        <UserBlock />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .catalog {
    display: flex;
    align-items: center;
  }
`

export default HeaderCenter
