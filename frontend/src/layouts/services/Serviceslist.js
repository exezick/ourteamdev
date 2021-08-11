import React from 'react'
import useStyles from '../../styles/services/Services.list.style'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ServicesData from '../../data/Services.list'

function Serviceslist() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {ServicesData.map((service) => (
        <Grid
          key={service.id}
          container
          spacing={0}
          className={classes.SVGwrap}
          direction={service.id % 2 ? 'row-reverse' : ''}
        >
          <Grid item xs={6} className={`${classes.LeftGrid}`} order={2}>
            <img
              src={service.servicesIMG}
              className={`${classes.svgbanner}`}
              alt={service.servicesIMG}
            />
          </Grid>

          <Grid item xs={6}>
            <div className={classes.details}>
              <Typography variant="h3" gutterBottom className={classes.title}>
                {service.serviceName}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.subtitle}
              >
                {service.description}
              </Typography>
              <Button
                variant="text"
                disableElevation
                className={`${classes.btnshire} btnhire`}
              >
                READ MORE
              </Button>
            </div>
          </Grid>
        </Grid>
      ))}
    </div>
  )
}

export default Serviceslist
