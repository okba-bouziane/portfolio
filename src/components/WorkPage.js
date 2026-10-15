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
import { Page, Content, Heading, Lead } from '../subComponents/PageLayout'

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
      <Page
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <ParticleComponent />

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
      </Page>
    </ThemeProvider>
  )
}

export default WorkPage
