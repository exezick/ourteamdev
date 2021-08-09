import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import HomeBannerSVG from '../../assets/svg/home-banner.svg'
import useStyles from '../../styles/home/Banner.style'
import '../../styles/banner.css'

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
              variant="text"
              disableElevation
              className={`${classes.btnshire} btnhire`}
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
