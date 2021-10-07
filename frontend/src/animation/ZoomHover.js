import React from 'react'
import { useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import '../styles/homebannersvg.css'

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.4,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function ZoomHover({ children }) {
  const ref = useRef(null)
  const [xys, set] = useState([0, 0, 1])

  const props = useSpring({ xys })

  return (
    <div className="ccardmain" ref={ref}>
      <animated.div
        className="ccardmain"
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect()
          set(calc(e.clientX, e.clientY, rect))
        }}
      >
        {children}
      </animated.div>
    </div>
  )
}

export default ZoomHover
