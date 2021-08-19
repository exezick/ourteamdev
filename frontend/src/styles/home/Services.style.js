import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: '20px',
      height: '92vh',
      overflowY: 'hidden',
      overflowX: 'hidden',
      background: '#f9f2fd',
      [theme.breakpoints.down('sm')]: {
        overflowY: 'none',
        height: 'auto',
        paddingBottom: 60,
      },
      [theme.breakpoints.only('md')]: {
        overflowY: 'none',
        height: 'auto',
        paddingBottom: 60,
      },
    },
    titlemain: {
      alignContent: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      width: '325px',
      zIndex: 3,
      position: 'relative',
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
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      paddingTop: 80,
      paddingLeft: 80,
      textAlign: 'left',
      marginTop: 0,
      [theme.breakpoints.down('sm')]: {
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
        width: 'auto',
      },
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#3C065E',
      [theme.breakpoints.down('sm')]: {
        fontSize: 28,
        textAlign: 'center',
      },
    },
    textTitle: {
      marginTop: 15,
    },
    subtitle: {
      fontSize: 16,
      color: '#3C065E',
      width: '79%',
      paddingLeft: 10,
      marginTop: 20,
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        fontSize: 15,
        paddingLeft: 0,
      },
    },
    btnshire: {
      width: 150,
      marginTop: 30,
      paddingLeft: 10,
      borderRadius: 0,
      fontSize: 16,
      paddingTop: 5,
      paddingBottom: 5,
      background: '#B918AB',
      border: 0,
      color: 'white',
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
      },
    },
    skewed: {
      transform: 'skew(-30deg)',
      background: '#3C065E',
      marginLeft: '90px',
      width: '900px',
      height: '270px',
      marginTop: '110px',
      [theme.breakpoints.only('md')]: {
        width: '750px',
      },
    },
    skewedContent: {
      transform: 'skew(30deg, 0deg)',
    },
    skewedSVG: {
      width: '250px',
      height: '250px',
      background: '#f50057',
      float: 'left',
      marginLeft: '20px',
      marginTop: '-30px',
      boxShadow:
        'rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px',
      [theme.breakpoints.only('md')]: {
        width: 190,
      },
    },
    noOverflow: {
      overflowX: 'hidden',
    },
    menuRightWrap: {
      display: 'block',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    menuRight: {
      width: 370,
      marginLeft: 170,
      color: '#F8BDF0',
      [theme.breakpoints.only('md')]: {
        width: 'auto',
        marginLeft: -16,
        float: 'left',
      },
    },
    menufont: {
      fontSize: '20px !important',
    },
    radiobtn: {
      color: '#f50057',
    },
    servicesSVG: {
      width: 150,
      transform: 'skew(30deg, 0deg)',
      color: '#FFF',
      marginTop: '70px',
      [theme.breakpoints.only('md')]: {
        width: 130,
      },
    },
    zindex: {
      zIndex: 20,
      position: 'relative',
    },
    circularbg: {
      width: 330,
      height: 330,
      backgroundColor: '#6C63FF',
      display: 'inline-block',
      opacity: '10%',
      borderRadius: '100%',
      position: 'relative',
      marginTop: 50,
      marginLeft: 160,
      float: 'left',
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
      marginTop: 10,
      left: 0,
      marginLeft: 100,
      zIndex: 2,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      [theme.breakpoints.only('md')]: {
        display: 'none',
      },
    },
    skewBG: {
      transform: 'skew(-30deg)',
      background:
        'radial-gradient(rgba(60, 6, 94,.5), rgba(46, 5, 72,1)), #3C065E',
      width: '850px',
      height: '96vh',
      marginLeft: '910px',
      marginTop: '-520px',
      position: 'absolute',
      overflow: 'hidden',
      zIndex: 1,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      [theme.breakpoints.only('md')]: {
        width: '850px',
        height: '96vh',
        marginLeft: '730px',
        marginTop: '-520px',
        display: 'none',
      },
    },

    skewIMG: {
      width: 'auto',
      height: '100%',
      transform: 'skew(30deg)',
      marginLeft: '-300px',
      opacity: '30%',
    },
    mobileSVGImage: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
    servicesSVGmobile: {
      height: '200px',
      marginBottom: 20,
      marginTop: 50,
      marginLeft: 0,
    },
    RightMenuMobile: {
      display: 'none',
      width: '300px',
      background: '',
      color: '#f50057',
      zindex: 5,
      right: 0,
      marginTop: 50,
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
    radiobtnRightMobile: {
      margin: 0,
    },
    menuText: {
      marginRight: 30,
    },
    textLimit: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      lineClamp: 4,
      boxOrient: 'vertical',
    },
  }),
)

export default useStyles
