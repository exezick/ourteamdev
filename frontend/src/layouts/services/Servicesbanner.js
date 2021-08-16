import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import contactIMG from '../../assets/img/services/services-page-banner.jpg'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: '30px',
      height: '37vh',
      background: `url(${contactIMG})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      [theme.breakpoints.down('sm')]: {
        height: 'auto',
        paddingTop: '40px',
        paddingBottom: '70px',
      },
      [theme.breakpoints.up('md')]: {
        height: 'auto',
        paddingTop: '20px',
        paddingBottom: '70px',
      },
    },
    titlemain: {
      alignContent: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      width: '435px',
      position: 'relative',
      zIndex: 5,
      marginTop: 50,
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        marginTop: 30,
      },
    },
    titleBar: {
      borderBottom: '10px solid #B918AB',
      width: '100px',
      height: '1px',
      marginTop: '55px',
      marginLeft: '20px',
      float: 'left',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: '45px',
      width: 'auto',
      float: 'left',
      color: '#FFF',
      [theme.breakpoints.down('sm')]: {
        fontSize: '26px',
        float: 'inherit',
      },
    },
    continue: {
      clear: 'both',
    },
  }),
)

function Servicesbanner() {
  const classes = useStyles()

  return (
    <div className={classes.root} align="center">
      <div className={classes.titlemain}>
        <h1 className={classes.titleText}>OUR SERVICES</h1>
        <div className={classes.titleBar}></div>
        <div className={classes.continue}></div>
      </div>
    </div>
  )
}

export default Servicesbanner
