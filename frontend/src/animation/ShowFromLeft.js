import React from 'react'
import { animated, useSpring } from 'react-spring'

const ShowFromLeft = ({ children, duration }) => {
  const props = useSpring({
    from: { x: -150 },
    config: { duration: duration },
    loop: {
      x: 0,
    },
  })

  return (
    <animated.div className={`zIndexCOntainer`} style={props}>
      {children}
    </animated.div>
  )
}

export default ShowFromLeft
