import { createStyles, makeStyles } from '@material-ui/core/styles'
import contactIMG from '../../assets/img/contactus/contactus-bg.jpg'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: '0px',
      height: '92vh',
      overflowY: 'hidden',
      overflowX: 'hidden',
      background: '#3C065E',
      [theme.breakpoints.down('sm')]: {
        height: 'auto',
        overflowY: 'none',
      },
    },
    contactUsWrap: {
      marginTop: -60,
      background: '#3C065E',
    },
    titlemain: {
      alignContent: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      width: '400px',
      position: 'relative',
      zIndex: 5,
      marginTop: 20,
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        textAlign: 'center',
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
        textAlign: 'center',
        fontSize: 35,
        float: 'none',
      },
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
      marginTop: '60px',
      zIndex: 10,
      position: 'inherit',
    },
    LeftGrid: {
      height: 'auto',
      position: 'relative',
      zIndex: 1,
      [theme.breakpoints.down('sm')]: {
        paddingBottom: 50,
      },
    },
    rightGrid: {
      height: '95vh',
      paddingTop: 210,
      position: 'relative',
      marginTop: -200,
      color: '#fff',
      zIndex: 1,
      background: `radial-gradient(rgba(60, 6, 94,0.4), rgba(46, 5, 72,1)), url(${contactIMG})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      [theme.breakpoints.down('sm')]: {
        zIndex: 0,
        marginTop: 0,
        height: 'auto',
        paddingTop: 50,
        paddingBottom: 20,
      },
    },
    rightGrid2: {
      height: '80vh',
      paddingTop: 110,
      position: 'relative',
      marginTop: 0,
      color: '#fff',
      zIndex: 1,
      background: `radial-gradient(rgba(60, 6, 94,0.4), rgba(46, 5, 72,1)), url(${contactIMG})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      [theme.breakpoints.down('sm')]: {
        zIndex: 0,
        marginTop: 0,
        height: 'auto',
        paddingTop: 50,
        paddingBottom: 20,
      },
    },
    subtitle: {
      fontSize: 18,
      color: '#FFF',
      width: '79%',
      paddingLeft: 10,
      marginTop: 30,
      textAlign: 'left',
    },
    topPadding: {
      paddingTop: 50,
    },
  }),
)

export default useStyles
