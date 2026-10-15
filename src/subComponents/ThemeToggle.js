import React from 'react'
import styled from 'styled-components'
import { useThemeMode } from '../components/ThemeMode'
import { Moon, Sun } from '../components/AllSvgs'

const Button = styled.button`
position: fixed;
top: 2rem;
right: calc(1rem + 2vw);
z-index: 5;
width: 2.5rem;
height: 2.5rem;
padding: 0;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
border: 1px solid currentColor;
background: transparent;
color: ${props => props.theme.text};
cursor: pointer;
transition: color 1s ease, transform 0.2s ease;

svg {
  width: 55%;
  height: 55%;
}

&:hover {
  transform: rotate(-20deg) scale(1.08);
}

&:focus-visible {
  outline: 2px dashed currentColor;
  outline-offset: 4px;
}

@media (max-width: 50em) {
  top: 1.5rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  color: ${props => (props.$invertOnMobile ? props.theme.body : props.theme.text)};
}
`

const ThemeToggle = ({ invertOnMobile = false }) => {
  const { mode, toggleMode } = useThemeMode()
  const next = mode === 'dark' ? 'light' : 'dark'

  return (
    <Button
      type="button"
      onClick={toggleMode}
      $invertOnMobile={invertOnMobile}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      {mode === 'dark' ? <Sun fill="currentColor" /> : <Moon fill="currentColor" />}
    </Button>
  )
}

export default ThemeToggle
