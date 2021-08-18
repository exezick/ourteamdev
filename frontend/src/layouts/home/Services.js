import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Radio from '@material-ui/core/Radio'
import ServicesWebDevSVG from '../../assets/svg/services/webdev.svg'
import useStyles from '../../styles/home/Services.style'
import ServicesData from '../../data/Services.list'

function Services(props) {
  const classes = useStyles()

  const serviceList = () => (
    <div>
      {ServicesData.map((service) => (
        <ListItem key={service.id} dense button>
          <ListItemText
            id={service.id}
            primary={service.serviceName}
            className={classes.menuText}
          />
          <ListItemSecondaryAction>
            <Radio
              value={service.id}
              name="serviceName"
              className={classes.radiobtn}
            />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </div>
  )

  const serviceListMobile = () => (
    <div>
      {ServicesData.map((service) => (
        <Radio
          key={service.id}
          value={service.id}
          name="serviceName"
          className={`${classes.radiobtn} ${classes.radiobtnRightMobile}`}
        />
      ))}
    </div>
  )

  return (
    <div className={classes.root} align="center">
      <div className={classes.titlemain} align="center">
        <h1 className={classes.titleText}>SERVICES</h1>
        <div className={classes.titleBar}></div>
        <div className={classes.continue}></div>
      </div>

      <div className={classes.RightMenuMobile} align="center">
        {serviceListMobile()}
      </div>

      <Grid container spacing={0} className={classes.zindex}>
        <Grid item xs={12} className={classes.mobileSVGImage}>
          <img
            src={ServicesWebDevSVG}
            className={classes.servicesSVGmobile}
            alt={ServicesWebDevSVG}
          />
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <div className={classes.details}>
            <Typography variant="h3" gutterBottom className={classes.title}>
              <div className={classes.textTitle}>Web Development</div>
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.subtitle}
            >
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Nulla interdum, tortor id viverra
              scelerisque, est sem rhoncus massa, a tempus turpis augue sed
              justo.
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
                src={ServicesWebDevSVG}
                className={classes.servicesSVG}
                alt={ServicesWebDevSVG}
              />
            </div>
            <div className={classes.skewedContent}>
              <List className={classes.menuRight}>{serviceList()}</List>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={classes.skewBG}>
        <img
          src="https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?cs=srgb&dl=pexels-tranmautritam-251225.jpg&fm=jpg"
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
