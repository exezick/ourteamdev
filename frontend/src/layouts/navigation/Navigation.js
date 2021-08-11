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
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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

  const anchor = 'right'

  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={classes.drawer}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {NavigationData.map((menu) => (
          <Link to={menu.linkto} className={classes.links} key={menu.id}>
            <ListItem
              button
              className={`${
                location.pathname === menu.linkto
                  ? 'menuactive menudrawer'
                  : 'menudrawer '
              }`}
            >
              <ListItemText
                primary={menu.name}
                className={classes.drawerMenuText}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

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

            <div className={classes.NavWrap}>
              {NavigationData.map((menu) => (
                <Link to={menu.linkto} className={classes.links} key={menu.id}>
                  <Button
                    className={`${classes.btnlink} ${classes.noradius} ${
                      location.pathname === menu.linkto ? 'menuactive' : ' '
                    }`}
                  >
                    {menu.name}
                  </Button>
                </Link>
              ))}
            </div>

            <IconButton
              edge="start"
              className={classes.NavMenuBurger}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <React.Fragment key={1}>
        <Button onClick={toggleDrawer('right', true)}>{anchor}</Button>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {list(anchor)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  )
}

export default Navigation
