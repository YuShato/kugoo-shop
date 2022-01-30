import React from 'react'
import styled from 'styled-components'
import BenefitsItem from './BenefitsItem'
import Rating from './Rating'

const BenefitsList = ({ benefitsList }) => {
  return (
    <BenefitsWrapper>
      <ul>
        {benefitsList.map((benefit, index) => (
          <BenefitsItem key={index} {...benefit} />
        ))}
      </ul>
      <Rating />
    </BenefitsWrapper>
  )
}

const BenefitsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 60px;

  ul {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
`

export default BenefitsList
