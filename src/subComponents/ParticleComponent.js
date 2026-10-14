import particlelight from '../config/particlesjs-config-light.json'
import particledark from '../config/particlesjs-config.json'

import React, { useCallback } from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Without loading the engine bundle in `init`, tsParticles v2 renders nothing.
function ParticleComponent(props) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = props.theme === 'light' ? particlelight : particledark;

  return (
    <Particles
      init={particlesInit}
      options={{ ...options, fullScreen: { enable: true, zIndex: 0 } }}
    />
  )
}

export default ParticleComponent
