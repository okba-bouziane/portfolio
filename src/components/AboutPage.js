import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Theme";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import { Profile } from "../Data/profile";

import astroman from "../assets/Images/astroman.png";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
  position: relative;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  z-index: 3;
  line-height: 1.6;
  font-size: calc(0.6rem + 0.8vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  p + p {
    margin-top: 1.2rem;
  }

  a {
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 50em) {
    position: relative;
    left: auto;
    top: auto;
    width: auto;
    margin: 7rem 1.2rem 10rem 3.5rem;
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;

const Spaceman = styled.div`
  animation: ${float} 4s ease infinite;
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  z-index: 1;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 50em) {
    width: 35vw;
    top: 4rem;
    right: 1rem;
    opacity: 0.6;
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: "100vh" }}
        transition={{ ease: "circOut", type: "tween", duration: 1 }}
      >
        <LogoComponent theme={"dark"} />
        <SocialIcons theme={"dark"} />
        <PowerButton />
        <ParticleComponent theme={"dark"} />
        <Spaceman>
          <img src={astroman} alt="" />
        </Spaceman>

        <Main>
          <p>
            I'm a full-stack developer based in {Profile.location}, with 6+
            years of building web and mobile products — from start-up MVPs to
            B2B platforms used by thousands of people.
          </p>
          <p>
            I work across the stack with Angular, React, TypeScript, Node.js and
            NestJS, and I care a lot about the parts that are easy to get wrong:
            authentication with Keycloak and OAuth 2.0, clean architecture,
            tests and fast queries.
          </p>
          <p>
            With an MSc in Artificial Intelligence, I'm now focused on bringing
            LLMs into real products — RAG assistants, AI agents and secure MCP
            servers. You can connect with me through the social links or say hi
            at <a href={`mailto:${Profile.email}`}>{Profile.email}</a>.
          </p>
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
