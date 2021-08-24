import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import OurTeam from '../../layouts/home/OurTeam'
import AboutUsDetails from './AboutUsDetails'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: 20,
      marginTop: 0,
      backgroundColor: '#3C065E',
    },
  }),
)

function AboutUsContent(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AboutUsDetails />
      <OurTeam />
    </div>
  )
}

export default AboutUsContent
