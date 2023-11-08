import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {handleDisplayUpdateWindow,getProperties,handleIsDisplayed,handleIdDeletedProperty } from '../../../store/dashOwner';
import DeleteConfirmation from './DeleteConfirmation';
import BasicInfos from './BasicInfos';
import LogoutConfirmation from './LogoutConfirmation';


function TableProperties() {
    //states
    
    const {rangePosts,isLoading,isDisplayed,updateShow,isDisplayedLogoutDialogue}=useSelector((state)=>state.dashOwner)
    const params=useParams();
    const dispatch=useDispatch();
    
    useEffect(()=>{
        dispatch(getProperties(params.id));
    },[dispatch])

    const handleDelete=(id)=>{
        dispatch(handleIsDisplayed(true))
        dispatch(handleIdDeletedProperty(id))
    }

    const hadleDiplayUpdate =()=>{
        dispatch(handleDisplayUpdateWindow(true))
    }

  return (
    <>
<div className="z-100 relative overflow-x-auto  sm:rounded-lg w-[90%] border-t-2 border-t-sky-500 shadow-lg shadow-slate-400 shadow-t- ">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    property name
                </th>
                <th scope="col" className="px-6 py-3">
                    date
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
                </th>
                <th scope="col" className="px-6 py-3">
                    status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {
        isLoading ? (
            (rangePosts.length>0)
            ?
        rangePosts.map((item, key) => (
        <tr key={key} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             
            <Link to={`/dash-owner/${params.id}/${item.id}`}>
             {item.title}
             </Link>
            </th>
            <td className="px-6 py-4">
            {item.dateAvailable} 
            </td>
            <td className="px-6 py-4">
            {item.type} 
            </td>
            <td className="px-6 py-4">
            {`${item.price} TND` } 
            </td>
            <td className="px-6 py-4">
                <div className='flex gap-6 m-auto'>
                    <Link onClick={hadleDiplayUpdate} to="#" className="z-40 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                    </Link>
                    <button onClick={()=>handleDelete(item.id)}  to="#" className=" z-40 font-medium text-red-600 underline dark:text-blue-500 hover:underline">
                        Delete
                    </button>
                    
                </div>
            </td>
        </tr>
        
        ))
            :
            <tr className=' text-center  h-96 w-full'>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <span  className=' absolute left-[42%] top-[42%] text-2xl'>No properties found !</span>

            </tr>
        
    ) : (
        <tr>
            <td colSpan="5" className='text-center'>Loading...</td>
        </tr>
    )
}

        </tbody>
    </table>
       
</div>
            {(isDisplayed) && <DeleteConfirmation/>}
            {(updateShow)&&
            <div className='w-screen left-0 bg-black bg-opacity-75 absolute top-0 h-screen z-50'>
                    {(updateShow) && <BasicInfos settings={{id:params.id,sideBar:false} } />}
            </div> 
            }

            {(isDisplayedLogoutDialogue) &&  <LogoutConfirmation/>}
</>
  )
}

export default TableProperties