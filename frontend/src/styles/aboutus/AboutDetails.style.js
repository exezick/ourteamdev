import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: '20px',
      height: 'auto',
      [theme.breakpoints.down('sm')]: {
        height: 'auto',
        paddingBottom: 70,
      },
      [theme.breakpoints.only('md')]: {
        height: 'auto',
        paddingBottom: 70,
      },
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      paddingTop: 50,
      paddingLeft: 20,
      textAlign: 'left',
      marginTop: 0,
      [theme.breakpoints.down('sm')]: {
        paddingTop: 0,
        width: 'auto',
        paddingLeft: 30,
        paddingRight: 30,
      },
    },
    SVGwrap: {
      marginTop: -30,
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
      color: '#d6b3eb',
      width: '80%',
      paddingLeft: 10,
      marginTop: 40,
      textAlign: 'left',
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
        width: 'auto',
        paddingLeft: 30,
        paddingRight: 30,
      },
    },
  }),
)

export default useStyles
