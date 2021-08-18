import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import useStyles from '../../styles/BannerTitle'
import bgIMG from '../../assets/img/ourwork/ourworkbg.jpg'

const useStylesService = makeStyles((theme) =>
  createStyles({
    root: {
      background: `url(${bgIMG})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  }),
)

function Ourworkbanner() {
  const classes = useStyles()
  const classesService = useStylesService()

  return (
    <div className={`${classes.root} ${classesService.root}`} align="center">
      <div className={classes.titlemain}>
        <h1 className={classes.titleText}>OUR WORK</h1>
        <div className={classes.titleBar}></div>
        <div className={classes.continue}></div>
      </div>
    </div>
  )
}

export default Ourworkbanner
