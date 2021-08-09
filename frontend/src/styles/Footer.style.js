import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      background: '#26033B',
      color: '#fff',
      padding: 20,
      paddingBottom: 50,
    },
    LogoSVG: {
      height: 95,
      margin: 0,
    },
    description: {
      color: 'rgba(255,255,255,0.7)',
      padding: '0 !important',
      marginTop: -30,
      marginBottom: 20,
      marginLeft: 57,
    },
    copyright: {
      color: 'rgba(255,255,255,0.7)',
    },
    links: {
      color: 'rgba(255,255,255,0.7)',
      textDecoration: 'none',
    },
    socialCircle: {
      borderRadius: '100%',
      width: 40,
      height: 40,
    },
    social: {
      paddingTop: 20,
      paddingBottom: 20,
    },
    icon: {
      fontSize: 30,
    },
    socialLink: {
      color: '#fff',
    },
  }),
)

export default useStyles
