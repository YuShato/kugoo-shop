import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PageRoute } from '../../consts/consts'
import { IImage } from '../types/types'


const SliderBtn = ( { ...image }:IImage) => {
  const {action} = image 
  return <Wrapper to={PageRoute.products.route}>{action}</Wrapper>
}

const Wrapper = styled(Link)`
  background-color: var(--clr-primary-5);
  padding: 15px 26px;
  top: 77%;
  position: absolute;
  left: 12%;
  border-radius: 5px;
  text-decoration: none;
  display: block;
  position: absolute;
  font-size: 16px;
  line-height: 23px;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--clr-primary-5);
    background-color: transparent;
    border: 1px solid var(--clr-primary-5);
  }
`

export default SliderBtn
