import { createStyles, makeStyles } from '@material-ui/core/styles'
import ourteamIMG from '../../assets/img/ourteam/ourteam-bg.jpg'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: '#3C065E',
      flexGrow: 1,
      zIndex: 2,
      position: 'relative',
      overflowY: 'hidden !important',
    },
    titlemain: {
      alignContent: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      width: '460px',
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
      color: '#fff',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: 35,
        float: 'none',
      },
    },
    continue: {
      clear: 'both',
    },
    subtitle: {
      fontSize: 18,
      color: '#fff',
      width: '70%',
      paddingLeft: 10,
      marginTop: 30,
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        fontSize: 15,
        paddingLeft: 20,
        paddingRight: 20,
      },
    },
    ourteamBG: {
      paddingTop: '20px',
      height: '92vh',
      overflowY: 'hidden',
      background: `radial-gradient(rgba(60, 6, 94,.5), rgba(46, 5, 72,1)), url(${ourteamIMG})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
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
    avatarWrap: {
      marginTop: '70px',
      overflow: 'hidden !important',
      [theme.breakpoints.down('sm')]: {
        marginTop: 0,
      },
    },
    avatarGrid: {
      background: '',
      marginTop: 40,
    },
    avatarCircMain: {
      width: 200,
      height: 200,
      borderRadius: '100%',
      backgroundColor: 'rgba(255,255,255,0.9)',
      boxShadow: '1px 3px 10px rgba(0,0,0,0.5)',
      padding: 0,
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]: {
        width: 170,
        height: 170,
        marginTop: 20,
      },
    },
    avatarIMG: {
      width: 160,
      height: 160,
      borderRadius: '100%',
      marginTop: 18,
      padding: 0,
      zIndex: 10,
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        width: 130,
        height: 130,
      },
    },
    avatarShapesLeft: {
      width: 100,
      height: 40,
      position: 'relative',
      transform: 'rotate(-30deg)',
      marginTop: -125,
      marginLeft: -170,
      zIndex: 2,
      [theme.breakpoints.down('sm')]: {
        marginTop: -100,
        marginLeft: -140,
        height: 30,
      },
    },
    avatarShapesRight: {
      width: 100,
      height: 40,
      position: 'relative',
      transform: 'rotate(-30deg)',
      marginTop: -20,
      marginLeft: 150,
      zIndex: 2,
      [theme.breakpoints.down('sm')]: {
        marginTop: -18,
        marginLeft: 120,
        height: 30,
      },
    },
    avatarSmallCircL: {
      borderRadius: '100%',
      width: 15,
      height: 15,
      position: 'relative',
      zIndex: 11,
      marginLeft: -153,
      [theme.breakpoints.down('sm')]: {
        marginLeft: -125,
      },
    },
    avatarSmallCircR: {
      borderRadius: '100%',
      width: 15,
      height: 15,
      position: 'relative',
      zIndex: 11,
      marginLeft: 148,
      marginTop: -80,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 120,
        marginTop: -65,
      },
    },
    avatarText: {
      color: '#f6beef',
      marginTop: 30,
      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    },
    avatarName: {
      fontSize: 17,
      fontWeight: 'bold',
    },
    avatarPosition: {
      fontSize: 14,
      marginTop: 5,
    },
    dotIndex: {
      zIndex: 20,
      position: 'relative',
    },
    avatarIMGzIndex: {
      zIndex: 10,
      position: 'relative',
    },
  }),
)

export default useStyles
