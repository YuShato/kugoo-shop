import React from 'react'
import styled from 'styled-components'
import Connect from './Connect.tsx'
import HeaderCenter from './HeaderCenter'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { PhoneNumberArray } from '../../consts/consts'

const Header = () => {
  return (
    <Wrapper>
      <Connect phoneNumberArray={PhoneNumberArray} />
      <HeaderCenter />
      <Navbar />
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
