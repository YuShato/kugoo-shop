import React from 'react'
import styled from 'styled-components'

const SlideItem = ({index}) => {
  return (
    <Slide className={`keen-slider__slide number-slide${index} slide`}></Slide>
  )
}

const Slide = styled.div`
  [class^="number-slide"],
  [class*=" number-slide"] {
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 300px;
    max-height: 100vh;
  }


  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  object-fit: fill;
`

export default SlideItem
