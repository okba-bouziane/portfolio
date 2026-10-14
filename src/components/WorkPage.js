import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import { DarkTheme } from './Theme'
import { Projects, Profile } from '../Data/profile'
import Card from '../subComponents/Card'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitle'

const Box = styled(motion.div)`
background-color: ${props => props.theme.body};
min-height: 100vh;
position: relative;
overflow-x: hidden;
`

const Content = styled.div`
position: relative;
z-index: 2;
max-width: 70rem;
margin: 0 auto;
padding: 8rem 6rem 6rem;

@media (max-width: 50em) {
  padding: 6rem 1.2rem 10rem 3.5rem;
}
`

const Heading = styled.h1`
color: ${props => props.theme.text};
font-family: 'Karla', sans-serif;
font-size: calc(1.6rem + 1.5vw);
font-weight: 600;
`

const Lead = styled.p`
color: ${props => `rgba(${props.theme.textRgba},0.75)`};
font-family: 'Ubuntu Mono', monospace;
font-size: calc(0.9rem + 0.3vw);
margin: 1rem 0 3rem;
max-width: 40rem;
line-height: 1.6;

a { color: ${props => props.theme.text}; }
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(min(100%, 26rem), 1fr));
gap: 2rem;
`

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3, duration: 0.5 } },
}

const WorkPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <LogoComponent theme="dark" />
        <PowerButton />
        <SocialIcons theme="dark" />
        <ParticleComponent theme="dark" />

        <Content>
          <Heading>Selected work</Heading>
          <Lead>
            Recent projects at the intersection of AI agents and secure systems.
            More on <a href={Profile.github} target="_blank" rel="noreferrer">GitHub</a> and{' '}
            <a href={Profile.gitlab} target="_blank" rel="noreferrer">GitLab</a>.
          </Lead>
          <Grid as={motion.div} variants={container} initial="hidden" animate="show">
            {Projects.map(project => (
              <Card key={project.id} project={project} />
            ))}
          </Grid>
        </Content>
        <BigTitle text="WORK" top="10%" right="5%" />
      </Box>
    </ThemeProvider>
  )
}

export default WorkPage
