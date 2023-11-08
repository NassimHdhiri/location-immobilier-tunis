import React, { useState } from 'react'
import { VscSignOut } from "react-icons/vsc";
import { handleIsConfirmedLogout,handleIsDisplayedLogoutDialogue} from '../../../store/dashOwner'
import { handleIsAuthenticated} from '../../../store/auth'

import { useDispatch } from 'react-redux';
import {signOut} from 'firebase/auth'
import {auth} from '../../../auth/config'
import { useNavigate } from 'react-router-dom';

function LogoutConfirmation() {

    const dispatch=useDispatch();

    const [confirmed, setConfirmed] = useState(false); // Add local state for confirmation

    const navigate  = useNavigate();

    const   handleDisplayDialogue=() => {
        dispatch(handleIsDisplayedLogoutDialogue(false));
    }

    const handleConfirmed=()=>{

              // The user has confirmed logout, so sign them out
              signOut(auth)
                .then(async () => {
                  // Reset the isConfirmedLogout state to false after successful logout
                  dispatch(handleIsConfirmedLogout(false));
                  await dispatch(handleIsAuthenticated(false));
                    navigate("/login");
                    console.log('Sign out Successfully !!!');
                  
                  
                })
                .catch((error) => {
                  console.error('Sign out error:', error);
                });
            
        dispatch(handleIsDisplayedLogoutDialogue(false));
    }



  return (
    <div className=' absolute left-0 top-0 z-50  w-full h-screen bg-black bg-opacity-40   p-60 pl-[35%]'>
{/* <!-- Main modal --> */}
        <div id="deleteModal" tabIndex="-1" aria-hidden="true" className="  overflow-y-auto overflow-x-hidden   z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <button onClick={handleDisplayDialogue} type="button" className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>

                    <VscSignOut className="text-gray-400 dark:text-gray-500 w-14 h-14 mb-3.5 mx-auto fill-orange-300"/>

                    <p className="mb-4 text-gray-500 dark:text-gray-300 ">Are you sure you want to leave your account ?</p>
                    <div className="flex justify-center items-center space-x-4">
                        <button onClick={handleDisplayDialogue} data-modal-toggle="deleteModal" type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            No, cancel
                        </button>
                        <button onClick={handleConfirmed}type="submit" className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                            Yes, I'm sure
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogoutConfirmation