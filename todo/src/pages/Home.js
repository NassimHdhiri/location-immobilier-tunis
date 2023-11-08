import React from 'react'
import HeroSection from '../component/HeroSection'
import FeaturedPropterties from '../component/FeaturedPropterties.js'
import FAQ from '../component/FAQ'
import ContactUs from '../component/ContactUs'
import Aboutus from '../component/Aboutus'
import Footer from '../component/Footer'
import CTA from '../component/CTA'
import Login from '../component/Login'
import Testimonials from '../component/Testimonials'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <>
        <Helmet>
            <title>Kariya Tn - Home</title>
        </Helmet>
      <HeroSection/>
      <FeaturedPropterties/>
      <FAQ/>
      <Testimonials/>
      <Aboutus/>
      <CTA/>
      <ContactUs/>
      <Footer/>  
    </>
  )
}

export default Home