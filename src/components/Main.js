import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import { Profile } from "../Data/profile";

const mobile = "@media (max-width: 50em)";

const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  position: relative;

  a,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }

  h2 {
    font-size: calc(1rem + 0.6vw);
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 3;

  ${mobile} {
    top: 1.4rem;
    color: ${(props) => (props.$click ? props.theme.body : props.theme.text)};
    transition: color 1s ease;
  }
`;

const NavItem = styled(NavLink)`
  color: ${(props) => (props.$click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 3;
  transition: color 1s ease;
`;

const ExperienceLink = styled(NavItem)`
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  transform-origin: center;
  color: ${(props) => props.theme.text};

  ${mobile} {
    top: 7rem;
    right: 22%;
    transform: none;
    color: ${(props) => (props.$click ? props.theme.body : props.theme.text)};
  }
`;

const WorkLink = styled(NavItem)`
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);

  ${mobile} {
    top: 7rem;
    left: 22%;
    transform: none;
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  ${mobile} {
    a {
      color: ${(props) => props.theme.text};
    }
  }
`;

const SkillsLink = styled(NavItem)`
  color: ${(props) => props.theme.text};
`;

const rotate = keyframes`
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
`;

const Center = styled.div`
  position: absolute;
  top: ${(props) => (props.$click ? "85%" : "50%")};
  left: ${(props) => (props.$click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 1s ease;
  z-index: 2;

  ${mobile} {
    top: ${(props) => (props.$click ? "90%" : "50%")};
    left: ${(props) => (props.$click ? "88%" : "50%")};
  }
`;

const Spinner = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  padding: 0;
  line-height: 0;

  svg {
    animation: ${rotate} infinite 1.5s linear;
    width: ${(props) => (props.$click ? "120px" : "200px")};
    height: ${(props) => (props.$click ? "120px" : "200px")};
    transition: width 1s ease, height 1s ease;
  }

  &:focus-visible {
    outline: 2px dashed ${(props) => props.theme.text};
    outline-offset: 6px;
    border-radius: 50%;
  }

  ${mobile} {
    svg {
      width: ${(props) => (props.$click ? "70px" : "150px")};
      height: ${(props) => (props.$click ? "70px" : "150px")};
    }
  }
`;

const Hint = styled.span`
  display: ${(props) => (props.$click ? "none" : "inline-block")};
  padding-top: 1rem;
  font-family: "Ubuntu Mono", monospace;
  color: ${(props) => props.theme.text};
`;

const ResumeButton = styled.a`
  display: ${(props) => (props.$click ? "none" : "inline-block")};
  padding: 0.5rem 1.2rem;
  margin-top: 1rem;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 15px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.$click ? "50%" : "0%")};
  height: ${(props) => (props.$click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  ${mobile} {
    right: 0;
    width: ${(props) => (props.$click ? "100%" : "0%")};
    height: ${(props) => (props.$click ? "50%" : "0%")};
    bottom: auto;
    transition: width 0.5s ease, height 1s ease 0.5s;
  }
`;

const navAnim = (fromY) => ({
  initial: { y: fromY },
  animate: { y: 0, transition: { type: "spring", duration: 1.5, delay: 1 } },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
});

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 1, y: "-100vh", transition: { ease: "circOut", type: "tween", duration: 1 } },
};

const Main = () => {
  const [click, setClick] = useState(false);

  return (
    <MainContainer initial="hidden" animate="visible" exit="exit" variants={variants}>
      <DarkDiv $click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />

        <Center $click={click}>
          <Spinner
            $click={click}
            onClick={() => setClick(!click)}
            aria-label={click ? "Hide introduction" : "Show introduction"}
            aria-expanded={click}
          >
            <YinYang fill="currentColor" />
          </Spinner>
          <Hint $click={click}>click here</Hint>
          <ResumeButton $click={click} href={Profile.resume} target="_blank" rel="noreferrer">
            My Resume
          </ResumeButton>
        </Center>

        <Contact $click={click} href={`mailto:${Profile.email}`}>
          <motion.h2 {...navAnim(-200)}>Say hi..</motion.h2>
        </Contact>

        <ExperienceLink to="/experience" $click={click}>
          <motion.h2 {...navAnim(-200)}>Experience</motion.h2>
        </ExperienceLink>

        <WorkLink to="/work" $click={click}>
          <motion.h2 {...navAnim(-200)}>Work</motion.h2>
        </WorkLink>

        <BottomBar>
          <NavItem to="/about" $click={click}>
            <motion.h2 {...navAnim(200)}>About.</motion.h2>
          </NavItem>
          <SkillsLink to="/skills">
            <motion.h2 {...navAnim(200)}>My Skills.</motion.h2>
          </SkillsLink>
        </BottomBar>
      </Container>
      {click ? <Intro /> : null}
    </MainContainer>
  );
};

export default Main;
