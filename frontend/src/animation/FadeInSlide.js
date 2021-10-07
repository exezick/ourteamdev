import React from 'react'
import { animated, useSpring } from 'react-spring'

const FadeInSlide = ({ children }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { duration: 1000 },
  })

  return <animated.div style={props}>{children}</animated.div>
}

export default FadeInSlide
