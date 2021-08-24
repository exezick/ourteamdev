import React from 'react'
import { animated, useSpring } from 'react-spring'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    FloatLeft: {
      width: '100px',
      height: '1px',
      marginLeft: '20px',
      float: 'left',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  }),
)

const BannerBorderEffect = ({ children }) => {
  const classes = useStyles()

  const props = useSpring({
    from: { marginTop: 100 },
    to: { marginTop: 55 },
    config: { duration: 500 },
  })

  return (
    <animated.div className={classes.FloatLeft} style={props}>
      {children}
    </animated.div>
  )
}

export default BannerBorderEffect
