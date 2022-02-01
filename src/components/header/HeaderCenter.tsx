import React, {FC} from 'react'
import styled from 'styled-components'
import DefaultButton from '../common/DefaultButton'
import CatalogModal from './CatalogModal.tsx'
import SearchForm from './SearchForm.tsx'
import UserBlock from './UserBlock'
import { VscListSelection } from 'react-icons/vsc'
import Logo from '../common/Logo'
import { ICatalogInfo } from '../types/types'

interface HeaderCenterProps {
  catalogInfoArray: ICatalogInfo[]
}

const showCatalogModal = (evt) => {
  evt.preventDefault()
  console.log('catalog modal open')
}

const HeaderCenter:FC<HeaderCenterProps> = ({catalogInfoArray}) => {
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
        <CatalogModal catalogInfoArray={catalogInfoArray}/>
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
