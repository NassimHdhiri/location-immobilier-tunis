import React from 'react'
import Stepper from './Stepper'
import Sidebar from './Sidebar'


function PropertyDetails() {
  return (
    <div className='flex   bg-white'>
        <Sidebar/>
     
        <div className='add-new-prop m-auto h-screen  w-[90%] pt-8 gap-8'>
        <div className='w-[90%]  max-h-[94%] overflow-y-auto  m-auto  p-20 pt-0  rounded-2xl border border-blue-300 shadow-indigo-300 shadow-lg'>
    <Stepper level={2}/>
    <form action="#" className='z-50  overflow-y-auto  mt-20'>
        <fieldset className='border p-5 text-center rounded-lg mt-3'>
            <legend className='text-gray-500'>Property Information</legend>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
            
            <div>
                <label forHtml="property-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Floor</label>
                <select name='property-type' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" 'required>
                    <option>RC</option>
                    <option>1st</option>
                    <option>2nd </option>
                    <option>3rd</option>
                    <option>4th</option>
                    <option>5th</option>
                </select>
            </div>
            <div>
                <label forHtml="property-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Style</label>
                <select name='property-type' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" 'required>
                    <option>S+0</option>
                    <option>S+1</option>
                    <option>S+2 </option>
                    <option>S+3</option>
                    <option>S+4</option>
                    <option>S+5</option>
                    <option>More than 5</option>
                </select>
            </div>
            <div>
                <label forHtml="property-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bath Rooms</label>
                <select name='property-type' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" 'required>
                    <option>1</option>
                    <option>2</option>
                    <option>3 </option>
                    <option>More than 3 </option>
                </select>
            </div>
            <div>
                <label forHtml="property-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Space</label>
                <input type='number' placeholder='XX m² 'className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   required/>
            </div>
        </div>
    </fieldset>
    <fieldset className='border p-5 text-center rounded-lg mt-3'>
        <legend>Amenities</legend>
    </fieldset>
    <div>
        
    </div>
        <button type="submit" className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Next Step: Pricing
        </button>
    </form>    
</div>        </div>
       
    </div>
    
)
}

export default PropertyDetails