import React from 'react'
import styled from 'styled-components'
import Connect from './Connect'
import HeaderCenter from './HeaderCenter'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Header = () => {
  return <Wrapper>
      <Connect/>
      <HeaderCenter/>
      <Navbar/>
      <Sidebar/>
  </Wrapper>
}

const Wrapper = styled.header`
  display: flex;
`

export default Header