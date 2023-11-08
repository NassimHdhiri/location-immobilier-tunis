import React, { useEffect, useState } from 'react'
import Image from '../../../images/small-logo.jpg'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { IoSettingsOutline } from 'react-icons/io5';
import { PiChats } from "react-icons/pi";
import { LuEdit } from 'react-icons/lu';
import { BsBuilding, BsBuildings, BsHouseAdd, BsBuildingAdd } from 'react-icons/bs';
import {RiEditBoxFill} from 'react-icons/ri'
import {AiFillEdit} from 'react-icons/ai'
import {BiBookBookmark, BiEdit, BiLogOut} from 'react-icons/bi'
import ToggleBtnModeNight from './ToggleBtnModeNight';

import { useDispatch, useSelector } from 'react-redux';
import { handleIsDisplayedLogoutDialogue } from '../../../store/dashOwner';


function Sidebar(props) {
    const [open,setOpen]=useState(false);

    const dispatch = useDispatch();

    const params = useParams();

    const location = useLocation();


return (
    <div className={`relative  ${(open)?'w-52':'w-20'} h-screen select-none bg-blue-600 duration-150 rounded-r-xl  `}>
        <div className={`absolute z-30 select-none -right-3 top-20 hover:cursor-pointer ${(!open)?'rotate-180':''}`} onClick={()=>{setOpen(!open)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width={32} viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}} xmlSpace="preserve"><circle style={{fill:"#f7b239"}} cx="255.998" cy="255.998" r="245.419"/><path style={{fill:"#e09b2d"}} d="M122.901 82.46c42.77-42.776 97.406-66.443 153.315-71.037-69.364-5.7-140.688 17.967-193.75 71.037-95.846 95.846-95.846 251.23 0 347.076 53.061 53.07 124.385 76.737 193.751 71.037-55.909-4.594-110.545-28.261-153.315-71.037-95.847-95.846-95.847-251.23-.001-347.076z"/><path d="M305.333 403.193a10.543 10.543 0 0 1-7.48-3.099L161.238 263.479c-4.131-4.131-4.131-10.83 0-14.96l136.614-136.614c4.131-4.131 10.83-4.131 14.96 0 4.131 4.131 4.131 10.83 0 14.96L183.678 255.999l129.134 129.134c4.131 4.131 4.131 10.83 0 14.96a10.535 10.535 0 0 1-7.479 3.1z"/><path d="M255.999 512c-68.38 0-132.668-26.629-181.018-74.981C26.628 388.666 0 324.379 0 255.999S26.628 123.333 74.981 74.981C123.333 26.628 187.619 0 255.999 0c68.381 0 132.668 26.628 181.02 74.981C485.371 123.333 512 187.619 512 255.999s-26.628 132.666-74.981 181.018C388.667 485.371 324.381 512 255.999 512zm0-490.842c-62.728 0-121.702 24.428-166.058 68.783-91.565 91.565-91.565 240.551 0 332.116 44.356 44.356 103.33 68.785 166.058 68.785 62.729 0 121.702-24.428 166.059-68.785 91.565-91.565 91.565-240.551 0-332.116-44.356-44.355-103.329-68.783-166.059-68.783z"/></svg>
        </div>
        <div className='absolute z-20 w-36  flex gap-5  items-center ml-5 pt-8' >
            <Link to='/' className='border-2 border-gray-400 bg-white p-1 rounded-lg'>
                    <img src={Image} width={40} alt='small-logo' className=''/>
            </Link>
            <span className='text-2xl font-mono text-white '>Kariya</span>
        </div>

        {/* if role 1 -- means owner */}
        { (props.role===1)&& 
        <ul className='absolute z-20 w-56  top-52 flex flex-col text-white  m-1 left-1 pr-5 gap-4'>
            <li className= {`${(location.pathname.includes('dash-owner')&&!location.pathname.includes('add-new-props')&&!location.pathname.includes('settings'))?'border-l-amber-600 border-l-4 -ml-2':''}`}>
                <Link to={`/dash-owner/${params.id}`}className='flex gap-8 items-center  p-3 pl-4 duration-75 hover:cursor-pointer hover:translate-x-1 ' >
                    <BsBuildings className='text-3xl  '/>
                    All properties
                </Link>
                
            </li>
            <li className= {`${(location.pathname.includes('add-new-props'))?'border-l-amber-600 border-l-4 -ml-2':''}`}>
                <Link to={`/dash-owner/${params.id}/add-new-props`} className='flex  gap-8 pl-4 items-center  p-3 duration-75 hover:translate-x-1'>
                    <BsBuildingAdd className='text-3xl'/>
                    Add New Prop
                </Link>
                
            </li>
            
            <li className='flex  gap-8 items-center  duration-100 p-3 hover:cursor-pointer hover:translate-x-1'>
                <PiChats className='text-3xl '/>
                Chats
            </li >
            <li className= {`${(location.pathname.includes('settings'))?'border-l-amber-600 border-l-4 -ml-2':''}`}>
                <Link to={`/dash-owner/${params.id}/settings`} className='flex  gap-8 pl-4 items-center duration-100 p-3 hover:cursor-pointer hover:translate-x-1'>
                    <IoSettingsOutline className='text-3xl '/>
                    Settings 
                </Link>
            </li>
        </ul>
        }
        {/* if role 1 -- means owner */}
        { (props.role===2)&& 
        <ul className='absolute z-20 w-56  top-52 flex flex-col text-white  m-1 left-1 pr-5 gap-4'>
            <li className={`${(location.pathname.includes('dash-retailer')&&!location.pathname.includes('chats')&&!location.pathname.includes('settings'))?'border-l-amber-600 border-l-4 -ml-2':''}`}>
                <Link to={`/dash-retailer/${params.id}`} className='flex gap-8 items-center  p-3 duration-75 hover:cursor-pointer hover:translate-x-1 ' >
                    <BiBookBookmark className='text-3xl ml-1 '/>
                    Saved Properties
                </Link>
                
            </li>
            {/* to={`/dash-retailer/${params.id}/chats`} */}
            <li className= {`${(location.pathname.includes('chats'))?'border-l-amber-600 border-l-4 -ml-2':''}`}>
                <Link  className='flex gap-8 items-center  p-3 duration-75 hover:cursor-pointer hover:translate-x-1 '>
                    <PiChats className='text-3xl ml-1'/>
                    Chats
                </Link>
            </li>
            <li className= {`${(location.pathname.includes('settings'))?'border-l-amber-600 border-l-4 -ml-2':''}`}>
                <Link to={`/dash-retailer/${params.id}/settings`} className='flex  gap-8 items-center duration-100 p-3 hover:cursor-pointer hover:translate-x-1'>
                    <IoSettingsOutline className='text-3xl ml-1'/>
                    Settings 
                </Link>
            </li>
          
            
        </ul>
        }

        <div  onClick={()=>dispatch(handleIsDisplayedLogoutDialogue(true))}  className='absolute flex w-56  hover:translate-x-1 hover:cursor-pointer  duration-75 gap-8 items-center text-white bottom-20  m-1 left-4 pr-5'>
            <BiLogOut className='text-3xl  '/>
            Log out
        </div>
        <div className='absolute flex  gap-5 items-center bottom-5 left-4 z-40 w-56 text-white' >
            <ToggleBtnModeNight/>
            Mode night
        </div>
    </div>
  )
}

export default Sidebar