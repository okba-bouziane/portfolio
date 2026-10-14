import React from 'react'
import styled from 'styled-components'

const Text = styled.h1`
position: fixed;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
color: ${props => `rgba(${props.theme.textRgba},0.08)`};
font-size: calc(5rem + 5vw);
font-family: 'Karla', sans-serif;
font-weight: 700;
pointer-events: none;
user-select: none;
z-index: 1;

@media (max-width: 50em) {
  display: none;
}
`

const BigTitle = (props) => {
  return (
    <Text aria-hidden="true" top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  )
}

export default BigTitle
