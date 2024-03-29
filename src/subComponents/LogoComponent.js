import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Theme';


const Logo = styled.div`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family:'Pacifico',cursive;
font-size: xx-large;  
position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;

`


const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>OB</Logo>
  )
}

export default LogoComponent