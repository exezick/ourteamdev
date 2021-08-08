import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Contactusform from '../../components/contactus/Cotactusform'
import ContactInfo from '../../components/contactus/ContactInfo'
import contactIMG from '../../assets/img/contactus/contactus-bg.jpg'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: '20px',
      height: '92vh',
      overflowY: 'hidden',
      background: '#3C065E',
    },
    titlemain: {
      alignContent: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      width: '400px',
      position: 'relative',
      zIndex: 5,
    },
    titleBar: {
      borderBottom: '10px solid #B918AB',
      width: '100px',
      height: '1px',
      marginTop: '55px',
      marginLeft: '20px',
      float: 'left',
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: '45px',
      width: 'auto',
      float: 'left',
      color: '#FFF',
    },
    continue: {
      clear: 'both',
    },
    details: {
      paddingTop: 50,
      paddingLeft: 20,
      textAlign: 'left',
    },
    SVGwrap: {
      marginTop: '40px',
      zIndex: 10,
      position: 'inherit',
    },
    LeftGrid: {
      height: 'auto',
      position: 'relative',
      zIndex: 1,
    },
    rightGrid: {
      height: '95vh',
      paddingTop: 200,
      position: 'relative',
      marginTop: -180,
      color: '#fff',
      zIndex: 1,
      background: `radial-gradient(rgba(60, 6, 94,0.4), rgba(46, 5, 72,1)), url(${contactIMG})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    subtitle: {
      fontSize: 18,
      color: '#FFF',
      width: '79%',
      paddingLeft: 10,
      marginTop: 30,
      textAlign: 'left',
    },
  }),
)

function Contactus() {
  const classes = useStyles()

  return (
    <div className={classes.root} align="center">
      <div className={classes.titlemain}>
        <h1 className={classes.titleText}>CONTACT US</h1>
        <div className={classes.titleBar}></div>
        <div className={classes.continue}></div>
      </div>

      <Grid container spacing={0} className={classes.SVGwrap}>
        <Grid item xs={6} className={classes.LeftGrid}>
          <Contactusform />
        </Grid>
        <Grid item xs={6} className={classes.rightGrid}>
          <ContactInfo />
        </Grid>
      </Grid>
    </div>
  )
}

export default Contactus