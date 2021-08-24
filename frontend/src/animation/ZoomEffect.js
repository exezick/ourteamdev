import React from 'react'
import { animated, useSpring } from 'react-spring'

const ZoomEffect = ({ children, duration }) => {
  const props = useSpring({
    from: { scale: 0.5 },
    to: { scale: 1 },
    config: { duration: duration },
  })

  return (
    <animated.div className={`zIndexCOntainer`} style={props}>
      {children}
    </animated.div>
  )
}

export default ZoomEffect
