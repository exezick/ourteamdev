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
      [theme.breakpoints.down('sm')]: {
        paddingRight: theme.spacing(0),
        paddingLeft: theme.spacing(0),
      },
    },
    LogoSVG: {
      height: 87,
      margin: 5,
      marginTop: 10,
      [theme.breakpoints.down('sm')]: {
        height: 75,
        marginLeft: -25,
      },
    },
    NavWrap: {
      display: 'block',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    NavMenuBurger: {
      marginRight: theme.spacing(2),
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        marginRight: -5,
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
    drawer: {
      background: '#47076f !important',
    },
    drawermenuList: {
      paddingLeft: 10,
    },
    drawerMenuText: {
      fontSize: '15px !important',
      margin: 0,
    },
  }),
)

export default useStyles
