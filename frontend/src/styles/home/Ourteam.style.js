import { createStyles, makeStyles } from '@material-ui/core/styles'
import ourteamIMG from '../../assets/img/ourteam/ourteam-bg.jpg'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: '#3C065E',
      flexGrow: 1,
    },
    titlemain: {
      alignContent: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      width: '460px',
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
      color: '#fff',
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
    },
    ourteamBG: {
      paddingTop: '20px',
      height: '92vh',
      overflowY: 'hidden',
      background: `radial-gradient(rgba(60, 6, 94,.5), rgba(46, 5, 72,1)), url(${ourteamIMG})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    avatarWrap: {
      marginTop: '70px',
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
    },
    avatarIMG: {
      width: 160,
      height: 160,
      borderRadius: '100%',
      marginTop: 18,
      padding: 0,
      zIndex: 10,
      position: 'relative',
    },
    avatarShapesLeft: {
      width: 100,
      height: 40,
      position: 'relative',
      transform: 'rotate(-30deg)',
      marginTop: -125,
      marginLeft: -170,
      zIndex: 2,
    },
    avatarShapesRight: {
      width: 100,
      height: 40,
      position: 'relative',
      transform: 'rotate(-30deg)',
      marginTop: -20,
      marginLeft: 150,
      zIndex: 2,
    },
    avatarSmallCircL: {
      borderRadius: '100%',
      width: 15,
      height: 15,
      position: 'relative',
      zIndex: 11,
      marginLeft: -153,
    },
    avatarSmallCircR: {
      borderRadius: '100%',
      width: 15,
      height: 15,
      position: 'relative',
      zIndex: 11,
      marginLeft: 148,
      marginTop: -80,
    },
    avatarText: {
      color: 'rgba(255,255,255,0.8)',
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
  }),
)

export default useStyles
