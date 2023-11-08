import React, { useEffect } from 'react';
import { getProperties,handleIsConfirmed,handleIsDisplayed ,deleteProperties} from '../../../store/dashOwner';
import { useDispatch, useSelector } from 'react-redux';

function DeleteConfirmation() {
  
  const dispatch = useDispatch();
  const {isConfirmed,isDisplayed,idDeletedProperty}=useSelector((state) =>state.dashOwner )

  // useEffect(()=>{

  // },[isConfirmed])
  const handleDltConfirmed=(res)=>{
    dispatch(handleIsDisplayed(false))
    dispatch(deleteProperties(idDeletedProperty))
    }

    const handleDltNoConfirmed=(res)=>{
      dispatch(handleIsDisplayed(false))
      }
   

  return (
    <div className=' absolute top-0 left-0 h-screen z-50 w-screen bg-slate-500 bg-opacity-75'>
   
        <div className="absolute top-[38%] left-[38%] ">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            
            <div className="p-6 text-center">
              <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
              <button onClick={()=>handleDltConfirmed(true)} data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                Yes, I'm sure
              </button>
              <button onClick={()=>handleDltNoConfirmed(false)} data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default DeleteConfirmation;
