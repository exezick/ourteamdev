import React from 'react'
import Typography from '@material-ui/core/Typography'
import useStyles from '../../styles/home/OurTeam.style'
import Grid from '@material-ui/core/Grid'
import ourteamList from '../../data/OurTeam.list'
import { Fade } from 'react-awesome-reveal'
import AvatarCard from './AvatarCard'

function Ourteam() {
  const classes = useStyles()

  return (
    <div className={classes.root} align="center">
      <div className={classes.ourteamBG}>
        <div className={classes.titlemain} align="center">
          <Fade direction="left" cascade duration={1000} triggerOnce>
            <h1 className={classes.titleText}>OUR TEAM DEV</h1>
          </Fade>
          <Fade delay={1000} cascade duration={1000} triggerOnce>
            <div className={classes.titleBar}></div>
          </Fade>
          <div className={classes.continue}></div>
        </div>

        <Fade delay={800} duration={2000} triggerOnce>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.subtitle}
          >
            This are our entire developer team with incredible freelance talent
            for all your software development needs.
          </Typography>
        </Fade>

        <Grid container spacing={0} className={classes.avatarWrap}>
          {ourteamList.map((avatar) => (
            <Grid
              item={true}
              xs={12}
              sm={6}
              md={3}
              lg={3}
              className={classes.avatarGrid}
              key={avatar.id}
            >
              <AvatarCard avatar={avatar} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Ourteam
