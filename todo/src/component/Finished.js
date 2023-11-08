import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Image from '../images/login-house.jpg'
// import Image from '../images/Home Decor Ideas Gates-Home Decor Ideas-Home Decor Ideas Living room.jpg'
import { Link } from 'react-router-dom'
import Logo from '../images/logo-final.png'
import PaginationSlim from './PaginationSlim'

function Finished() {
  return (
    <div className='flex items-center justify-center  h-screen '>
    <Link to='/login' className='text-gray font-bold ml-32 text-lg cursor-pointer m-auto'>
     <button className='flex items-center gap-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width={40}  viewBox="0 0 25 25"><path style={{ fill: '#232326' }} d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg>
        Back to login
     </button>
   </Link>
    <div className='flex flex-row  w-[700px] min-h-[550px] m-auto  ' >
      {/* left form */}
      <div className='bg-white rounded-s-2xl shadow-lg w-[500px] p-5 relative'>
          
          <form className='absolute top-36 w-[370px] '>
          <div className=' -mb-1 rounded-lg  w-9 border-2 p-1 m-auto'> 
            <svg xmlns="http://www.w3.org/2000/svg" className='m-auto' width={24} viewBox="0 0 64 64" id="email"><path fill="#222" d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"></path><path fill="#222" d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"></path><path fill="#222" d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"></path></svg>
          </div>
              <h3 className='font-semibold text-3xl mt-5  text-center'>All done!</h3>
              <p className='text-sm text-slate-500 m-3 text-center'>{`Your password has been reset.`}</p>
             
              <Link  to='/login'className='flex justify-center mt-10'>
                  <button type="button" className="m-auto pl-28 pr-28 text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 ">
                    Congratulation!
                  </button>
              </Link>
          </form>
          <div className='absolute bottom-3 left-8'>
              <PaginationSlim/>
          </div>
      </div>
      {/* aside picture */}
      <div className='w-96 relative '>
          <img src={Image} alt="Login-pic" className='h-full w-full rounded-e-2xl shadow-lg'/>
      </div>
    </div>
  </div>
  )
}

export default Finished