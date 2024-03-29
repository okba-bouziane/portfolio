import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import { Toaster, toast } from "react-hot-toast";
import { color } from "@mui/system";
import styledComponents from "styled-components";

const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
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
  z-index: 1;
`;

const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;

const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  z-index: 1;
`;

const rotate = keyframes`
from{
  transform: rotate(0);
}to{
  transform: rotate(360deg);

}

`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

// const down = {
//   open: {
//     initial:{opacity: 0 },
//     animate:{opacity: 1, y: 0},
//     exit:{opacity: 0, y: '-100vh'},
//     transition:{ease:"circOut",type:"tween",duration: 0.5},
//   }
// }

// const left  = {
//   open: {
//     initial:{opacity: 0 },
//     animate:{opacity: 1, x: 0},
//     exit:{opacity: 0, x: '-100vw'},
//     transition:{ease:"circOut",type:"tween",duration: 0.5},
//   }
// }

// const right  = {
//   open: {
//     initial:{opacity: 0 },
//     animate:{opacity: 1, x: 0},
//     exit:{opacity: 0, x: '100vw'},
//     transition:{ease:"circOut",type:"tween",duration: 0.5},
//   }
// }

// const variants =

const Button = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  padding-bottom: 0.75rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  text-align: center;
  margin-top: 1rem;
  border-radius: 15px;
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const handleAnimations = (updatedVariants) => setVariants(updatedVariants);

  const [variants, setVariants] = useState({
    hidden: { opacity: 0 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 1, y: "-100vh" },
    transition: { ease: "circOut", type: "tween", duration: 1 },
  });

  // const [isOpen, setIsOpen] = useState(false)

  return (
    // initial={{opacity: 0 }}
    // animate={{opacity: 1, y: 0}}
    // exit={{opacity: 0, y: '-100vh'}}
    // transition={{ease:"circOut",type:"tween",duration: 0.5}}
    // initial={{opacity: 0}}
    // animate={{opacity: 1, x: 0}}
    // exit={{opacity: 1, x: '100vw'}}
    // transition={{ease:"circOut",type:"tween",duration: 1}}
    <MainContainer
      initial="hidden"
      animate="visible"
      exit="exit"
      transition="transition"
      variants={variants}
    >
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />
        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />

          <Button href="/okba-resume.pdf" download>
            My Resume
          </Button>
        </Center>

        <Contact
          href="mailto:9kbabouziane@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi..
          </motion.h2>
        </Contact>

        <Blog to="">
          <motion.h2
            onClick={() =>
              toast("Coming Soon..", {
                duration: 3000,
                position: "top-center",
                style: { background: "#FCF6F4", color: "#000" },
              })
            }
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Blog
          </motion.h2>
        </Blog>
        <Toaster />
        <Work
          to="/"
          // onClick={() =>
          //   handleAnimations({
          //     ...variants,
          //     exit: { opacity: 0, x: "100vw" },
          //     visible: { opacity: 1, x: 0 },
          //   })
          // }
          onClick={() =>
            toast("Coming Soon..", {
              duration: 3000,
              position: "top-center",
              style: { background: "#FCF6F4", color: "#000" },
            })
          }
          click={click}
          // click={() => {
          //   setVariants({...variants, exit :{opacity : 0, y:'100vh'}, visible: { opacity: 1, y: 0 }});
          //   click();
          // }}
        >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </Work>
        <BottomBar>
          <About to="/about" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About.
            </motion.h2>
          </About>
          <Skills to="/skills" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills.
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
