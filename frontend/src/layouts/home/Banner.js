import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import HomeBannerSVG from '../../assets/svg/home-banner.svg'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: '#3C065E',
      height: '100vh',
      borderRadius: 0,
      zIndex: 20,
    },
    main: {
      overflowY: 'hidden',
      height: '100vh',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width: '45%',
      paddingTop: 90,
      paddingLeft: 80,
      textAlign: 'left',
      marginTop: 70,
    },
    title: {
      fontSize: 41,
      fontWeight: 'bold',
      color: '#FFF',
    },
    textTitle: {
      marginTop: 15,
    },
    subtitle: {
      fontSize: 18,
      color: '#FFF',
      width: '85%',
      paddingLeft: 10,
      marginTop: 30,
    },
    svgbanner: {
      width: '43%',
      float: 'right',
      marginTop: -430,
      marginRight: 60,
    },
    btnshire: {
      width: 250,
      marginTop: 60,
      paddingLeft: 10,
      borderRadius: 0,
      fontSize: 26,
      fontWeight: 'bold',
      paddingTop: 10,
      paddingBottom: 10,
      background: '#B918AB',
      border: 0,
      color: 'white',
    },
    zindex: {
      zIndex: 20,
      position: 'relative',
      width: '100%',
    },
    circularbg: {
      width: 330,
      height: 330,
      backgroundColor: '#6C63FF',
      display: 'inline-block',
      opacity: '10%',
      borderRadius: '100%',
      position: 'relative',
      marginTop: -120,
      marginLeft: -60,
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
      marginTop: -90,
      marginLeft: 40,
      zIndex: 2,
    },
    circularbg3: {
      width: 40,
      height: 40,
      backgroundColor: '#6C63FF',
      display: 'inline-block',
      opacity: '10%',
      borderRadius: '100%',
      position: 'absolute',
      marginTop: -100,
      marginLeft: 90,
      zIndex: 3,
    },
  }),
)

function Banner() {
  const classes = useStyles()

  return (
    <div className={classes.main}>
      <Card className={classes.root} elevation={0}>
        <div className={classes.zindex}>
          <div className={classes.details}>
            <Typography variant="h3" gutterBottom className={classes.title}>
              <div className={classes.textTitle}>Accelerate</div>
              <div className={classes.textTitle}>
                innovation with world-class
              </div>
              <div className={classes.textTitle}>Tech Developers</div>
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.subtitle}
            >
              We design and build best quality websites and mobile apps for all
              kinds of business.
            </Typography>
            <Button
              variant="contained"
              disableElevation
              className={classes.btnshire}
            >
              HIRE US
            </Button>
          </div>
          <img
            src={HomeBannerSVG}
            className={classes.svgbanner}
            alt={HomeBannerSVG}
          />
        </div>
      </Card>
      <div className={classes.circularbg}></div>
      <div className={classes.circularbg2}></div>
      <div className={classes.circularbg3}></div>
    </div>
  )
}

export default Banner
