import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 480,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    btnshire: {
      width: 100,
      paddingLeft: 10,
      borderRadius: 0,
      fontSize: 14,
      paddingTop: 5,
      paddingBottom: 5,
      background: '#B918AB',
      border: 0,
      color: 'white',
      marginLeft: 'auto',
      marginRight: 20,
      marginBottom: 10,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
      },
    },
    actionWrap: {
      paddingTop: 15,
    },
    content: {
      textAlign: 'left',
    },
  }),
)

export default useStyles
