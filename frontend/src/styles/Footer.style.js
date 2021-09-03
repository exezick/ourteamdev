import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      background: '#26033B',
      color: '#fff',
      padding: 20,
      paddingBottom: 50,
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
    LogoSVG: {
      height: 95,
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        marginBottom: 15,
      },
    },
    description: {
      color: 'rgba(255,255,255,0.7)',
      padding: '0 !important',
      marginTop: -30,
      marginBottom: 20,
      marginLeft: 57,
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        textAlign: 'center',
        marginLeft: 0,
      },
    },
    copyright: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: '14px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
      },
    },
    links: {
      color: 'rgba(255,255,255,0.7)',
      textDecoration: 'none',
    },
    socialCircle: {
      borderRadius: '100%',
      width: 40,
      height: 40,
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]: {
        width: 35,
        height: 35,
        marginLeft: 10,
        marginRight: 10,
      },
    },
    social: {
      paddingTop: 40,
      paddingBottom: 20,
      [theme.breakpoints.down('sm')]: {
        paddingTop: 40,
        paddingBottom: 20,
      },
    },
    icon: {
      fontSize: 27,
      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
        marginTop: 6,
      },
    },
    socialLink: {
      color: '#fff',
    },
  }),
)

export default useStyles
