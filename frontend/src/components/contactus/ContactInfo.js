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

const useStyles = makeStyles(() =>
  createStyles({
    avatar: {
      width: 70,
      height: 70,
      background: 'rgba(185,24,171,0.9)',
    },
    iconSize: {
      width: 40,
      height: 40,
      color: 'rgba(255,255,255,0.8)',
    },
    contactText: {
      color: '#fff',
      marginLeft: 25,
    },
    centered: {
      margin: '0px auto',
      width: '400px',
      marginBottom: 40,
    },
  }),
)

function ContactInfo() {
  const classes = useStyles()

  return (
    <div>
      <List>
        <ListItem className={classes.centered}>
          <ListItemAvatar>
            <Avatar className={classes.avatar} boxShadow={2}>
              <EmailIcon className={classes.iconSize} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography style={{ color: 'white', fontSize: 22 }}>
                ourteamdev@gmail.com
              </Typography>
            }
            secondary={
              <Typography style={{ color: '#e4e2e2' }}>
                Email Address
              </Typography>
            }
            className={classes.contactText}
          />
        </ListItem>

        <ListItem className={classes.centered}>
          <ListItemAvatar>
            <Avatar className={classes.avatar} boxShadow={2}>
              <PhoneIcon className={classes.iconSize} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography style={{ color: 'white', fontSize: 22 }}>
                09091234567
              </Typography>
            }
            secondary={
              <Typography style={{ color: '#e4e2e2' }}>
                Contact Number
              </Typography>
            }
            className={classes.contactText}
          />
        </ListItem>

        <ListItem className={classes.centered}>
          <ListItemAvatar>
            <Avatar className={classes.avatar} boxShadow={2}>
              <LocationOnIcon className={classes.iconSize} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography style={{ color: 'white', fontSize: 22 }}>
                Legazpi, City
              </Typography>
            }
            secondary={
              <Typography style={{ color: '#e4e2e2' }}>Address</Typography>
            }
            className={classes.contactText}
          />
        </ListItem>
      </List>
    </div>
  )
}

export default ContactInfo
