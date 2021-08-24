import React from 'react'
import { animated, useSpring } from 'react-spring'

const SlideToTop = ({ children, duration }) => {
  const props = useSpring({
    from: { marginTop: 80 },
    to: { marginTop: 0 },
    config: { duration: duration },
  })

  return <animated.div style={props}>{children}</animated.div>
}

export default SlideToTop
