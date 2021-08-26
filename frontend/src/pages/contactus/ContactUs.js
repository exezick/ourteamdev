import React from 'react'
import ContactUsForm from '../../components/contactus/CotactUsForm'
import ContactInfo from '../../components/contactus/ContactInfo'
import Grid from '@material-ui/core/Grid'
import useStyles from '../../styles/contactus/ContactUs.style'
import ContactBanner from '../../components/contactus/ContactBanner'
import FadeInFuntion from '../../animation/FadeIn'

function ContactUs() {
  const classes = useStyles()

  return (
    <div>
      <ContactBanner />
      <FadeInFuntion duration={1000}>
        <div className={classes.contactUsWrap}>
          <Grid container spacing={0} className={`${classes.SVGwrap}`}>
            <Grid
              item={true}
              xs={12}
              md={6}
              lg={6}
              className={`${classes.LeftGrid} ${classes.topPadding}`}
            >
              <ContactUsForm />
            </Grid>
            <Grid
              item={true}
              xs={12}
              md={6}
              lg={6}
              className={classes.rightGrid2}
            >
              <ContactInfo />
            </Grid>
          </Grid>
        </div>
      </FadeInFuntion>
    </div>
  )
}

export default ContactUs
