import React from 'react'
import useStyles from '../../styles/blog/BlogContent.style'
import Grid from '@material-ui/core/Grid'
import BlogCard from './BlogCard'
import BlogData from '../../data/Blog.list'
import Button from '@material-ui/core/Button'

import { Fade, Zoom } from 'react-awesome-reveal'

function BlogContent() {
  const classes = useStyles()

  return (
    <div className={classes.root} align="center">
      <Grid container spacing={4}>
        {BlogData.map((blog, i) => (
          <Grid key={blog.id} item xs={12} md={4} lg={4}>
            <Fade direction="left" duration={(i + 1) * 400} triggerOnce>
              <Zoom duration={(i + 1) * 600} triggerOnce>
                <BlogCard blogdata={blog} />
              </Zoom>
            </Fade>
          </Grid>
        ))}
      </Grid>

      <Fade direction="up" duration={2000} triggerOnce>
        <Button
          variant="text"
          disableElevation
          className={`${classes.btnloadmore} btnhire`}
        >
          LOAD MORE
        </Button>
      </Fade>
    </div>
  )
}

export default BlogContent
