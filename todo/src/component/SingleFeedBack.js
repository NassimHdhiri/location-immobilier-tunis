import React from 'react'
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'

function SingleFeedBack(props) {
  return (
    <div className=' relative flex  flex-col justify-center items-center  mt-3 h-auto '>
        <div className=' bg-violet-700 absolute h-96 w-80 rounded -rotate-3  rounded-tr-[4rem]  rounded-br-[5rem]  rounded-tl-[8rem] -rounded-bl-[5rem]'> </div>
        <div className=' bg-white flex flex-col items-center pb-9 gap-0.5 z-20 w-72   rounded-tr-[4rem]  rounded-br-[5rem]  rounded-tl-[8rem] -rounded-bl-[5rem]  '> 
            <img src={props.image} alt='portrait-user' className='w-20 p-2 rounded-full m-6 '/>
            <h2 className=' capitalize text-lg font-semibold'>Ahmed Mechrgi</h2>
            <p className=' capitalize font-semibold italic text-gray-400' >Customer</p>
            <ImQuotesLeft className='-ml-48 mt-5 text-xl text-indigo-400'/>
            <p className='w-56 text-center capitalize m-4 font-sans'>
                the service was superb , really just woooow !!!  the service was superb , really just woooow !!!  the service was superb , really just woooow !!!
            </p>
            <ImQuotesRight className='-mr-48 text-xl text-indigo-400 mb-2'/>
        </div>
    </div>
  )
}

export default SingleFeedBack
