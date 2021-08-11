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

function Services() {
  const classes = useStyles()

  return (
    <div className={classes.root} align="center">
      <div className={classes.titlemain} align="center">
        <h1 className={classes.titleText}>SERVICES</h1>
        <div className={classes.titleBar}></div>
        <div className={classes.continue}></div>
      </div>

      <Grid container spacing={0} className={classes.zindex}>
        <Grid item xs={5}>
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
        <Grid item xs={7} className={classes.noOverflow}>
          <div className={classes.skewed}>
            <div className={classes.skewedSVG}>
              <img
                src={ServicesWebDevSVG}
                className={classes.servicesSVG}
                alt={ServicesWebDevSVG}
              />
            </div>
            <div className={classes.skewedContent}>
              <List className={classes.menuRight}>
                <ListItem key="1" dense button>
                  <ListItemText id="1" primary="Web Development" />
                  <ListItemSecondaryAction>
                    <Radio value="1" name="1" className={classes.radiobtn} />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem key="2" dense button>
                  <ListItemText id="2" primary="Web Design" />
                  <ListItemSecondaryAction>
                    <Radio value="2" name="2" className={classes.radiobtn} />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem key="3" dense button>
                  <ListItemText id="3" primary="Mobile App Development" />
                  <ListItemSecondaryAction>
                    <Radio value="3" name="3" className={classes.radiobtn} />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem key="4" dense button>
                  <ListItemText id="4" primary="Api Development" />
                  <ListItemSecondaryAction>
                    <Radio value="4" name="4" className={classes.radiobtn} />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem key="5" dense button>
                  <ListItemText id="5" primary="Ecommerce" />
                  <ListItemSecondaryAction>
                    <Radio value="5" name="5" className={classes.radiobtn} />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem key="6" dense button>
                  <ListItemText id="6" primary="Payment Integration" />
                  <ListItemSecondaryAction>
                    <Radio value="6" name="6" className={classes.radiobtn} />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem key="7" dense button>
                  <ListItemText id="7" primary="SEO Integration" />
                  <ListItemSecondaryAction>
                    <Radio value="7" name="7" className={classes.radiobtn} />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
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
