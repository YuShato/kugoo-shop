import React, {FC} from 'react'
import Slider from '../components/carousel/Slider.tsx'
import benefits from '../consts/benefit.tsx'
import BenefitsList from '../components/benefits/BenefitsList.tsx'
import images from '../consts/images.tsx'


const HomePage: FC = () => {
  return (
    <>
      <div className='container'>
        <Slider images={images} />
      </div>
      <div className='container'>
        <BenefitsList benefitsList={benefits} />
      </div>
    </>
  )
}

export default HomePage
