import styled from 'styled-components'
import { motion } from 'framer-motion'

// Shared layout for the scrolling content pages (Work, Experience) so they
// keep the same width, gutters and heading rhythm.

export const Page = styled(motion.div)`
background-color: ${props => props.theme.body};
min-height: 100vh;
position: relative;
overflow-x: hidden;
transition: background-color 0.3s ease;
`

export const Content = styled.div`
position: relative;
z-index: 2;
max-width: 70rem;
margin: 0 auto;
padding: 8rem 6rem 6rem;
color: ${props => props.theme.text};
font-family: 'Karla', sans-serif;

@media (max-width: 50em) {
  padding: 6rem 1.2rem 10rem 3.5rem;
}
`

export const Heading = styled.h1`
color: ${props => props.theme.text};
font-family: 'Karla', sans-serif;
font-size: calc(1.6rem + 1.5vw);
font-weight: 600;
`

export const Lead = styled.p`
color: ${props => `rgba(${props.theme.textRgba},0.75)`};
font-family: 'Ubuntu Mono', monospace;
font-size: calc(0.9rem + 0.3vw);
margin: 1rem 0 3rem;
max-width: 40rem;
line-height: 1.6;

a { color: ${props => props.theme.text}; }
`
