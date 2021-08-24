import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import useStyles from '../../styles/BannerTitle'
import bgIMG from '../../assets/img/ourwork/ourworkbg.jpg'
import FadeInFuntion from '../../animation/FadeIn'
import BannerBorderEffect from '../../animation/BannerBorderEffect'

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
          <h1 className={classes.titleText}>OUR WORK</h1>
          <BannerBorderEffect>
            <div className={classes.titleBar}></div>
          </BannerBorderEffect>
          <div className={classes.continue}></div>
        </div>
      </div>
    </FadeInFuntion>
  )
}

export default OurWorkBanner
