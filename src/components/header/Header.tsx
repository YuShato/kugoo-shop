import React, {FC} from 'react'
import styled from 'styled-components'
import Connect from './Connect.tsx'
import HeaderCenter from './HeaderCenter.tsx'
import Navbar from './Navbar.tsx'
import Sidebar from './Sidebar'
import { ConnectLinkArray, MenuLinkArray, PhoneNumberArray, SocialLinkArray } from '../../consts/consts'
import {ICatalogInfo, ICatalogOption, IConnectionLink, IMenuLink, IPhoneNumber, ISocialLink} from '../types/types'
import {CatalogInfoArray, CatalogSelectOptions}  from '../../consts/catalog'
import {UserBlockData} from '../../consts/userBlock'


interface HeaderProps {
  phoneNumberArray: IPhoneNumber[]
  connectLinkArray: IConnectionLink[]
  socialLinkArray: ISocialLink[]
  catalogInfoArray: ICatalogInfo[]
  menuLinkArray: IMenuLink[]
  catalogSelectOptions: ICatalogOption[]
}

const Header:FC<HeaderProps> = () => {
  return (
    <Wrapper>
      <Connect 
        phoneNumberArray={PhoneNumberArray} 
        connectLinkArray={ConnectLinkArray} 
        socialLinkArray={SocialLinkArray}
      />
      <HeaderCenter
        catalogInfoArray={CatalogInfoArray}
        catalogSelectOptions={CatalogSelectOptions}
        userBlockData={UserBlockData}
      />
      <Navbar menuLinkArray={MenuLinkArray}/>
      <Sidebar />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export default Header
