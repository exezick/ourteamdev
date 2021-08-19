import useStyles from '../../styles/notfound404/notfound404.style'
import error404SVG from '../../assets/svg/eror404.svg'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

function NotFound404() {
  const classes = useStyles()

  return (
    <div align="center" className={classes.root}>
      <img src={error404SVG} alt={error404SVG} className={classes.svg} />

      <Typography variant="h5" gutterBottom className={classes.title}>
        Something is wrong
      </Typography>
      <Typography variant="subtitle1" gutterBottom className={classes.subtitle}>
        We can't seem to find the page you are looking for.
      </Typography>

      <Link to="/" className={classes.links}>
        <Button
          variant="text"
          disableElevation
          className={`${classes.btnshire} btnhire`}
        >
          BACK TO HOME
        </Button>
      </Link>
    </div>
  )
}

export default NotFound404
