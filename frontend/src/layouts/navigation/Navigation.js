import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import LogoSVG from '../../assets/logo.svg'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      zIndex: 500,
      padding: 10,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: 'bold',
      color: '#FFF',
      float: 'left',
      marginLeft: theme.spacing(1),
    },
    links: {
      textDecoration: 'none',
      color: '#F8BDF0',
      marginLeft: theme.spacing(2),
    },
    btnlink: {
      color: '#F8BDF0',
    },
    noradius: {
      borderRadius: 0,
    },
    appBarBg: {
      background: '#3C065E',
      color: 'white',
      maxHeight: '65px',
      paddingRight: theme.spacing(3),
    },
    LogoSVG: {
      height: 87,
      margin: 5,
      marginTop: 10,
    },
  }),
)

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
            <Link to="/" className={classes.links}>
              <Button className={`${classes.btnlink} ${classes.noradius}`}>
                HOME
              </Button>
            </Link>
            <Link to="/services" className={classes.links}>
              <Button className={`${classes.btnlink} ${classes.noradius}`}>
                SERVICES
              </Button>
            </Link>
            <Link to="/ourwork" className={classes.links}>
              <Button className={`${classes.btnlink} ${classes.noradius}`}>
                OUR WORK
              </Button>
            </Link>
            <Link to="/aboutus" className={classes.links}>
              <Button className={`${classes.btnlink} ${classes.noradius}`}>
                ABOUT US
              </Button>
            </Link>
            <Link to="/contactus" className={classes.links}>
              <Button className={`${classes.btnlink} ${classes.noradius}`}>
                CONTACT US
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  )
}

export default Navigation
