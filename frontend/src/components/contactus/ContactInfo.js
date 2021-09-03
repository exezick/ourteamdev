import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { Bounce } from 'react-awesome-reveal'

const useStyles = makeStyles((theme) =>
  createStyles({
    avatar: {
      width: 70,
      height: 70,
      background: 'rgba(185,24,171,0.9)',
      [theme.breakpoints.down('sm')]: {
        width: 50,
        height: 50,
      },
    },
    iconSize: {
      width: 40,
      height: 40,
      color: 'rgba(255,255,255,0.8)',
      [theme.breakpoints.down('sm')]: {
        width: 30,
        height: 30,
      },
    },
    contactText: {
      color: '#fff',
      marginLeft: 25,
    },
    centered: {
      margin: '0px auto',
      width: '400px',
      marginBottom: 40,
      [theme.breakpoints.down('sm')]: {
        width: '320px',
      },
    },
    contactTitle: {
      fontSize: 21,
      color: '#fff',
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
    contactPosition: {
      color: '#e4e2e2',
      fontSize: 15,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
      },
    },
  }),
)

function ContactInfo() {
  const classes = useStyles()

  return (
    <div>
      <List>
        <Bounce cascade duration={1200} triggerOnce>
          <ListItem className={classes.centered}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <EmailIcon className={classes.iconSize} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography className={classes.contactTitle}>
                  ourteamdev@gmail.com
                </Typography>
              }
              secondary={
                <Typography className={classes.contactPosition}>
                  Email Address
                </Typography>
              }
              className={classes.contactText}
            />
          </ListItem>

          <ListItem className={classes.centered}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PhoneIcon className={classes.iconSize} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography className={classes.contactTitle}>
                  09091234567
                </Typography>
              }
              secondary={
                <Typography className={classes.contactPosition}>
                  Contact Number
                </Typography>
              }
              className={classes.contactText}
            />
          </ListItem>

          <ListItem className={classes.centered}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <LocationOnIcon className={classes.iconSize} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography className={classes.contactTitle}>
                  Legazpi, Albay
                </Typography>
              }
              secondary={
                <Typography className={classes.contactPosition}>
                  Address
                </Typography>
              }
              className={classes.contactText}
            />
          </ListItem>
        </Bounce>
      </List>
    </div>
  )
}

export default ContactInfo
