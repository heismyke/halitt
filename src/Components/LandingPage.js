import React from 'react'
import HeroSection from './HeroSection/Hero';
import Locate from './LocateUs/Location'
import Recents from './RecentApartments/Recents'
import Subhead from './Subhead/Subheading'
import SubheadTwo from './SubheadTwo/SubheadingTwo'
import Tesify from './Testimonals/Tesify';


const LandingPage = () => {
  return (
    <div>
        <HeroSection />
        <Subhead />
        <SubheadTwo />
        <Locate />
        <Recents />
        <Tesify />
        
        

    </div>
  )
}

export default LandingPage