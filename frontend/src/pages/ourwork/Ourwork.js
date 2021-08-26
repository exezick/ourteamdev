import React from 'react'
import OurWorkBanner from '../../components/ourwork/OurWorkBanner'
import OurWorkContent from '../../components/ourwork/OurWorkContent'
import FadeInFuntion from '../../animation/FadeIn'

function OurWork() {
  return (
    <div>
      <FadeInFuntion duration={1000}>
        <OurWorkBanner />
        <OurWorkContent />
      </FadeInFuntion>
    </div>
  )
}

export default OurWork
