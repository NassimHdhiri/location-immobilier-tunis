import React from 'react'
// import '../CatchyHeadline.css' 
function Statics() {
  return (
    <div className='grid grid-cols-3 gap-1 w-4/12 absolute bottom-20 left-24'>
        <div className='grid col-start-1 col-end-1 justify-items-center gap-y-2'>
            <label className=' font-bold text-2xl text-[#0962ea] '>400 K +</label>
            <p className='text-lg mt-[-8px]'>Happy   customer</p>
        </div>
        <div className='grid col-start-2 col-end-2 justify-items-center'>
            <label className=' font-bold text-2xl text-[#0962ea] '>200 K +</label>
            <p className='text-lg'>Happy   customer</p>
        </div>
        <div className='grid col-start-3 col-end-3 justify-items-center'>
            <label className=' font-bold text-2xl text-[#0962ea] '>2 years</label>
            <p className='text-lg' >of  experience </p>
        </div>
    </div>
  )
}

export default Statics
