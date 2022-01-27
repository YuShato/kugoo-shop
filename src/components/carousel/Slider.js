import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './styles.css'
import SlideItem from './SlideItem'

const images = [
  './assets/slider/1.jpg',
  './assets/slider/2.jpg',
  './assets/slider/3.jpg',
  './assets/slider/4.jpg',
  './assets/slider/5.jpg'
]

const Slider = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true
    },
    [
      slider => {
        let timeout
        let mouseOver = false
        function clearNextTimeout () {
          clearTimeout(timeout)
        }
        function nextTimeout () {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )

  return (
    <>
      <div ref={sliderRef} className='keen-slider banners'>
        {images.map((_, index) => {
          return <SlideItem index={index + 1} key={index}/>
        })}
      </div>
    </>
  )
}

export default Slider
