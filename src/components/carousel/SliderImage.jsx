import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PageRoute } from '../../consts/consts'

const SliderImage = ({ index, isSpecial, title }) => {
  return isSpecial ? (
    <ImageWrapper>
      <img
        className='banner'
        src={`../../assets/img/${index}.png`}
        alt={title}
      />
    </ImageWrapper>
  ) : (
    <ImageWrapper className='special'>
      <Link to={PageRoute.products.route}>
        <img alt={title} src={`../../assets/img/${index}.jpg`} />
      </Link>
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  .banner {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    max-width: 500px;
    height: 400px;
  }

  .special {
    border-radius: 10px;

    img {
      position: relative;
      width: 100%;
      max-width: 100%;
      height: 100%;
      max-height: 420px;
      object-fit: cover;
    }
  }
`

export default SliderImage
