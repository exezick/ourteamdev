import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import useStyles from '../../styles/BannerTitle'
import bgIMG from '../../assets/img/aboutus/aboutus.jpg'
import FadeInFuntion from '../../animation/FadeIn'
import BannerBorderEffect from '../../animation/BannerBorderEffect'

const useStylesAbout = makeStyles((theme) =>
  createStyles({
    root: {
      background: `url(${bgIMG})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    titlemain: {
      width: 350,
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
      },
    },
  }),
)

function AboutBanner() {
  const classes = useStyles()
  const classesAbout = useStylesAbout()

  return (
    <FadeInFuntion duration={1000}>
      <div className={`${classes.root} ${classesAbout.root}`} align="center">
        <div className={`${classes.titlemain} ${classesAbout.titlemain}`}>
          <h1 className={classes.titleText}>ABOUT US</h1>
          <BannerBorderEffect>
            <div className={classes.titleBar}></div>
          </BannerBorderEffect>
          <div className={classes.continue}></div>
        </div>
      </div>
    </FadeInFuntion>
  )
}

export default AboutBanner
