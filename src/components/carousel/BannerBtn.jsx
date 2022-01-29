import React from 'react'
import styled from 'styled-components'

const BannerBtn = ({ title }) => {
  return <Wrapper>{title}</Wrapper>
}

const Wrapper = styled.button`
  color: var(--clr-primary-5);
  background-color: transparent;
  position: absolute;
  top: 10%;
  left: 12%;
  border: 1px solid var(--clr-primary-5);
  border-radius: 5px;
  padding: 3px 11px;
  font-size: 14px;
  line-height: 20px;
`

export default BannerBtn
