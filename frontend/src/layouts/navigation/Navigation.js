import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link, useLocation } from 'react-router-dom'
import LogoSVG from '../../assets/logo.svg'
import useStyles from '../../styles/Navigation.style'
import NavigationData from '../../data/Navigation'

function ElevationScroll(props) {
  const { children, window } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

function Navigation(props) {
  const classes = useStyles()
  const location = useLocation()

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar position="fixed" className={classes.appBarBg} elevation={0}>
          <Toolbar>
            <Typography variant="h6" align="left" className={classes.title}>
              <Link to="/" className={classes.links}>
                <img src={LogoSVG} className={classes.LogoSVG} alt={LogoSVG} />
              </Link>
            </Typography>

            {NavigationData.map((menu) => (
              <Link to={menu.linkto} className={classes.links} key={menu.id}>
                {location.pathname === menu.linkto ? (
                  <Button
                    className={`${classes.btnlink} ${classes.noradius} menuactive`}
                  >
                    {menu.name}
                  </Button>
                ) : (
                  <Button className={`${classes.btnlink} ${classes.noradius}`}>
                    {menu.name}
                  </Button>
                )}
              </Link>
            ))}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  )
}

export default Navigation
