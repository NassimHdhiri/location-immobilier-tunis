import React from 'react'
import { Select, initTE } from "tw-elements";
initTE({ Select });

function TopFilterHead() {
  return (
    <div className='flex justify-around items-center'>
        <label className='text-2xl italic pl-8'>Search properties to rent </label>
        <select  id="countries" className="animated w-auto bg-gray-50 border  border-gray-300 outline-none  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 border-red block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="1">Low price</option>
          <option value="2">High price</option>
          <option value="3">Most recently</option>
          <option value="4">Most Saved</option>
                </select>
    </div>
  )
}

export default TopFilterHead