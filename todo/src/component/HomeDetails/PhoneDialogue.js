
import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';

import { AiOutlineClose } from 'react-icons/ai';
import {handleDisplayPhone } from '../../store/DetailsProperties'



function PhoneDialogue(props) {
    const [copied,setCopied]=useState(null);

    const dispatch=useDispatch();

  return (
    <div className='fixed top-0 left-0 h-screen z-50 w-screen flex justify-center items-center bg-slate-500 bg-opacity-75'>
  <div className="bg-white rounded-lg shadow dark:bg-gray-700 w-96">
    <div className="p-6 text-center relative pt-8" >
        <AiOutlineClose onClick={()=>dispatch(handleDisplayPhone(false))} className='absolute right-4 top-3 text-xl cursor-pointer'/>
        <img className='mx-auto mb-4 w-12 h-12' src={process.env.PUBLIC_URL + '/icons8-phone.gif'} alt="phone" />
        <h3 className="mb-5 text-2xl text-center font-normal text-gray-500 dark:text-gray-400">{`+216 ${props.userInfos.phoneNumber}`}</h3>
        <button
        onClick={() => {
          const phoneNumber = `+216 ${props.userInfos.phoneNumber}`;
          setCopied(navigator.clipboard.writeText(phoneNumber));
        }}
        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
      >
        {(copied)?"Copied":"Copy"}
      </button>
    </div>
  </div>
</div>

  );
}

export default PhoneDialogue;
