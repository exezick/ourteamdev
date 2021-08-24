import React from 'react'
import useStyles from '../../styles/ourwork/OurWorkContent.style'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import WorkCard from './WorkCard'
import PortfolioData from '../../data/Portfolio.list'
import Pagination from '@material-ui/lab/Pagination'
import ZoomEffect from '../../animation/ZoomEffect'

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
          <Paper className={`${classes.paper} ${classes.menu}`} elevation={1}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              centered
            >
              <Tab className={classes.tabs} label="All" />
              <Tab className={classes.tabs} label="Websites" />
              <Tab className={classes.tabs} label="Mobile Apps" />
            </Tabs>
          </Paper>
        </Grid>

        {PortfolioData.map((portfolio, i) => (
          <Grid key={portfolio.id} item xs={12} md={6} lg={6}>
            <ZoomEffect duration={(i + 1) * 1000}>
              <WorkCard portfolio={portfolio} />
            </ZoomEffect>
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

export default OurWorkContent
