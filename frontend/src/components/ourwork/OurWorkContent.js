import React from 'react'
import useStyles from '../../styles/ourwork/OurWorkContent.style'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import WorkCard from './WorkCard'
import PortfolioData from '../../data/Portfolio.list'
import { Fade } from 'react-awesome-reveal'
import Button from '@material-ui/core/Button'

function OurWorkContent() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root} align="center">
      <Grid container spacing={4}>
        <Grid item={true} xs={12} md={12} lg={12}>
          <Fade direction="down" delay={200} duration={1000} triggerOnce>
            <Paper className={`${classes.paper} ${classes.menu}`} elevation={1}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                centered
              >
                <Fade
                  direction="down"
                  delay={300}
                  cascade
                  duration={1000}
                  triggerOnce
                >
                  <Tab className={classes.tabs} label="All" />
                  <Tab className={classes.tabs} label="Websites" />
                  <Tab className={classes.tabs} label="Mobile Apps" />
                </Fade>
              </Tabs>
            </Paper>
          </Fade>
        </Grid>

        {PortfolioData.map((portfolio, i) => (
          <Grid key={portfolio.id} item xs={12} md={6} lg={6}>
            <Fade direction="left" duration={1800} cascade triggerOnce>
              <WorkCard portfolio={portfolio} />
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

export default OurWorkContent
