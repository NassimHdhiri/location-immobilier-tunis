import React from 'react'
import Sidebar from '../owner/Sidebar'
import SavedHouses from './SavedHouses'

function DashRetailer() {
  return (
    <div className='flex  bg-white'>
        <Sidebar role={2}/>
            <div className='add-new-prop  m-auto  h-screen w-[90%] pt-8 gap-8'>
                <div className="w-[80%] min-h-[90%] max-h-[94%] overflow-y-auto m-auto p-20 pt-0 rounded-2xl border border-blue-300 shadow-indigo-300 shadow-lg">
                    <h2 className='font-semibold text-3xl z-50 pt-6 pb-3 -ml-5 fixed block  w-[75%] bg-white '>Favorite Properties</h2>
                    <SavedHouses/>
                </div>
            </div>
    </div>
  )
}

export default DashRetailer