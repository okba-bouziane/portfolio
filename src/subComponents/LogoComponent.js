import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { DarkTheme } from '../components/Theme';

const Logo = styled(NavLink)`
display: inline-block;
color: ${props => props.$color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico', cursive;
font-size: xx-large;
text-decoration: none;
position: fixed;
left: 2rem;
top: 2rem;
z-index: 5;
transition: color 1s ease;

@media (max-width: 50em) {
  left: 1rem;
  top: 1.2rem;
  font-size: x-large;
}
`

const LogoComponent = (props) => {
  return (
    <Logo to="/" $color={props.theme} aria-label="Home">OB</Logo>
  )
}

export default LogoComponent
