import React from 'react'
import BlogBanner from '../../components/blog/BlogBanner'
import BlogContent from '../../components/blog/BlogContent'
import FadeInFuntion from '../../animation/FadeIn'

function Blog() {
  return (
    <div>
      <FadeInFuntion duration={1000}>
        <BlogBanner />
        <BlogContent />
      </FadeInFuntion>
    </div>
  )
}

export default Blog
