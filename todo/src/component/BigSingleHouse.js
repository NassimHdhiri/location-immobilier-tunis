import React from 'react'
import iconHome from '../images/iconHome.png'
import {LuBedSingle} from 'react-icons/lu'
import {BsBorder} from 'react-icons/bs'
import {TbBath} from 'react-icons/tb'
import {FiDollarSign} from 'react-icons/fi'
import {IoLocationOutline} from 'react-icons/io5'
import { GoBookmark ,GoBookmarkFill } from "react-icons/go";
import { useState } from 'react'


function SingleHouse() {
    const [checked,setChecked]=useState(false);

    const handleChecked=(e)=>{
        setChecked(checked?false:true);
    }
  return (
    <div  className='grid grid-cols-1 grid-rows-2 border-2 w-72 h-80 rounded-lg ml-[-3px] bg-white hover:cursor-pointer hover:-translate-y-3 duration-200 select-none'>
        <div className=' h-28 grid row-span-1 relative'> 
            <img src='' alt='house' className='rounded-lg h-40 w-full'/>
            {(checked ===false) 
            ? <GoBookmark className='  absolute fill-black right-3 top-2 text-2xl hover:cursor-pointer ' onClick={handleChecked}/>
            : <GoBookmarkFill className=' absolute  fill-black right-3 top-2 text-2xl hover:cursor-pointer z-50' onClick={handleChecked}/>
            }
        </div>
        <div className='grid row-span-2 mt-2'>
            <div className='flex flex-col   p-2 mb-0.5'>
                <div className='flex items-center pl-1'>
                    <FiDollarSign className='text-indigo-500'/>
                    <label className=' text-[20px] text-indigo-500'><strong>2.700</strong> <span className='text-xs text-slate-500'>per month</span></label>
                </div>
                <label className=' text-[18px] font-semibold tracking-wide pl-1'>Faulkner Ave</label>
                <div className='flex gap-1 items-center pl-1'>
                    <label className='text-xs text-slate-500' >909 Woodland ST,Michigan, IN</label>    
                </div>
            </div>
            <div className='grid  grid-cols-3 border-t-slate-300 border-t-2 justify-center items-center  h-10  '>
                <div className=' flex inline-flex   items-center gap-1 pl-1 w-20' >
                    <LuBedSingle className=' text-lg text-indigo-500' />
                    <label className=' text-[10px]'>3 Bedroom</label>
                </div>
                <div  className=' flex inline-flex items-center pl-2 gap-1 w-24'>
                    <TbBath className=' text-lg text-indigo-500'  />
                    <label className=' text-[10px]'>2 Bathroom</label>
                </div>
                <div  className=' flex inline-flex  items-center gap-2 ml-5'>
                    <BsBorder  className=' text-lg text-indigo-500' />
                    <label className=' text-[10px]'>80 m</label>
                </div>
            </div>
        </div>
    </div>
)
}

export default SingleHouse