import React from 'react'
import styled from 'styled-components'
import DefaultButton from '../common/DefaultButton'
import CatalogModal from './CatalogModal'
import SearchForm from './SearchForm'
import UserBlock from './UserBlock'
import { VscListSelection } from 'react-icons/vsc'
import Logo from '../common/Logo'

const showCatalogModal = evt => {
  evt.preventDefault()
  console.log('catalog modal open')
}

const HeaderCenter = () => {
  return (
    <Wrapper>
      <div className="container">
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
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 35px;

  .catalog {
    display: flex;
    align-items: center;
    margin-left: 36px;
    width: 100%;
  }
`

export default HeaderCenter
