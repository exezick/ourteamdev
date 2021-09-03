import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import LogoSVG from '../../assets/logo.svg'
import Box from '@material-ui/core/Box'
import useStyles from '../../styles/Footer.style'
import socialButtonColors from '../../data/Footer.social.icons'
import { Rotate, Fade } from 'react-awesome-reveal'

function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Fade duration={1000}>
          <Typography variant="h6" gutterBottom>
            <Link to="/">
              <Fade direction="up" delay={100} duration={800}>
                <img src={LogoSVG} className={classes.LogoSVG} alt={LogoSVG} />
              </Fade>
            </Link>
          </Typography>
          <Typography variant="subtitle1" align="left">
            <Fade direction="up" delay={200} duration={1100}>
              <div className={classes.description}>
                We build and design websites and mobile apps.
              </div>
            </Fade>
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            className={classes.social}
          >
            {socialButtonColors.map((social) => (
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.socialLink}
                key={social.id}
              >
                <Box
                  display="inline-block"
                  marginRight="1.5rem"
                  marginLeft="1.5rem"
                  marginBottom="1rem"
                  align="center"
                  className={classes.socialCircle}
                  style={{ background: `${social.color}` }}
                >
                  <Rotate direction="left" duration={1000}>
                    <div className={classes.icon}>{social.icon}</div>
                  </Rotate>
                </Box>
              </a>
            ))}
          </Typography>

          <Fade direction="up" duration={1000}>
            <Typography
              variant="subtitle1"
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
          </Fade>
        </Fade>
      </Container>
    </footer>
  )
}

export default Footer
