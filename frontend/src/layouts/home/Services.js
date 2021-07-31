import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Radio from '@material-ui/core/Radio'
import ServicesWebDevSVG from '../../assets/svg/services-webdev.svg'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: '10px',
      height: '92vh',
      overflowY: 'hidden',
      background: '#f9f2fd',
    },
    titlemain: {
      alignContent: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      width: '325px',
    },
    titleBar: {
      borderBottom: '10px solid #B918AB',
      width: '100px',
      height: '1px',
      marginTop: '55px',
      marginLeft: '20px',
      float: 'left',
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: '45px',
      width: 'auto',
      float: 'left',
      color: '#3C065E',
    },
    continue: {
      clear: 'both',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      paddingTop: 80,
      paddingLeft: 80,
      textAlign: 'left',
      marginTop: 0,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#3C065E',
    },
    textTitle: {
      marginTop: 15,
    },
    subtitle: {
      fontSize: 16,
      color: '#3C065E',
      width: '79%',
      paddingLeft: 10,
      marginTop: 20,
    },
    btnshire: {
      width: 150,
      marginTop: 30,
      paddingLeft: 10,
      borderRadius: 0,
      fontSize: 16,
      fontWeight: 'bold',
      paddingTop: 5,
      paddingBottom: 5,
      background: '#B918AB',
      border: 0,
      color: 'white',
    },
    skewed: {
      transform: 'skew(-30deg)',
      background: '#3C065E',
      marginLeft: '90px',
      width: '900px',
      height: '270px',
      marginTop: '110px',
    },
    skewedContent: {
      transform: 'skew(30deg, 0deg)',
    },
    skewedSVG: {
      width: '250px',
      height: '250px',
      background: '#f50057',
      float: 'left',
      marginLeft: '20px',
      marginTop: '-30px',
      boxShadow:
        'rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px',
    },
    noOverflow: {
      overflowX: 'hidden',
    },
    menuRight: {
      width: 390,
      marginLeft: 190,
      color: '#F8BDF0',
    },
    menufont: {
      fontSize: '20px !important',
    },
    radiobtn: {
      color: '#f50057bf',
    },
    servicesSVG: {
      width: 130,
      transform: 'skew(30deg, 0deg)',
      color: '#FFF',
      marginTop: '60px',
    },
    zindex: {
      zIndex: 20,
      position: 'relative',
    },
    circularbg: {
      width: 330,
      height: 330,
      backgroundColor: '#6C63FF',
      display: 'inline-block',
      opacity: '10%',
      borderRadius: '100%',
      position: 'relative',
      marginTop: 50,
      marginLeft: 160,
      float: 'left',
      zIndex: 1,
    },
    circularbg2: {
      width: 70,
      height: 70,
      backgroundColor: '#6C63FF',
      display: 'inline-block',
      opacity: '10%',
      borderRadius: '100%',
      position: 'absolute',
      marginTop: 10,
      left: 0,
      marginLeft: 100,
      zIndex: 2,
    },
  }),
)

function Services() {
  const classes = useStyles()

  return (
    <div className={classes.root} align="center">
      <div className={classes.titlemain} align="center">
        <h1 className={classes.titleText}>SERVICES</h1>
        <div className={classes.titleBar}></div>
        <div className={classes.continue}></div>
      </div>

      <Grid container spacing={0} className={classes.zindex}>
        <Grid item xs={5}>
          <div className={classes.details}>
            <Typography variant="h3" gutterBottom className={classes.title}>
              <div className={classes.textTitle}>Web Development</div>
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.subtitle}
            >
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Nulla interdum, tortor id viverra
              scelerisque, est sem rhoncus massa, a tempus turpis augue sed
              justo.
            </Typography>
            <Button
              variant="text"
              disableElevation
              className={`${classes.btnshire} btnhire`}
            >
              READ MORE
            </Button>
          </div>
        </Grid>
        <Grid item xs={7} className={classes.noOverflow}>
          <div className={classes.skewed}>
            <div className={classes.skewedSVG}>
              <img
                src={ServicesWebDevSVG}
                className={classes.servicesSVG}
                alt={ServicesWebDevSVG}
              />
            </div>
            <div className={classes.skewedContent}>
              <List className={classes.menuRight}>
                <ListItem key="1" dense button>
                  <ListItemText id="1" primary="Web Development" />
                  <ListItemSecondaryAction>
                    <Radio value="1" name="1" className={classes.radiobtn} />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem key="2" dense button>
                  <ListItemText id="2" primary="Web Design" />
                  <ListItemSecondaryAction>
                    <Radio value="2" name="2" className={classes.radiobtn} />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem key="3" dense button>
                  <ListItemText id="3" primary="Mobile App Development" />
                  <ListItemSecondaryAction>
                    <Radio value="3" name="3" className={classes.radiobtn} />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem key="4" dense button>
                  <ListItemText id="4" primary="Api Development" />
                  <ListItemSecondaryAction>
                    <Radio value="4" name="4" className={classes.radiobtn} />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem key="5" dense button>
                  <ListItemText id="5" primary="Ecommerce" />
                  <ListItemSecondaryAction>
                    <Radio value="5" name="5" className={classes.radiobtn} />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem key="6" dense button>
                  <ListItemText id="6" primary="Payment Integration" />
                  <ListItemSecondaryAction>
                    <Radio value="6" name="6" className={classes.radiobtn} />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem key="7" dense button>
                  <ListItemText id="7" primary="SEO Integration" />
                  <ListItemSecondaryAction>
                    <Radio value="7" name="7" className={classes.radiobtn} />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </div>
          </div>
        </Grid>
      </Grid>

      <div className={classes.circularbg}></div>
      <div className={classes.circularbg2}></div>
    </div>
  )
}

export default Services
