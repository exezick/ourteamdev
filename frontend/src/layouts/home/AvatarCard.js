import React from 'react'
import useStyles from '../../styles/home/OurTeam.style'
import { Rotate, Fade, Zoom } from 'react-awesome-reveal'

function AvatarCard({ avatar }) {
  const classes = useStyles()

  return (
    <div>
      <Rotate delay={1000} duration={2000} triggerOnce>
        <Zoom delay={1000} duration={2000} triggerOnce>
          <div className={classes.avatarCircMain}>
            <Fade
              delay={1000}
              duration={1500}
              className={classes.avatarIMGzIndex}
              triggerOnce
            >
              <img
                src={avatar.avatarIMG}
                alt={avatar.id}
                className={classes.avatarIMG}
                style={{ border: `3px solid ${avatar.avatarColor}` }}
              />
            </Fade>

            <Rotate
              direction="top-left"
              delay={2500}
              duration={2000}
              triggerOnce
            >
              <div
                className={classes.avatarShapesLeft}
                style={{ background: `${avatar.avatarColor}` }}
              ></div>
            </Rotate>

            <Rotate
              direction="bottom-right"
              delay={2500}
              duration={2000}
              triggerOnce
            >
              <div
                className={classes.avatarShapesRight}
                style={{ background: `${avatar.avatarColor}` }}
              ></div>
            </Rotate>
            <Rotate
              cascade
              duration={1000}
              delay={1300}
              className={classes.dotIndex}
              triggerOnce
            >
              <div
                className={classes.avatarSmallCircL}
                style={{ background: `${avatar.avatarColor}` }}
              ></div>
              <div
                className={classes.avatarSmallCircR}
                style={{ background: `${avatar.avatarColor}` }}
              ></div>
            </Rotate>
          </div>
        </Zoom>
      </Rotate>

      <div className={classes.avatarText}>
        <Fade cascade delay={2100} duration={1800} triggerOnce>
          <div className={classes.avatarName}>{avatar.avatarName}</div>
          <div className={classes.avatarPosition}>{avatar.avatarPosition}</div>
        </Fade>
      </div>
    </div>
  )
}

export default AvatarCard
