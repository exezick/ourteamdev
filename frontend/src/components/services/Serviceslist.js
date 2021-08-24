import React from 'react'
import useStyles from '../../styles/services/ServicesList.style'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ServicesData from '../../data/Services.list'
import isWidthUp from '@material-ui/core/withWidth'

import FadeIn from '../../animation/FadeIn'
import ShowFromLeft from '../../animation/ShowFromLeft'
import ZoomEffect from '../../animation/ZoomEffect'

function ServicesList(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {ServicesData.map((service, i) => (
        <FadeIn key={service.id} duration={(i + 1) * 700}>
          <Grid
            container
            spacing={0}
            className={classes.SVGwrap}
            direction={
              isWidthUp('sm', props.width)
                ? service.id % 2
                  ? 'row-reverse'
                  : 'row'
                : 'column'
            }
          >
            <Grid
              item={true}
              xs={12}
              md={6}
              className={`${classes.LeftGrid}`}
              order={2}
              align="center"
            >
              <ZoomEffect duration={(i + 1) * 1000}>
                <img
                  src={service.servicesIMG}
                  className={`${classes.svgbanner}`}
                  alt={service.servicesIMG}
                />
              </ZoomEffect>
            </Grid>

            <Grid item={true} xs={12} md={6} className={classes.rightGrid}>
              <div className={classes.details}>
                <ShowFromLeft duration={(i + 1) * 500}>
                  <Typography
                    variant="h3"
                    gutterBottom
                    className={classes.title}
                  >
                    {service.serviceName}
                  </Typography>
                </ShowFromLeft>

                <ShowFromLeft duration={(i + 2) * 500}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.subtitle}
                  >
                    {service.description}
                  </Typography>
                </ShowFromLeft>

                <ShowFromLeft duration={(i + 3) * 500}>
                  <Button
                    variant="text"
                    disableElevation
                    className={`${classes.btnshire} btnhire`}
                  >
                    READ MORE
                  </Button>
                </ShowFromLeft>
              </div>
            </Grid>
          </Grid>
        </FadeIn>
      ))}
    </div>
  )
}

export default ServicesList
