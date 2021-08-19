import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: 100,
      paddingBottom: 100,
      paddingLeft: 20,
      paddingRight: 20,
      height: '80vh',
      background: '#3C065E',
      color: '#FFF',
      [theme.breakpoints.down('sm')]: {
        height: 'auto',
        paddingTop: 50,
        paddingBottom: 50,
      },
      [theme.breakpoints.only('md')]: {
        height: 'auto',
        paddingTop: 100,
        paddingBottom: 100,
      },
    },
    svg: {
      width: '25%',
      [theme.breakpoints.down('sm')]: {
        width: '50%',
      },
      [theme.breakpoints.only('md')]: {
        width: '33%',
      },
    },
    btnshire: {
      width: 160,
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
    links: {
      color: 'rgba(255,255,255,0.7)',
      textDecoration: 'none',
    },
    title: {
      fontSize: 25,
      color: '#f6beef',
      fontWeight: 'bold',
      marginTop: 30,
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        width: 'auto',
        fontSize: 20,
      },
    },
    subtitle: {
      fontSize: 16,
      color: '#d6b3eb',
      marginTop: 10,
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        fontSize: 14,
      },
    },
  }),
)

export default useStyles
