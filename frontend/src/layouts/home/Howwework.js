import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import HowWeWorkSVG from '../../assets/svg/how-we-work.svg'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: '20px',
      height: '92vh',
      overflowY: 'hidden',
      background: '#f9f2fd',
    },
    titlemain: {
      alignContent: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      width: '470px',
      zIndex: 10,
      position: 'inherit',
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
      paddingTop: 50,
      paddingLeft: 20,
      textAlign: 'left',
    },
    SVGwrap: {
      marginTop: '80px',
      zIndex: 10,
      position: 'inherit',
    },
    LeftGrid: {
      height: 'auto',
    },
    svgbanner: {
      width: '75%',
    },
    subtitle: {
      fontSize: 16,
      color: '#3C065E',
      width: '80%',
      paddingLeft: 10,
      marginTop: 10,
      textAlign: 'left',
    },
    circularbg: {
      width: 270,
      height: 270,
      backgroundColor: '#6C63FF',
      display: 'inline-block',
      opacity: '10%',
      borderRadius: '100%',
      position: 'relative',
      float: 'right',
      marginRight: 0,
      marginTop: -50,
      zIndex: 1,
    },
    circularbg2: {
      width: 50,
      height: 50,
      backgroundColor: '#6C63FF',
      opacity: '10%',
      borderRadius: '100%',
      position: 'relative',
      float: 'right',
      marginTop: -50,
      marginRight: 0,
      zIndex: 2,
    },
  }),
)

function Howwework() {
  const classes = useStyles()

  return (
    <div className={classes.root} align="center">
      <div className={classes.titlemain} align="center">
        <h1 className={classes.titleText}>HOW WE WORK</h1>
        <div className={classes.titleBar}></div>
        <div className={classes.continue}></div>
      </div>

      <Grid container spacing={0} className={classes.SVGwrap}>
        <Grid item xs={6} className={classes.LeftGrid}>
          <img
            src={HowWeWorkSVG}
            className={classes.svgbanner}
            alt={HowWeWorkSVG}
          />
        </Grid>
        <Grid item xs={6}>
          <div className={classes.details}>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.subtitle}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi.
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.subtitle}
            >
              Fusce imperdiet tempor urna et tristique. Donec id mattis mauris.
              Duis tincidunt hendrerit hendrerit. Vestibulum scelerisque
              pulvinar quam non consequat. Mauris volutpat leo augue, sit amet
              commodo libero maximus eget. Curabitur et mi non turpis fermentum
              auctor eget vel odio.
            </Typography>
          </div>
        </Grid>
      </Grid>

      <div className={classes.circularbg}></div>
      <div className={classes.circularbg2}></div>
    </div>
  )
}

export default Howwework
