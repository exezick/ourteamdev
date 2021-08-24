import React from 'react'
import { animated, useSpring } from 'react-spring'

const FadeIn = ({ children, duration }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: duration },
  })

  return <animated.div style={props}>{children}</animated.div>
}

export default FadeIn
