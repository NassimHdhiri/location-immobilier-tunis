import React, { useState } from 'react'
import {  useDispatch } from 'react-redux';

import AvatarDefault from '../dashboards/owner/AvatarDefault'
import { BsFacebook, BsFillChatFill, BsFillPhoneFill } from 'react-icons/bs'
import { IoChevronDownOutline ,IoChevronUpOutline} from 'react-icons/io5';
import {handleDisplayPhone } from '../../store/DetailsProperties'


function Contact(props) {
    const [open,setOpen]=useState(false);

    const dispatch=useDispatch();

  return (
    <div>
        <div className='w-full flex flex-col  items-center gap-5    bg-blue-200 pt-5 pb-3 rounded-t-lg'>
            <span className='rounded-full border-2 border-blue-400 p-2'>
                <img className='w-20 h-20 rounded-full' src={process.env.PUBLIC_URL+'/userImages/nassim-small.jpg'} alt='user'/>
            </span>
            <span className=' font-semibold text-base'>{props.userInfos.firstName+" "+props.userInfos.lastName}</span>
            

            <button className=' shadow-lg flex items-center justify-center relative  w-64 p-2 rounded-md border-2  ' onClick={()=>setOpen(!open)}>
                Contact Me
                {(!open)?<IoChevronDownOutline className=' text-lg absolute right-10'/>:<IoChevronUpOutline className=' absolute right-10'/>}     
            </button>


            <div className={`flex flex-col justify-around w-full p-2 pb-6 gap-5 duration-75 transition-all ${(!open)&& 'hidden'}`} > 
                <button className=' flex  justify-center items-center gap-3 p-2 pl-3 pr-3 bg-blue-500 rounded-lg text-white'>
                    <BsFacebook/>
                    Facebook
                </button>
                
                <button className=' flex justify-center items-center gap-3 p-2 pl-3 pr-3 bg-green-500 rounded-lg text-white'>
                    <BsFillChatFill/>
                    Chats
                </button>
                
                <button onClick={()=>dispatch(handleDisplayPhone(true))} className='flex justify-center items-center gap-3 p-2 pl-3 pr-3 bg-black rounded-lg text-white'>
                    <BsFillPhoneFill/>
                    Number
                </button>
            </div>
        </div>
    </div>
)
}

export default Contact