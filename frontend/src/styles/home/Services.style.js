import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: '20px',
      height: '92vh',
      overflowY: 'hidden',
      background: '#f9f2fd',
    },
    titlemain: {
      alignContent: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      width: '325px',
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
      color: '#3C065E',
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
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#3C065E',
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
    },
    btnshire: {
      width: 150,
      marginTop: 30,
      paddingLeft: 10,
      borderRadius: 0,
      fontSize: 16,
      fontWeight: 'bold',
      paddingTop: 5,
      paddingBottom: 5,
      background: '#B918AB',
      border: 0,
      color: 'white',
    },
    skewed: {
      transform: 'skew(-30deg)',
      background: '#3C065E',
      marginLeft: '90px',
      width: '900px',
      height: '270px',
      marginTop: '110px',
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
    },
    noOverflow: {
      overflowX: 'hidden',
    },
    menuRight: {
      width: 390,
      marginLeft: 190,
      color: '#F8BDF0',
    },
    menufont: {
      fontSize: '20px !important',
    },
    radiobtn: {
      color: '#f50057bf',
    },
    servicesSVG: {
      width: 130,
      transform: 'skew(30deg, 0deg)',
      color: '#FFF',
      marginTop: '60px',
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
    },
    skewBG: {
      transform: 'skew(-30deg)',
      background:
        'radial-gradient(rgba(60, 6, 94,.5), rgba(46, 5, 72,1)), #3C065E',
      width: '850px',
      height: '95vh',
      marginLeft: '910px',
      marginTop: '-520px',
      position: 'absolute',
      overflow: 'hidden',
    },
    skewIMG: {
      width: 'auto',
      height: '100%',
      transform: 'skew(30deg)',
      marginLeft: '-300px',
      opacity: '30%',
    },
  }),
)

export default useStyles