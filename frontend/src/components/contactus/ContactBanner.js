import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import useStyles from '../../styles/BannerTitle'
import contactIMG from '../../assets/img/contactus/contactbg.jpg'
import FadeInFuntion from '../../animation/FadeIn'
import { Fade } from 'react-awesome-reveal'

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
    <FadeInFuntion duration={1000}>
      <div className={`${classes.root} ${classesService.root}`} align="center">
        <div className={`${classes.titlemain} ${classesService.titlemain}`}>
          <Fade cascade duration={1000} triggerOnce>
            <h1 className={classes.titleText}>CONTACT US</h1>
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

export default ContactBanner
