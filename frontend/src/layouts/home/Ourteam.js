import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ourteamIMG from '../../assets/img/ourteam/ourteam-bg.jpg'
import Grid from '@material-ui/core/Grid'

import avatarOne from '../../assets/img/ourteam/avatar1.jpg'
import avatarTwo from '../../assets/img/ourteam/avatar2.jpg'
import avatarThree from '../../assets/img/ourteam/avatar3.jpg'
import avatarFour from '../../assets/img/ourteam/avatar4.jpg'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: '#3C065E',
      flexGrow: 1,
    },
    titlemain: {
      alignContent: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      width: '460px',
    },
    titleBar: {
      borderBottom: '10px solid #B918AB',
      width: '100px',
      height: '1px',
      marginTop: '55px',
      marginLeft: '20px',
      float: 'left',
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: '45px',
      width: 'auto',
      float: 'left',
      color: '#fff',
    },
    continue: {
      clear: 'both',
    },
    subtitle: {
      fontSize: 18,
      color: '#fff',
      width: '70%',
      paddingLeft: 10,
      marginTop: 30,
    },
    ourteamBG: {
      paddingTop: '20px',
      height: '92vh',
      overflowY: 'hidden',
      background: `radial-gradient(rgba(60, 6, 94,.5), rgba(46, 5, 72,1)), url(${ourteamIMG})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    avatarWrap: {
      marginTop: '70px',
    },
    avatarGrid: {
      background: '',
      marginTop: 40,
    },
    avatarCircMain: {
      width: 200,
      height: 200,
      borderRadius: '100%',
      backgroundColor: 'rgba(255,255,255,0.9)',
      boxShadow: '1px 3px 10px rgba(0,0,0,0.5)',
      padding: 0,
      overflow: 'hidden',
    },
    avatarIMG: {
      width: 160,
      height: 160,
      borderRadius: '100%',
      marginTop: 18,
      padding: 0,
      zIndex: 10,
      position: 'relative',
    },
    avatarShapesLeft: {
      width: 100,
      height: 40,
      position: 'relative',
      transform: 'rotate(-30deg)',
      marginTop: -125,
      marginLeft: -170,
      zIndex: 2,
    },
    avatarShapesRight: {
      width: 100,
      height: 40,
      position: 'relative',
      transform: 'rotate(-30deg)',
      marginTop: -20,
      marginLeft: 150,
      zIndex: 2,
    },
    avatarSmallCircL: {
      borderRadius: '100%',
      width: 15,
      height: 15,
      position: 'relative',
      zIndex: 11,
      marginLeft: -153,
    },
    avatarSmallCircR: {
      borderRadius: '100%',
      width: 15,
      height: 15,
      position: 'relative',
      zIndex: 11,
      marginLeft: 148,
      marginTop: -80,
    },
    avatarText: {
      color: 'rgba(255,255,255,0.8)',
      marginTop: 30,
      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    },
    avatarName: {
      fontSize: 17,
      fontWeight: 'bold',
    },
    avatarPosition: {
      fontSize: 14,
      marginTop: 5,
    },
  }),
)

const ourteamList = [
  {
    id: 1,
    avatarIMG: avatarOne,
    avatarName: 'Quiamenh Sarza',
    avatarPosition: 'Senior Web Dev',
    avatarColor: '#DF0648',
  },
  {
    id: 2,
    avatarIMG: avatarThree,
    avatarName: 'Exequiel Vibar',
    avatarPosition: 'Frontend Dev',
    avatarColor: '#068FDF',
  },
  {
    id: 3,
    avatarIMG: avatarTwo,
    avatarName: 'Jordan Nares',
    avatarPosition: 'UI/UX Dev',
    avatarColor: '#DFD806',
  },
  {
    id: 4,
    avatarIMG: avatarFour,
    avatarName: 'Cegeey Suarez',
    avatarPosition: 'Junior Dev',
    avatarColor: '#06DF7B',
  },
]

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
            <Grid item xs={6} sm={3} className={classes.avatarGrid}>
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
