import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import useStyles from '../../styles/BannerTitle'
import bgIMG from '../../assets/img/ourwork/ourworkbg.jpg'
import FadeInFuntion from '../../animation/FadeIn'
import { Fade } from 'react-awesome-reveal'

const useStylesBanner = makeStyles((theme) =>
  createStyles({
    root: {
      background: `url(${bgIMG})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    titlemain: {
      width: 370,
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
      },
    },
  }),
)

function OurWorkBanner() {
  const classes = useStyles()
  const classesBanner = useStylesBanner()

  return (
    <FadeInFuntion duration={1000}>
      <div className={`${classes.root} ${classesBanner.root}`} align="center">
        <div className={`${classes.titlemain} ${classesBanner.titlemain}`}>
          <Fade cascade duration={1000} triggerOnce>
            <h1 className={classes.titleText}>OUR WORK</h1>
          </Fade>
          <Fade delay={1000} cascade duration={1000} triggerOnce>
            <div className={classes.titleBar}></div>
          </Fade>
          <div className={classes.continue}></div>
        </div>
      </div>
    </FadeInFuntion>
  )
}

export default OurWorkBanner
