import React from 'react'
import Image from '../images/home_.png'
import CatchyHeadline from '../component/CatchyHeadline.js'
import SearchBar from '../component/SearchBar.js'
import Statics from '../component/Statics.js'

function HeroSection() {
  return (
    <div className='w-full h-screen min-w-full  max-w-screen-2xl max-h-screen mt-bg-no-repeat top-0 bg-cover shadow-lg ' style={{backgroundImage:`url(${Image})`}}>
        <CatchyHeadline/>
        <SearchBar/>
        <Statics/>
    </div>
  )
}

export default HeroSection