import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import { LightTheme } from './Theme'
import { Experience, Education, Profile } from '../Data/profile'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from '../subComponents/ParticleComponent'
import { Page, Content, Heading, Lead } from '../subComponents/PageLayout'

const SubHeading = styled.h2`
font-size: calc(1.2rem + 0.8vw);
font-weight: 600;
margin: 4rem 0 1.5rem;
`

const Timeline = styled.div`
border-left: 2px solid ${props => props.theme.text};
padding-left: 2rem;

@media (max-width: 50em) {
  padding-left: 1.2rem;
}
`

const Entry = styled(motion.section)`
position: relative;
padding: 1.5rem 1.8rem;
margin-bottom: 2rem;
background-color: ${props => `rgba(${props.theme.bodyRgba},0.85)`};
border: 1px solid ${props => props.theme.text};
backdrop-filter: blur(3px);

&::before {
  content: '';
  position: absolute;
  left: calc(-2rem - 8px);
  top: 1.9rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${props => props.theme.body};
  border: 2px solid ${props => props.theme.text};
}

@media (max-width: 50em) {
  padding: 1.2rem;
  &::before { left: calc(-1.2rem - 8px); }
}
`

const Row = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: baseline;
gap: 0.3rem 1rem;

h3 { font-size: 1.3rem; font-weight: 600; }
span {
  font-family: 'Ubuntu Mono', monospace;
  font-size: 0.95rem;
  opacity: 0.75;
}
`

const Points = styled.ul`
margin-top: 1rem;
padding-left: 1.2rem;
line-height: 1.6;
li + li { margin-top: 0.4rem; }
`

const ResumeLink = styled.a`
display: inline-block;
margin-top: 1rem;
padding: 0.6rem 1.4rem;
border: 1px solid ${props => props.theme.text};
border-radius: 20px;
color: ${props => props.theme.text};
text-decoration: none;
transition: all 0.2s ease;

&:hover {
  background: ${props => props.theme.text};
  color: ${props => props.theme.body};
}
`

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
}

const ExperiencePage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Page
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <LogoComponent />
        <PowerButton />
        <SocialIcons theme="light" />
        <ParticleComponent theme="light" />

        <Content>
          <Heading>Experience</Heading>
          <Lead>
            6+ years shipping web and mobile products — from start-up MVPs to
            B2B platforms used daily by hundreds of people.
          </Lead>
          <Timeline>
            {Experience.map(job => (
              <Entry key={job.company} {...fadeUp}>
                <Row>
                  <h3>{job.role} · {job.company}</h3>
                  <span>{job.period}</span>
                </Row>
                <Row><span>{job.place}</span></Row>
                <Points>
                  {job.points.map(p => <li key={p}>{p}</li>)}
                </Points>
              </Entry>
            ))}
          </Timeline>

          <SubHeading>Education</SubHeading>
          <Timeline>
            {Education.map(ed => (
              <Entry key={ed.degree} {...fadeUp}>
                <Row>
                  <h3>{ed.degree}</h3>
                  <span>{ed.period}</span>
                </Row>
                <Row><span>{ed.school}</span></Row>
              </Entry>
            ))}
          </Timeline>

          <ResumeLink href={Profile.resume} target="_blank" rel="noreferrer">
            Download full resume ↗
          </ResumeLink>
        </Content>
      </Page>
    </ThemeProvider>
  )
}

export default ExperiencePage
