import React from 'react'
import LandingNav from '@/components/landingPage/LandingNav'
import LandingHero from '@/components/landingPage/LandingHero'
import DashboardPreview from '@/components/landingPage/DashboardPreview'
import LandingFeatures from '@/components/landingPage/LandingFeatures'
import LandingFooter from '@/components/landingPage/LandingFooter'

const page = () => {
  return (
    <div>
      <LandingNav/>
      <LandingHero/>
      <DashboardPreview/>
      <LandingFeatures/>
      <LandingFooter/>
    </div>
  )
}

export default page
