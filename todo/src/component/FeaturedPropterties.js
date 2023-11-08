import React from 'react'
import SingleHouse from './SingleHouse'
import Slide from './Slide'

function FeaturedPropterties() {
  return (
    <div className='h-[500px] border-b-2 shadow-lg bg-slate-300 relative'>
        <h2 className='text-[35px] flex justify-center pt-10 font-semibold italic font-mono'>Newest Properties</h2>
        <div className='bg-black h-36 absolute w-full bottom-0'>a</div>
        <Slide/>
    </div>
  )
}

export default FeaturedPropterties