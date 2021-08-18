import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import useStyles from '../../styles/BannerTitle'
import contactIMG from '../../assets/img/contactus/contactbg.jpg'

const useStylesService = makeStyles((theme) =>
  createStyles({
    root: {
      background: `url(${contactIMG})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    titlemain: {
      width: 430,
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
      },
    },
  }),
)

function ContactBanner() {
  const classes = useStyles()
  const classesService = useStylesService()

  return (
    <div className={`${classes.root} ${classesService.root}`} align="center">
      <div className={`${classes.titlemain} ${classesService.titlemain}`}>
        <h1 className={classes.titleText}>CONTACT US</h1>
        <div className={classes.titleBar}></div>
        <div className={classes.continue}></div>
      </div>
    </div>
  )
}

export default ContactBanner
