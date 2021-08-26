import React from 'react'
import { animated, useSpring } from 'react-spring'

const SlideToTop = ({ children, margin, duration }) => {
  const props = useSpring({
    from: { marginTop: margin },
    to: { marginTop: 0 },
    config: { duration: duration },
  })

  return <animated.div style={props}>{children}</animated.div>
}

export default SlideToTop
