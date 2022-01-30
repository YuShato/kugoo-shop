import React from 'react'
import styled from 'styled-components'

const SliderTitle = ({...image}) => {
  const { title, subtitle } = image
  
  return (
    <TitleWrapper>
      <h4>{title}</h4>
      <span>{subtitle}</span>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  color: var(--clr-primary-5);
  width: 100%;
  max-width: 600px;
  position: absolute;
  left: 12%;
  top: 30%;
  z-index: 5;

  h4 {
    font-weight: 600;
    font-size: 35px;
    line-height: 51px;
    text-transform: uppercase;
  }

  span {
    font-size: 20px;
    line-height: 29px;
    max-width: 450px;
  }
`

export default SliderTitle
