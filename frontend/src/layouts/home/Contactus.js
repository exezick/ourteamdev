import React from 'react'
import Grid from '@material-ui/core/Grid'
import ContactUsForm from '../../components/contactus/CotactUsForm'
import ContactInfo from '../../components/contactus/ContactInfo'
import useStyles from '../../styles/contactus/ContactUs.style'
import { Fade } from 'react-awesome-reveal'

function Contactus() {
  const classes = useStyles()

  return (
    <div className={classes.root} align="center">
      <div className={classes.titlemain}>
        <Fade direction="left" cascade duration={1000} triggerOnce>
          <h1 className={classes.titleText}>CONTACT US</h1>
        </Fade>
        <Fade delay={1000} cascade duration={1000} triggerOnce>
          <div className={classes.titleBar}></div>
        </Fade>
        <div className={classes.continue}></div>
      </div>

      <Grid container spacing={0} className={classes.SVGwrap}>
        <Grid item={true} xs={12} md={6} lg={6} className={classes.LeftGrid}>
          <ContactUsForm />
        </Grid>
        <Grid item={true} xs={12} md={6} lg={6} className={classes.rightGrid}>
          <ContactInfo />
        </Grid>
      </Grid>
    </div>
  )
}

export default Contactus
