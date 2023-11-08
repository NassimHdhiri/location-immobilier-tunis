import React from 'react'

function Price(props) {
  return (
    <div className='  bg-[#00B4D8] w-[15%] rounded-lg m-auto mt-0 mb-0'>
        <p className=' p-4 text-center'><span className=' font-semibold text-lg text-white'>{props.data} TND </span> <span> / M</span></p>
    </div>
  )
}

export default Price