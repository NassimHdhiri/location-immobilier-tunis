import React from 'react'

function Maps() {
  return (
    <div className='w-full p-16 pt-9 pb-0 '>
        <h1 className='  font-semibold text-lg pb-2'>Maps</h1>
        <hr className='w-full '/>
        <img className="pt-5 rounded-xl w-[85%] m-auto " src={process.env.PUBLIC_URL+'/maps.PNG'} alt='maps'/>
    </div>
  )
}

export default Maps