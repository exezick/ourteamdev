import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'auto',
      background: '#3C065E',
      marginTop: 0,
      paddingTop: 20,
      paddingBottom: 110,
      color: '#f7bcf4',
      [theme.breakpoints.down('sm')]: {
        paddingTop: 1,
      },
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      paddingTop: 40,
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
      marginTop: '100px',
      zIndex: 10,
      position: 'inherit',
      paddingLeft: 100,
      paddingRight: 80,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 0,
        paddingRight: 0,
        marginTop: '60px',
      },
    },
    LeftGrid: {
      height: 'auto',
    },
    rightGrid: {
      height: 'auto',
    },
    svgbanner: {
      width: '70%',
      marginLeft: 30,
      [theme.breakpoints.down('sm')]: {
        height: '200px',
        marginBottom: 40,
        marginLeft: 0,
      },
      [theme.breakpoints.only('md')]: {
        width: '90%',
        marginLeft: 0,
        marginTop: 40,
      },
    },
    title: {
      fontSize: 25,
      color: '#f6beef',
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        width: 'auto',
        fontSize: 23,
      },
    },
    subtitle: {
      fontSize: 16,
      color: '#d6b3eb',
      width: '80%',
      marginTop: 30,
      textAlign: 'left',
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        textAlign: 'left',
        fontSize: 15,
      },
    },
    btnshire: {
      width: 150,
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
    textLimit: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      lineClamp: 4,
      boxOrient: 'vertical',
    },
  }),
)

export default useStyles
