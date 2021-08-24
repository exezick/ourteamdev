import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import useStyles from '../../styles/ourwork/WorkCard.style'

function BlogCard({ blogdata }) {
  const classes = useStyles()

  return (
    <div align="center">
      <Card className={`${classes.root} risingEffect`} elevation={2}>
        <CardMedia className={classes.media} image={blogdata.image} />
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            className={classes.titleLimit}
          >
            {blogdata.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.textLimit}
          >
            {blogdata.content}
          </Typography>
        </CardContent>

        <CardActions disableSpacing className={classes.actionWrap}>
          <Typography className={classes.dateposted} color="textSecondary">
            {blogdata.dateposted}
          </Typography>
          <Button
            variant="text"
            disableElevation
            className={`${classes.btnshire} btnhire`}
            endIcon={<ArrowForwardIcon />}
          >
            Read
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default BlogCard
