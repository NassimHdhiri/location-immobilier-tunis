import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LogoutConfirmation from '../../component/dashboards/owner/LogoutConfirmation';
import { useDispatch, useSelector } from 'react-redux';
import { handleIsDisplayedLogoutDialogue } from '../../store/dashOwner';


function Dropdown(props) {
    const [open,setOpen]=useState(false);
    const {isDisplayedLogoutDialogue}=useSelector((state)=>state.dashOwner)
    const dispatch=useDispatch();
    const handleOpen=()=>{
        setOpen(!open)
    }

  return (
    <>
    <div className='mt-5 mr-7'>
        
        <button onClick={handleOpen} id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm font-medium border text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4   dark:focus:ring-gray-700 dark:text-white" type="button">
            <span  className="sr-only">Open user menu</span>
            <img  className="w-8 h-8 mr-2 rounded-full" src={process.env.PUBLIC_URL+'/userImages/nassim-small.jpg'} alt="user"/>
                {props.userDetails.firstName+' '+props.userDetails.lastName}
            <svg  className="w-2.5 h-2.5 ml-2.5 rotate-180 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>

        {/* <!-- Dropdown menu --> */}
        <div id="dropdownAvatarName" className={`z-10 ${(open)?'':'hidden'} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 translate-y-5 duration-75`}>
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div className="truncate">{props.userDetails.email}</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                <li>
                        {(props.userDetails.role==='owner') 
                            ?
                            <Link to={`/dash-owner/${props.userDetails.id}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                            :
                            <Link to={`/dash-retailer/${props.userDetails.id}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                        }                
                </li>
                <li>
                        {(props.userDetails.role==='owner') 
                            ?
                            <Link to={`/dash-owner/${props.userDetails.id}/settings`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                            :
                            <Link to={`/dash-retailer/${props.userDetails.id}/settings`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                        }   
                </li>
            </ul>
            <div  onClick={()=>dispatch(handleIsDisplayedLogoutDialogue(true))}  className="py-2">
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
            </div>
        </div>
    </div>
        {(isDisplayedLogoutDialogue) &&  <LogoutConfirmation/>}
    </>
  )
}

export default Dropdown