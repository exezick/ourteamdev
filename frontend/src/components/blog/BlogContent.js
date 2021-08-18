import React from 'react'
import useStyles from '../../styles/blog/BlogContent.style'
import Grid from '@material-ui/core/Grid'
import BlogCard from './BlogCard'
import BlogData from '../../data/Blog.list'
import Pagination from '@material-ui/lab/Pagination'

function BlogContent() {
  const classes = useStyles()

  return (
    <div className={classes.root} align="center">
      <Grid container spacing={3}>
        {BlogData.map((blog) => (
          <Grid key={blog.id} item xs={12} md={4} lg={4}>
            <BlogCard blogdata={blog} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        className={classes.pagination}
        count={5}
        variant="outlined"
        color="secondary"
      />
    </div>
  )
}

export default BlogContent
