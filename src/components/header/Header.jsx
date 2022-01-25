import React from 'react'
import styled from 'styled-components'
import Connect from './Connect'
import HeaderCenter from './HeaderCenter'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Header = () => {
  return <Wrapper className='container'>
      <Connect/>
      <HeaderCenter/>
      <Navbar/>
      <Sidebar/>
  </Wrapper>
}

const Wrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  
`

export default Header
