import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from '@material-ui/icons/AccountCircle'
import EmailIcon from '@material-ui/icons/Email'
import LiveHelpIcon from '@material-ui/icons/LiveHelp'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import { Fade } from 'react-awesome-reveal'

const useStyles = makeStyles((theme) =>
  createStyles({
    margin: {
      width: '65%',
      background: '#3C065E !important',
      justifyContent: 'center',
      paddingBottom: 30,
      paddingTop: 20,
      [theme.breakpoints.down('sm')]: {
        width: '80%',
      },
      [theme.breakpoints.only('md')]: {
        width: '90%',
      },
    },
    textfieldFont: {
      color: 'rgba(255,255,255,0.8)',
      borderRadius: '0px',
    },

    textfieldLabel: {
      color: 'rgba(255,255,255,0.8) !important',
      background: '#3C065E',
      paddingLeft: 7,
      paddingRight: 7,
    },
    buttonsend: {
      marginTop: 20,
      borderRadius: 0,
      background: '#B918AB',
      color: '#fff',
    },
    centered: {
      margin: 'auto 0px',
      justifyContent: 'center',
    },
  }),
)

function CotactUsform() {
  const classes = useStyles()

  return (
    <div align="center">
      <FormControl className={classes.margin}>
        <Fade duration={2000} triggerOnce>
          <Grid container spacing={0} className={classes.centered}>
            <Grid item xs={10}>
              <TextField
                id="name"
                name="name"
                label="Full Name"
                placeholder="Enter your full name"
                margin="normal"
                required
                fullWidth
                variant="outlined"
                className="cotactInput"
                InputProps={{
                  className: classes.textfieldFont,
                  endAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  className: classes.textfieldLabel,
                }}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                id="email"
                name="email"
                label="Email"
                placeholder="Enter your email"
                margin="normal"
                required
                fullWidth
                variant="outlined"
                className="cotactInput"
                InputProps={{
                  className: classes.textfieldFont,
                  endAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  className: classes.textfieldLabel,
                }}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                id="subject"
                name="subject"
                label="Subject"
                placeholder="Enter subject"
                margin="normal"
                required
                fullWidth
                variant="outlined"
                className="cotactInput"
                InputProps={{
                  className: classes.textfieldFont,
                  endAdornment: (
                    <InputAdornment position="start">
                      <LiveHelpIcon />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  className: classes.textfieldLabel,
                }}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                id="message"
                name="message"
                label="Message"
                placeholder="Enter message"
                margin="normal"
                required
                fullWidth
                variant="outlined"
                className="cotactInput"
                multiline
                rows={3}
                InputProps={{
                  className: classes.textfieldFont,
                }}
                InputLabelProps={{
                  className: classes.textfieldLabel,
                }}
              />
            </Grid>

            <Grid item xs={10}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                className={`${classes.buttonsend} buttonsend`}
                endIcon={<SendIcon />}
                disableElevation
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Fade>
      </FormControl>
    </div>
  )
}

export default CotactUsform
