import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useStyles from '../../styles/aboutus/AboutDetails.style'
import AboutSVG from '../../assets/svg/aboutus.svg'
import { Fade, Zoom } from 'react-awesome-reveal'

function AboutUsDetails() {
  const classes = useStyles()

  return (
    <div className={classes.root} align="center">
      <Grid container spacing={0} className={classes.SVGwrap}>
        <Grid item={true} xs={12} md={6} lg={6} className={classes.LeftGrid}>
          <Zoom duration={1000} triggerOnce>
            <img src={AboutSVG} className={classes.svgbanner} alt={AboutSVG} />
          </Zoom>
        </Grid>
        <Grid item={true} xs={12} md={6} lg={6}>
          <div className={classes.details}>
            <Fade direction="up" duration={1000} cascade triggerOnce>
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
    </div>
  )
}

export default AboutUsDetails
