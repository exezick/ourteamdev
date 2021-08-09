import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      zIndex: 500,
      padding: 10,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: 'bold',
      color: '#FFF',
      float: 'left',
      marginLeft: theme.spacing(1),
    },
    links: {
      textDecoration: 'none',
      color: '#F8BDF0',
      marginLeft: theme.spacing(2),
    },
    btnlink: {
      color: '#F8BDF0',
    },
    noradius: {
      borderRadius: 0,
    },
    appBarBg: {
      background: '#3C065E',
      color: 'white',
      maxHeight: '65px',
      paddingRight: theme.spacing(3),
    },
    LogoSVG: {
      height: 87,
      margin: 5,
      marginTop: 10,
    },
  }),
)

export default useStyles
