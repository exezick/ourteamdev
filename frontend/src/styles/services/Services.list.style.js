import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'auto',
      background: '#3C065E',
      marginTop: -20,
      paddingTop: 20,
      paddingBottom: 110,
      color: '#f7bcf4',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      paddingTop: 40,
      paddingLeft: 20,
      textAlign: 'left',
      marginTop: 0,
    },
    SVGwrap: {
      marginTop: '100px',
      zIndex: 10,
      position: 'inherit',
      paddingLeft: 100,
      paddingRight: 80,
    },
    LeftGrid: {
      height: 'auto',
    },
    svgbanner: {
      width: '70%',
      marginLeft: 30,
    },
    title: {
      fontSize: 25,
      color: '#f6beef',
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 16,
      color: '#d6b3eb',
      width: '80%',
      marginTop: 30,
      textAlign: 'left',
    },
    btnshire: {
      width: 150,
      marginTop: 30,
      paddingLeft: 10,
      borderRadius: 0,
      fontSize: 16,
      fontWeight: 'bold',
      paddingTop: 5,
      paddingBottom: 5,
      background: '#B918AB',
      border: 0,
      color: 'white',
    },
  }),
)

export default useStyles
