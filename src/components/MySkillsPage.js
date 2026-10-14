import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "./Theme";
import { Develope, YinYang } from "./AllSvgs";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import { SkillGroups } from "../Data/profile";

import { motion } from "framer-motion";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
  padding: 8rem 4rem 4rem 6rem;
  box-sizing: border-box;

  @media (max-width: 50em) {
    flex-direction: column;
    padding: 6rem 1.2rem 10rem 3.5rem;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  min-height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: default;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  @media (max-width: 50em) {
    width: 100%;
    min-height: 0;
    box-sizing: border-box;
    padding: 1.4rem;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  & > *:first-child {
    margin-right: 1rem;
  }

  ${Main}:hover & > * {
    fill: ${(props) => props.theme.body};
  }
`;

const Description = styled.div`
  font-size: calc(0.6em + 0.6vw);

  strong {
    display: block;
    margin-bottom: 0.3rem;
    text-transform: uppercase;
  }
  p {
    margin-left: 1rem;
  }

  @media (max-width: 50em) {
    font-size: 0.95rem;
  }
`;

const Panel = ({ icon, title, intro, groups }) => (
  <Main>
    <Title>
      {icon} {title}
    </Title>
    <Description>{intro}</Description>
    {groups.map((g) => (
      <Description key={g.title}>
        <strong>{g.title}</strong>
        <p>{g.items.join(", ")}</p>
      </Description>
    ))}
  </Main>
);

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1, y: "100vh" }}
        transition={{ ease: "circOut", type: "tween", duration: 1 }}
      >
        <LogoComponent />
        <SocialIcons theme={"light"} />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Panel
          icon={<Develope width={40} height={40} />}
          title="Full-Stack"
          intro="I build end-to-end products with clean architecture, solid tests and secure APIs."
          groups={SkillGroups.filter((g) =>
            ["Frontend", "Backend & APIs", "Data"].includes(g.title)
          )}
        />
        <Panel
          icon={<YinYang width={40} height={40} />}
          title="AI & Security"
          intro="I bring LLMs into real apps — and make sure only the right people (and agents) get access."
          groups={SkillGroups.filter((g) =>
            ["AI & ML", "Auth & Security", "DevOps & Practices"].includes(g.title)
          )}
        />
        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
