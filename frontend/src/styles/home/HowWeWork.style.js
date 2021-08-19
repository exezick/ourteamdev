import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: '20px',
      height: '92vh',
      overflowY: 'hidden',
      background: '#f9f2fd',
      [theme.breakpoints.down('sm')]: {
        height: 'auto',
        paddingBottom: 70,
      },
      [theme.breakpoints.only('md')]: {
        height: 'auto',
        paddingBottom: 70,
      },
    },
    titlemain: {
      alignContent: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      width: '470px',
      zIndex: 10,
      position: 'inherit',
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
      color: '#3C065E',
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
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 0,
      },
    },
    SVGwrap: {
      marginTop: '80px',
      zIndex: 10,
      position: 'inherit',
    },
    LeftGrid: {
      height: 'auto',
    },
    svgbanner: {
      width: '75%',
      [theme.breakpoints.down('sm')]: {
        width: '65%',
      },
      [theme.breakpoints.only('md')]: {
        width: '80%',
      },
    },
    subtitle: {
      fontSize: 16,
      color: '#3C065E',
      width: '80%',
      paddingLeft: 10,
      marginTop: 10,
      textAlign: 'left',
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
        width: 'auto',
        paddingLeft: 30,
        paddingRight: 30,
      },
    },
    circularbg: {
      width: 270,
      height: 270,
      backgroundColor: '#6C63FF',
      display: 'inline-block',
      opacity: '10%',
      borderRadius: '100%',
      position: 'relative',
      float: 'right',
      marginRight: 0,
      marginTop: -50,
      zIndex: 1,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      [theme.breakpoints.only('md')]: {
        display: 'none',
      },
    },
    circularbg2: {
      width: 50,
      height: 50,
      backgroundColor: '#6C63FF',
      opacity: '10%',
      borderRadius: '100%',
      position: 'relative',
      float: 'right',
      marginTop: -50,
      marginRight: 0,
      zIndex: 2,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      [theme.breakpoints.only('md')]: {
        display: 'none',
      },
    },
  }),
)

export default useStyles
