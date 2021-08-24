import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import useStyles from '../../styles/ourwork/WorkCard.style'

function WorkCard({ portfolio }) {
  const classes = useStyles()

  return (
    <div align="center">
      <Card className={`${classes.root} risingEffect`} elevation={2}>
        <CardMedia className={classes.media} image={portfolio.image} />
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            className={classes.titleLimit}
          >
            {portfolio.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.textLimit}
          >
            {portfolio.content}
          </Typography>
        </CardContent>
        <CardActions className={classes.actionWrap}>
          <Button
            variant="text"
            disableElevation
            className={`${classes.btnshire} btnhire`}
            endIcon={<ArrowForwardIcon />}
          >
            View
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default WorkCard
