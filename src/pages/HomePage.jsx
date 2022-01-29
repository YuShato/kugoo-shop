import React from 'react'
import BenefitsList from '../components/benefits/BenefitsList'
import Slider from '../components/carousel/Slider'
import benefits from '../consts/benefit'

function HomePage () {
  return (
    <>
      <div className='container'>
        <Slider />
      </div>
      <div className='container'>
        <BenefitsList benefitsList={benefits} />
      </div>
    </>
  )
}

export default HomePage
