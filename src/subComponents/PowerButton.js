import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'

const Power = styled(NavLink)`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
padding: 0.3rem;
box-sizing: border-box;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;
display: flex;
justify-content: center;
align-items: center;
z-index: 5;
cursor: pointer;
transition: background-color 0.2s ease, box-shadow 0.2s ease;

&:hover{
    background-color: rgba(0,255,0,0.4);
    box-shadow: 0 0 8px 6px rgba(0,255,0,0.4);
}

@media (max-width: 50em) {
  top: 1.5rem;
  width: 2rem;
  height: 2rem;
}
`

const PowerButton = () => {
  return (
    <Power to="/" aria-label="Home">
      <PowerBtn width="70%" height="70%" fill="#000" />
    </Power>
  )
}

export default PowerButton
