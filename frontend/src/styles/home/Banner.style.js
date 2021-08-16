import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: '#3C065E',
      height: '100vh',
      borderRadius: 0,
      zIndex: 20,
      [theme.breakpoints.down('sm')]: {
        height: 'auto !important',
        paddingBottom: 50,
      },
      [theme.breakpoints.only('md')]: {
        height: 'auto',
        paddingBottom: 70,
      },
    },
    main: {
      overflowY: 'hidden',
      height: '100vh',
      [theme.breakpoints.down('sm')]: {
        height: 'auto !important',
      },
      [theme.breakpoints.only('md')]: {
        height: 'auto !important',
        overflowY: 'hidden',
        background: '#eee',
      },
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width: '45%',
      paddingTop: 80,
      paddingLeft: 80,
      textAlign: 'left',
      marginTop: 70,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        position: 'relative',
        zIndex: 5,
        marginTop: 10,
        paddingTop: 40,
        paddingLeft: 40,
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
      },
      [theme.breakpoints.only('md')]: {
        paddingTop: 40,
      },
    },
    title: {
      fontSize: 41,
      fontWeight: 'bold',
      color: '#FFF',
      [theme.breakpoints.down('sm')]: {
        fontSize: 20,
      },
      [theme.breakpoints.only('md')]: {
        fontSize: 33,
      },
    },
    textTitle: {
      marginTop: 15,
      [theme.breakpoints.down('sm')]: {
        marginTop: 10,
      },
    },
    subtitle: {
      fontSize: 18,
      color: '#FFF',
      width: '79%',
      paddingLeft: 10,
      marginTop: 30,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
        marginTop: 20,
      },
    },
    svgbanner: {
      width: '43%',
      float: 'right',
      marginTop: -430,
      marginRight: 60,
      [theme.breakpoints.down('sm')]: {
        float: 'none',
        width: 'auto',
        height: 200,
        position: 'relative',
        zIndex: 2,
        marginRight: 20,
        marginLeft: 25,
        display: 'none',
      },
      [theme.breakpoints.only('md')]: {
        marginTop: -380,
      },
    },
    btnshire: {
      width: 240,
      marginTop: 60,
      paddingLeft: 10,
      marginLeft: 10,
      borderRadius: 0,
      fontSize: 26,
      fontWeight: 'bold',
      paddingTop: 10,
      paddingBottom: 10,
      background: '#B918AB',
      border: 0,
      color: 'white',
      [theme.breakpoints.down('sm')]: {
        width: 160,
        marginTop: 30,
        fontSize: 17,
      },
      [theme.breakpoints.only('md')]: {
        fontSize: 20,
        width: 210,
      },
    },
    zindex: {
      zIndex: 20,
      position: 'relative',
      width: '100%',
    },
    circularbg: {
      width: 330,
      height: 330,
      backgroundColor: '#6C63FF',
      display: 'inline-block',
      opacity: '10%',
      borderRadius: '100%',
      position: 'relative',
      marginTop: -120,
      marginLeft: -60,
      zIndex: 1,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      [theme.breakpoints.only('md')]: {
        display: 'none',
      },
    },
    circularbg2: {
      width: 70,
      height: 70,
      backgroundColor: '#6C63FF',
      display: 'inline-block',
      opacity: '10%',
      borderRadius: '100%',
      position: 'absolute',
      marginTop: -100,
      marginLeft: 40,
      zIndex: 2,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      [theme.breakpoints.only('md')]: {
        display: 'none',
      },
    },
    circularbg3: {
      width: 35,
      height: 35,
      backgroundColor: '#6C63FF',
      display: 'inline-block',
      opacity: '10%',
      borderRadius: '100%',
      position: 'absolute',
      marginTop: -105,
      marginLeft: 90,
      zIndex: 3,
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
