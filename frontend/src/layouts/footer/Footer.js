import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import LogoSVG from '../../assets/logo.svg'
import Box from '@material-ui/core/Box'
import useStyles from '../../styles/Footer.style'
import socialButtonColors from '../../data/Footer.social.icons'

function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" alignItems="center">
        <Typography variant="h6" align="left" gutterBottom>
          <Link to="/">
            <img src={LogoSVG} className={classes.LogoSVG} alt={LogoSVG} />
          </Link>
        </Typography>
        <Typography variant="subtitle1" align="left">
          <p className={classes.description}>
            {'We build and desgin websites and mobile apps.'}
          </p>
        </Typography>

        <Typography align="center" className={classes.social}>
          {socialButtonColors.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialLink}
            >
              <Box
                key={social.id}
                display="inline-block"
                marginRight="1.5rem"
                marginLeft="1.5rem"
                marginBottom="1rem"
                align="center"
                className={classes.socialCircle}
                style={{ background: `${social.color}` }}
              >
                <div className={classes.icon}>{social.icon}</div>
              </Box>
            </a>
          ))}
        </Typography>

        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          className={classes.copyright}
        >
          {'Copyright © '}
          <Link to="/" className={classes.links}>
            OurTeamDev
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer
