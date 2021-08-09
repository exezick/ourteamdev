import React from 'react'
import Typography from '@material-ui/core/Typography'
import useStyles from '../../styles/home/Ourteam.style'
import Grid from '@material-ui/core/Grid'
import ourteamList from '../../data/OurTeam.list'

function Ourteam() {
  const classes = useStyles()

  return (
    <div className={classes.root} align="center">
      <div className={classes.ourteamBG}>
        <div className={classes.titlemain} align="center">
          <h1 className={classes.titleText}>OUR TEAM DEV</h1>
          <div className={classes.titleBar}></div>
          <div className={classes.continue}></div>
        </div>

        <Typography
          variant="subtitle1"
          gutterBottom
          className={classes.subtitle}
        >
          This are our entire developer team with incredible freelance talent
          for all your software development needs.
        </Typography>

        <Grid container spacing={0} className={classes.avatarWrap}>
          {ourteamList.map((avatar) => (
            <Grid
              item
              xs={6}
              sm={3}
              className={classes.avatarGrid}
              key={avatar.id}
            >
              <div className={classes.avatarCircMain}>
                <img
                  src={avatar.avatarIMG}
                  alt={avatar.id}
                  className={classes.avatarIMG}
                  style={{ border: `3px solid ${avatar.avatarColor}` }}
                />

                <div
                  className={classes.avatarShapesLeft}
                  style={{ background: `${avatar.avatarColor}` }}
                ></div>
                <div
                  className={classes.avatarShapesRight}
                  style={{ background: `${avatar.avatarColor}` }}
                ></div>

                <div
                  className={classes.avatarSmallCircL}
                  style={{ background: `${avatar.avatarColor}` }}
                ></div>
                <div
                  className={classes.avatarSmallCircR}
                  style={{ background: `${avatar.avatarColor}` }}
                ></div>
              </div>

              <div className={classes.avatarText}>
                <div className={classes.avatarName}>{avatar.avatarName}</div>
                <div className={classes.avatarPosition}>
                  {avatar.avatarPosition}
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Ourteam
