import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Github, Gitlab, Linkedin, Mail } from "../components/AllSvgs";
import { Profile } from "../Data/profile";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  color: ${(props) => (props.$inverted ? props.theme.body : props.theme.text)};
  transition: color 1s ease;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  a {
    display: block;
    color: inherit;
    transition: transform 0.2s ease;
  }
  a:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 50em) {
    left: 1rem;
    color: ${(props) => props.theme.text};
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: currentColor;

  @media (max-width: 50em) {
    height: 4rem !important;
  }
`;

const links = [
  { href: Profile.github, label: "GitHub", Icon: Github },
  { href: Profile.gitlab, label: "GitLab", Icon: Gitlab },
  { href: Profile.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${Profile.email}`, label: "Email", Icon: Mail },
];

const SocialIcons = (props) => {
  return (
    <Icons $inverted={props.inverted}>
      {links.map(({ href, label, Icon }, i) => (
        <motion.div
          key={label}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1 + i * 0.2 }}
        >
          <a href={href} rel="noreferrer" target="_blank" aria-label={label} title={label}>
            <Icon width={25} height={25} fill="currentColor" />
          </a>
        </motion.div>
      ))}
      <Line
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

export default SocialIcons;
