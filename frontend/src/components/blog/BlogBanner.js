import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import useStyles from '../../styles/BannerTitle'
import bgIMG from '../../assets/img/blog/blogbg.jpg'
import FadeInFuntion from '../../animation/FadeIn'
import BannerBorderEffect from '../../animation/BannerBorderEffect'

const useStylesBlog = makeStyles((theme) =>
  createStyles({
    root: {
      background: `url(${bgIMG})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    titlemain: {
      width: 240,
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
      },
    },
  }),
)

function BlogBanner() {
  const classes = useStyles()
  const classesBlog = useStylesBlog()

  return (
    <FadeInFuntion duration={1000}>
      <div className={`${classes.root} ${classesBlog.root}`} align="center">
        <div className={`${classes.titlemain} ${classesBlog.titlemain}`}>
          <h1 className={classes.titleText}>BLOG</h1>
          <BannerBorderEffect>
            <div className={classes.titleBar}></div>
          </BannerBorderEffect>
          <div className={classes.continue}></div>
        </div>
      </div>
    </FadeInFuntion>
  )
}

export default BlogBanner
