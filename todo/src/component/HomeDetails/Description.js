import React from 'react'

function Description(props) {
  return (
    <div className='w-full p-16 pt-9 pb-0'>
        <h1 className='  font-semibold text-lg pb-2'>Description</h1>
        <hr/>
        <p className=' p-6 pb-0 pt-2  text-justify text-base'>
            {props.data}
        </p>
    </div>
  )
}

export default Description