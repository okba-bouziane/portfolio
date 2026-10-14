import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Me from '../assets/Images/okba.png'
import { Profile } from '../Data/profile'

const mobile = '@media (max-width: 50em)'

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
width: 65vw;
height: 55vh;
display: flex;

background: linear-gradient(
  to right,
  ${props => props.theme.body} 50%,
  ${props => props.theme.text} 50%) bottom,
  linear-gradient(
  to right,
  ${props => props.theme.body} 50%,
  ${props => props.theme.text} 50%) top;
background-repeat: no-repeat;
background-size: 100% 2px;
border-left: 2px solid ${props => props.theme.body};
border-right: 2px solid ${props => props.theme.text};
z-index: 1;

${mobile} {
  width: 70vw;
  flex-direction: column;
  background: linear-gradient(
    to bottom,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) left,
    linear-gradient(
    to bottom,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) right;
  background-repeat: no-repeat;
  background-size: 2px 100%;
  border-left: none;
  border-right: none;
  border-top: 2px solid ${props => props.theme.body};
  border-bottom: 2px solid ${props => props.theme.text};
}
`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 90%;
  max-height: 100%;
  object-fit: contain;
  object-position: bottom;
}

${mobile} {
  width: 100%;
  height: 50%;

  .pic {
    width: auto;
    height: 100%;
  }
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
display: flex;
flex-direction: column;
justify-content: space-evenly;

h6 {
  color: ${props => `rgba(${props.theme.bodyRgba},0.7)`};
  font-size: calc(0.6rem + 0.8vw);
  font-weight: 300;
  line-height: 1.5;
}

a {
  align-self: flex-start;
  font-size: calc(0.6rem + 0.5vw);
  color: ${props => props.theme.body};
  border: 1px solid ${props => props.theme.body};
  border-radius: 15px;
  padding: 0.4rem 1rem;
  text-decoration: none;
  transition: all 0.2s ease;
}
a:hover {
  background: ${props => props.theme.body};
  color: ${props => props.theme.text};
}

${mobile} {
  font-size: 1.05rem;
  padding: 0.8rem 1rem;
  h1 { font-size: 1.8rem; }
  h6 { font-size: 0.78rem; line-height: 1.4; }
  a { font-size: 0.75rem; }
}
`

function Intro() {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm {Profile.name}.</h3>
          <h6>
            {Profile.role} building secure, AI-powered web apps — from React &amp;
            Angular front-ends to NestJS APIs, Keycloak auth and LLM agents.
          </h6>
          <a href={Profile.resume} target="_blank" rel="noreferrer">My Resume ↗</a>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <img className='pic' src={Me} alt={Profile.name} />
        </motion.div>
      </SubBox>
    </Box>
  )
}

export default Intro
