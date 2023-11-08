import React from 'react'
import {TbPlugConnectedX} from 'react-icons/tb'
import {PiPlugsConnectedBold} from 'react-icons/pi'



function AlertInfo(props) {
 
  return (
    <div class={` sticky z-50 bottom-2 m-auto w-96 text-center flex items-center p-4 mb-1 text-sm ${(!props.isOnline)?"text-black":"text-green-500"}  rounded-lg ${(props.isOnline)?'bg-yellow-100':'bg-red-300'} dark:bg-gray-800 dark:text-yellow-300`} role="alert">
        {
          
            (props.isOnline) 
                ?
                <PiPlugsConnectedBold className=' text-2xl text-center ml-5' />
                :
                <TbPlugConnectedX className=' text-2xl  text-center ml-5'/>
                
        }
        <div className=' ml-16 text-center m-auto' >
            <span className='m-auto'>{`You are currently ${ (props.isOnline) ?'online':'offline'}  !`}</span> 
        </div>
    </div>
  )
}

export default AlertInfo