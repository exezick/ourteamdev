import React from 'react'
import useStyles from '../../styles/home/HowWeWork.style'
import Grid from '@material-ui/core/Grid'
import HowWeWorkSVG from '../../assets/svg/how-we-work.svg'
import Typography from '@material-ui/core/Typography'
import { Fade, Zoom } from 'react-awesome-reveal'

function HowWeWork() {
  const classes = useStyles()

  return (
    <div className={classes.root} align="center">
      <div className={classes.titlemain} align="center">
        <Fade direction="left" cascade duration={1000} triggerOnce>
          <h1 className={classes.titleText}>HOW WE WORK</h1>
        </Fade>
        <Fade delay={1000} cascade duration={1000} triggerOnce>
          <div className={classes.titleBar}></div>
        </Fade>
        <div className={classes.continue}></div>
      </div>

      <Grid container spacing={0} className={classes.SVGwrap}>
        <Grid item={true} xs={12} md={6} lg={6} className={classes.LeftGrid}>
          <Zoom duration={1000} triggerOnce>
            <img
              src={HowWeWorkSVG}
              className={classes.svgbanner}
              alt={HowWeWorkSVG}
            />
          </Zoom>
        </Grid>
        <Grid item={true} xs={12} md={6} lg={6}>
          <div className={classes.details}>
            <Fade direction="up" cascade duration={1000} triggerOnce>
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
                Fusce imperdiet tempor urna et tristique. Donec id mattis
                mauris. Duis tincidunt hendrerit hendrerit. Vestibulum
                scelerisque pulvinar quam non consequat. Mauris volutpat leo
                augue, sit amet commodo libero maximus eget. Curabitur et mi non
                turpis fermentum auctor eget vel odio.
              </Typography>
            </Fade>
          </div>
        </Grid>
      </Grid>

      <Fade cascade duration={1200} triggerOnce>
        <div className={classes.circularbg}></div>
        <div className={classes.circularbg2}></div>
      </Fade>
    </div>
  )
}

export default HowWeWork
