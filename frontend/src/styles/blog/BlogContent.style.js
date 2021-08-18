import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: 'auto',
      background: '#FFF',
      marginTop: -20,
      paddingTop: 50,
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
    pagination: {
      alignItems: 'center',
      textAlign: 'center',
      marginTop: 60,
      width: 270,
    },
    tabs: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '13px !important',
      },
    },
  }),
)

export default useStyles
