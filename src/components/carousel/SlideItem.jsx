import React from 'react'
import BannerBtn from './BannerBtn'
import SliderBtn from './SliderBtn'
import { PageRoute } from '../../consts/consts'
import styled from 'styled-components'
import SliderTitle from './SliderTitle'
import SliderFreeBtn from './SliderFreeBtn'
import SliderImage from './SliderImage'

const SlideItem = ({ image }) => {
  const { id, isSpecial, title, subTitle, infoBtn, action } = image
  return isSpecial ? (
    <Slide className={`keen-slider__slide number-slide${id} slide`}>
      <SliderTitle title={title} subTitle={subTitle} />
      <BannerBtn title={infoBtn} />
      <SliderBtn href={PageRoute.products.route} title={action} />
      <SliderFreeBtn />
      <SliderImage isSpecial={isSpecial} index={id} title={title} />
    </Slide>
  ) : (
    <Slide className={`keen-slider__slide number-slide${id} slide`}>
      <SliderImage isSpecial={isSpecial} index={id} title={title} />
    </Slide>
  )
}

const Slide = styled.div`
  position: relative;

  [class^='number-slide'],
  [class*=' number-slide'] {
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 420px;
    max-height: 100vh;
  }

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  background: rgb(24, 29, 95);
  background: linear-gradient(
    128deg,
    rgba(64, 76, 255, 0.8) 0%,
    rgba(174, 63, 255, 0.8) 100%
  );

  & + .number-slide2 {
    background: rgb(83, 24, 21);
    background: linear-gradient(
      128deg,
      rgba(255, 154, 63, 0.8) 0%,
      rgba(255, 75, 64, 0.8) 100%
    );
  }

  & + .number-slide3 {
    background: rgb(56, 78, 19);
    background: linear-gradient(
      128deg,
      rgba(182, 255, 64, 0.8) 0%,
      rgba(63, 255, 71, 0.8) 100%
    );
    background: linear-gradient(
      128deg,
      rgba(189, 255, 83, 0.8) 0%,
      rgba(43, 250, 82, 0.8) 100%
    );
  }

  & + .number-slide4 {
    background: rgb(23, 88, 84);
    background: linear-gradient(
      128deg,
      rgba(64, 255, 242, 0.8) 0%,
      rgba(63, 188, 255, 0.8) 100%
    );
  }

  & + .number-slide5 {
    background: rgb(78, 19, 48);
    background: linear-gradient(
      128deg,
      rgba(255, 64, 156, 0.8) 0%,
      rgba(255, 63, 63, 0.8) 100%
    );
  }
  & + .number-slide6 {
    background: rgb(24, 29, 95);
    background: linear-gradient(
      128deg,
      rgba(64, 76, 255, 0.8) 0%,
      rgba(174, 63, 255, 0.8) 100%
    );
  }
  & + .number-slide1 {
    background: rgb(24, 29, 95);
    background: linear-gradient(
      128deg,
      rgba(64, 76, 255, 0.8) 0%,
      rgba(174, 63, 255, 0.8) 100%
    );
  }
`

export default SlideItem