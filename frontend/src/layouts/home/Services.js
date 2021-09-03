import React, { useMemo } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Radio from '@material-ui/core/Radio'
import useStyles from '../../styles/home/Services.style'
import ServicesData from '../../data/Services.list'
import useServiceHook from '../../hooks/useServiceHook'
import { Fade } from 'react-awesome-reveal'

function Services(props) {
  const classes = useStyles()

  // By default we'll set it as the first service
  const [service, selectServiceOnChange, selectServiceOnClick] =
    useServiceHook(1)

  const serviceList = useMemo(
    () => (
      <>
        {ServicesData.map((s) => (
          <ListItem
            key={s.id}
            dense
            button
            onClick={() => selectServiceOnClick(s.id)}
          >
            <ListItemText
              id={s.id}
              primary={s.serviceName}
              className={classes.menuText}
            />
            <ListItemSecondaryAction>
              <Radio
                checked={service.id === s.id}
                value={s.id}
                name={s.serviceName}
                className={classes.radiobtn}
                onChange={selectServiceOnChange}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </>
    ),
    [service, selectServiceOnChange, selectServiceOnClick, classes],
  )

  const serviceListMobile = useMemo(
    () => (
      <>
        {ServicesData.map((s) => (
          <Radio
            checked={service.id === s.id}
            key={s.id}
            value={s.id}
            name={s.serviceName}
            className={`${classes.radiobtn} ${classes.radiobtnRightMobile}`}
            onChange={selectServiceOnChange}
          />
        ))}
      </>
    ),
    [service, selectServiceOnChange, classes],
  )

  return (
    <div className={classes.root} align="center">
      <div className={classes.titlemain} align="center">
        <Fade direction="left" cascade duration={1000} triggerOnce>
          <h1 className={classes.titleText}>SERVICES</h1>
        </Fade>
        <Fade delay={1000} cascade duration={1000} triggerOnce>
          <div className={classes.titleBar}></div>
        </Fade>
        <div className={classes.continue}></div>
      </div>

      <div className={classes.RightMenuMobile} align="center">
        {serviceListMobile}
      </div>

      <Grid container spacing={0} className={classes.zindex}>
        <Grid item xs={12} className={classes.mobileSVGImage}>
          <img
            src={service.servicesIMG}
            className={classes.servicesSVGmobile}
            alt={service.servicesIMG}
          />
        </Grid>

        <Grid item xs={12} md={5} lg={5}>
          <div className={classes.details}>
            <Typography variant="h3" gutterBottom className={classes.title}>
              <div className={classes.textTitle}>{service.serviceName}</div>
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={`${classes.subtitle} ${classes.textLimit}`}
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

        <Grid
          item
          xs={7}
          className={`${classes.noOverflow} ${classes.menuRightWrap}`}
        >
          <div className={classes.skewed}>
            <div className={classes.skewedSVG}>
              <img
                src={service.servicesIMG}
                className={classes.servicesSVG}
                alt={service.servicesIMG}
              />
            </div>
            <div className={classes.skewedContent}>
              <List className={classes.menuRight}>{serviceList}</List>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={classes.skewBG}>
        <img
          src={service.servicesBgIMG}
          className={classes.skewIMG}
          alt="skewIMG"
        />
      </div>

      <div className={classes.circularbg}></div>
      <div className={classes.circularbg2}></div>
    </div>
  )
}

export default Services
