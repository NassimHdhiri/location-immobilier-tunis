import React from 'react'
import SingleHouse from '../SingleHouse'

function SuggestedProperties() {
  return (
    <div className='w-full p-16 pb-2'>
          <h2 className="text-lg font-semibold mb-2">Suggested Properties</h2>
          <hr className='pb-3'/>
          <div className='flex gap-4 justify-center'>
                <div className='p-12 border-2 '>
                    House 1
                </div>  
                <div className='p-12 border-2 '>
                    House 2
                </div> 
                <div className='p-12 border-2 '>
                    House 3
                </div> 
                <div className='p-12 border-2 '>
                    House 4
                </div> 
          </div>
        </div>
  )
}

export default SuggestedProperties

