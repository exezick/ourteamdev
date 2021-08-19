import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Ourteam from '../../layouts/home/Ourteam'
import AboutUsDetails from './AboutUsDetails'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: 20,
      marginTop: -20,
      backgroundColor: '#3C065E',
    },
  }),
)

function AboutusContent(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AboutUsDetails />
      <Ourteam />
    </div>
  )
}

export default AboutusContent
