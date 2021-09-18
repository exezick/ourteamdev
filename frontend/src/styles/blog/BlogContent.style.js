import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: 'auto',
      background: '#FFF',
      marginTop: 0,
      paddingTop: 30,
      paddingBottom: 70,
      paddingRight: 150,
      paddingLeft: 150,
      color: '#f7bcf4',
      [theme.breakpoints.down('sm')]: {
        paddingRight: 20,
        paddingLeft: 20,
      },
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    menu: {
      background: 'menu',
      padding: '0px !important',
      marginBottom: 30,
    },
    btnloadmore: {
      width: 160,
      paddingLeft: 10,
      borderRadius: 0,
      fontSize: 17,
      paddingTop: 7,
      paddingBottom: 7,
      background: '#B918AB',
      border: 0,
      color: 'white',
      marginLeft: 'auto',
      marginTop: 70,
      marginBottom: 10,
      [theme.breakpoints.down('sm')]: {
        fontSize: 15,
      },
    },
    tabs: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '13px !important',
      },
    },
  }),
)

export default useStyles
