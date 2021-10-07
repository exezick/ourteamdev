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
import useServiceHook from '../../hooks/services/useServiceHook'
import { Fade, Zoom } from 'react-awesome-reveal'

function Services(props) {
  const classes = useStyles()

  const [service, , selectServiceOnChange, selectServiceOnClick] =
    useServiceHook()

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
            <Fade delay={1000} duration={2000} cascade triggerOnce>
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
            </Fade>
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

      <Fade duration={1500} triggerOnce>
        <div className={classes.RightMenuMobile} align="center">
          {serviceListMobile}
        </div>
      </Fade>

      <Fade
        direction="right"
        delay={1000}
        duration={1000}
        className={classes.zindex}
        triggerOnce
      >
        <Grid container spacing={0} className={classes.zindex}>
          <Grid item xs={12} className={classes.mobileSVGImage}>
            <Zoom delay={1000} duration={1300} triggerOnce>
              <img
                src={service.servicesIMG}
                className={classes.servicesSVGmobile}
                alt={service.servicesIMG}
              />
            </Zoom>
          </Grid>

          <Grid item xs={12} md={5} lg={5}>
            <Fade delay={1500} duration={1000} triggerOnce>
              <div className={classes.details}>
                <Fade delay={2000} cascade duration={1000} triggerOnce>
                  <Typography
                    variant="h3"
                    gutterBottom
                    className={classes.title}
                  >
                    <div className={classes.textTitle}>
                      {service.serviceName}
                    </div>
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
                </Fade>
              </div>
            </Fade>
          </Grid>

          <Grid
            item
            xs={7}
            className={`${classes.noOverflow} ${classes.menuRightWrap}`}
          >
            <div className={classes.skewed}>
              <Fade delay={1200} duration={1000} cascade triggerOnce>
                <Fade direction="left" delay={1200} duration={1300} triggerOnce>
                  <div className={classes.skewedSVG}>
                    <Zoom delay={1600} duration={2000} triggerOnce>
                      <img
                        src={service.servicesIMG}
                        className={classes.servicesSVG}
                        alt={service.servicesIMG}
                      />
                    </Zoom>
                  </div>
                </Fade>

                <div className={classes.skewedContent}>
                  <List className={classes.menuRight}>{serviceList}</List>
                </div>
              </Fade>
            </div>
          </Grid>
        </Grid>
      </Fade>

      <Fade direction="right" delay={1300} duration={1000} triggerOnce>
        <div className={classes.skewBG}>
          <img
            src={service.servicesBgIMG}
            className={classes.skewIMG}
            alt="skewIMG"
          />
        </div>
      </Fade>
      <Fade cascade duration={2000} delay={2500} triggerOnce>
        <div className={classes.circularbg}></div>
        <div className={classes.circularbg2}></div>
      </Fade>
    </div>
  )
}

export default Services
