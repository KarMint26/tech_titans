import { Metadata } from 'next'
import React from 'react'
import AboutPage from './AboutPage'

export const metadata: Metadata = {
  title: "ABOUT",
  description:
    "Provides IT Solutions Services for Website and Mobile Apps Development and Consulting Related to IT Products.",
}

const About = () => {
  return (
    <React.Fragment>
      <AboutPage />
    </React.Fragment>
  )
}

export default About