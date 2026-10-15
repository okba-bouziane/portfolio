import particlelight from '../config/particlesjs-config-light.json'
import particledark from '../config/particlesjs-config.json'

import React, { useCallback } from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useTheme } from "styled-components";

// Without loading the engine bundle in `init`, tsParticles v2 renders nothing.
function ParticleComponent() {
  const { mode } = useTheme();
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = mode === 'light' ? particlelight : particledark;

  return (
    <Particles
      key={mode}
      init={particlesInit}
      options={{ ...options, fullScreen: { enable: true, zIndex: 0 } }}
    />
  )
}

export default ParticleComponent
