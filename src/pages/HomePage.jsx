import React from 'react'
import Slider from '../components/carousel/Slider'
import benefits from '../consts/benefit.tsx'
import BenefitsList from '../components/benefits/BenefitsList.tsx'

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
