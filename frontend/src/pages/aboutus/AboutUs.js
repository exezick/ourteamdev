import React from 'react'
import AboutBanner from '../../components/aboutus/AboutBanner'
import AboutUsContent from '../../components/aboutus/AboutUsContent'
import FadeInFuntion from '../../animation/FadeIn'

function AboutUs() {
  return (
    <div>
      <FadeInFuntion duration={1000}>
        <AboutBanner />
        <AboutUsContent />
      </FadeInFuntion>
    </div>
  )
}

export default AboutUs
