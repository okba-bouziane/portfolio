import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Github, Gitlab } from "../components/AllSvgs";

const Box = styled(motion.article)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 0 50px 0 50px;
  backdrop-filter: blur(3px);
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  @media (max-width: 50em) {
    padding: 1.4rem;
    border-radius: 0 30px 0 30px;
  }
`;

const Shot = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: top left;
  border-radius: 0 30px 0 30px;
  border: 1px solid currentColor;
  margin-bottom: 1.2rem;
`;

const Title = styled.h2`
  font-family: "Karla", sans-serif;
  font-size: calc(1.3rem + 0.6vw);
  font-weight: 600;
`;

const Tagline = styled.span`
  font-family: "Ubuntu Mono", monospace;
  font-size: 0.95rem;
  opacity: 0.75;
  margin-top: 0.3rem;
`;

const Description = styled.p`
  font-family: "Karla", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  margin: 1.2rem 0 1rem;
`;

const Highlights = styled.ul`
  font-family: "Karla", sans-serif;
  font-size: 0.92rem;
  line-height: 1.6;
  padding-left: 1.2rem;
  margin-bottom: 1.4rem;
  opacity: 0.9;

  li + li {
    margin-top: 0.3rem;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid currentColor;
`;

const Tag = styled.span`
  font-family: "Ubuntu Mono", monospace;
  font-size: 0.85rem;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.2rem;
`;

const Repo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid currentColor;
  border-radius: 20px;
  color: inherit;
  text-decoration: none;
  font-family: "Karla", sans-serif;
  font-size: 0.9rem;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const item = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } },
};

function Card({ project }) {
  const { name, tagline, description, highlights, tags, github, gitlab, live, image } = project;

  return (
    <Box variants={item}>
      {image && <Shot src={image} alt={`${name} screenshot`} loading="lazy" />}
      <Title>{name}</Title>
      <Tagline>{tagline}</Tagline>
      <Description>{description}</Description>
      <Highlights>
        {highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </Highlights>
      <Tags>
        {tags.map((t) => (
          <Tag key={t}>#{t}</Tag>
        ))}
      </Tags>
      <Links>
        {live && (
          <Repo href={live} target="_blank" rel="noreferrer">
            Live demo
          </Repo>
        )}
        <Repo href={github} target="_blank" rel="noreferrer">
          <Github fill="currentColor" /> GitHub
        </Repo>
        {gitlab && (
          <Repo href={gitlab} target="_blank" rel="noreferrer">
            <Gitlab fill="currentColor" /> GitLab
          </Repo>
        )}
      </Links>
    </Box>
  );
}

export default Card;
