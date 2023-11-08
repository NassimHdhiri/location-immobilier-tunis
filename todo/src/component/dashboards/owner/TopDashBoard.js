import React from 'react'
import SearchInput from './SearchInput'
import AvatarDefault from './AvatarDefault'
import { IoNotifications } from 'react-icons/io5'

function TopDashBoard() {
  return (
    <div className='flex z-30 justify-between  bg-slate-200  w-[90%] p-2 rounded-lg shadow-lg'>
        <SearchInput/>
        <div className='flex items-center gap-4'>
          <IoNotifications className='fill-gray-500  text-2xl gap-2 hover:cursor-pointer '/>
          <AvatarDefault/>
        </div>
    </div>  
  )
}

export default TopDashBoard