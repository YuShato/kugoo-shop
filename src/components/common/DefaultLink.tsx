import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface DefaultLinkProps {
  href: string
  text: string
  icon?: JSX.Element
}

const DefaultLink:FC<DefaultLinkProps> = ({ href, text, icon=undefined }) => {
  return (
    <DefaultLinkWrapper to={href}>
      {icon ? icon : null}
      {text}
    </DefaultLinkWrapper>
  )
}

const DefaultLinkWrapper = styled(NavLink)`
  text-decoration: none;
  color: var(--clr-primary-3);
  font-size: 12px;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: var(--clr-primary-10);
  }
`

export default DefaultLink
