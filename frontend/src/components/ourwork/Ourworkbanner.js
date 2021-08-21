import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import useStyles from '../../styles/BannerTitle'
import bgIMG from '../../assets/img/ourwork/ourworkbg.jpg'

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
    <div className={`${classes.root} ${classesBanner.root}`} align="center">
      <div className={`${classes.titlemain} ${classesBanner.titlemain}`}>
        <h1 className={classes.titleText}>OUR WORK</h1>
        <div className={classes.titleBar}></div>
        <div className={classes.continue}></div>
      </div>
    </div>
  )
}

export default OurWorkBanner
