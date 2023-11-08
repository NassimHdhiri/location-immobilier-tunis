import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Image from '../images/login-house.jpg'
// import Image from '../images/Home Decor Ideas Gates-Home Decor Ideas-Home Decor Ideas Living room.jpg'
import { Link } from 'react-router-dom'
import Logo from '../images/logo-final.png'
import PaginationSlim from './PaginationSlim';
import {auth} from '../auth/config'
import { sendPasswordResetEmail } from 'firebase/auth';
import generateRandomCode from '../utils/generateRandomCode'

function ForgetPwd() {
    const [email,setEmail]=useState(null);
    const [error,setError] = useState(null);

    // const handleSubmit= async (e)=>{
    //     e.preventDefault();

    //     try{
    //         if(mail===null){
    //             alert('Please enter your email')
    //         }else{
    //             await sendPasswordResetEmail(auth,mail);
    //         }
    //     }catch(error){
    //         setError(error.message);
    //     }
        
    // 

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
              
              <form className='absolute top-24 w-[370px] '>
              <div className='  m-3 -mb-1 rounded-lg border-2 w-8 p-1'> 
                  <svg className='m-auto fill-slate-600' xmlns="http://www.w3.org/2000/svg" width={23} viewBox="0 0 32 32"><g data-name="finger print"><path d="M26.75 16V15.59a.61.61 0 0 0 0-.13 10.74 10.74 0 1 0-15.31 10.27l.19.08.77.31.36.11c.22.07.45.14.68.19l.4.1.7.11.38.05H16a10.43 10.43 0 0 0 3-.44 1 1 0 1 0-.56-1.92 8.51 8.51 0 0 1-2.73.35h-.8l-.46-.07-.34-.07-.42-.1-.37-.11-.32-.11-.42-.21a8.49 8.49 0 0 1-2.37-1.48 8.75 8.75 0 1 1 14.53-6.82 2.45 2.45 0 0 1-2.24 2.51 2.48 2.48 0 0 1-2.25-2.66 1 1 0 0 0-.08-.39 4.25 4.25 0 1 0-7.85 2.93 1 1 0 0 0 .87.49 1 1 0 0 0 .86-1.5 2.19 2.19 0 0 1-.3-1.12 2.25 2.25 0 0 1 4.5 0 1 1 0 0 0 .07.34 4.39 4.39 0 0 0 4.18 3.91 4.39 4.39 0 0 0 4.18-3.91 1 1 0 0 0 .07-.3z"/><path d="M13.25 20.76a6 6 0 0 1-.89-.63A5.5 5.5 0 1 1 21.5 16a1 1 0 0 0 2 0A7.5 7.5 0 1 0 11 21.63a7.42 7.42 0 0 0 1.21.87 1 1 0 1 0 1-1.74z"/><path d="M22.09 21.5A5.1 5.1 0 0 1 17 16.41a1 1 0 1 0-2 0 7.1 7.1 0 0 0 7.09 7.09 1 1 0 1 0 0-2zM16 2a13.91 13.91 0 0 0-2.33.19 1 1 0 0 0 .33 2A12.18 12.18 0 0 1 16 4a12 12 0 0 1 10 18.63 1 1 0 0 0 .28 1.37 1 1 0 0 0 1.39-.28A14 14 0 0 0 16 2zM10 26.4a12 12 0 0 1 1-21.31 1 1 0 0 0 .49-1.33 1 1 0 0 0-1.32-.49A13.85 13.85 0 0 0 6.74 5.5 14 14 0 0 0 9 28.13a1 1 0 0 0 1.37-.37A1 1 0 0 0 10 26.4zM21 26.91a12.05 12.05 0 0 1-8 .71 1 1 0 0 0-.5 1.94A14.16 14.16 0 0 0 16 30a13.91 13.91 0 0 0 5.83-1.27 1 1 0 1 0-.83-1.82z"/></g></svg>
              </div>
                  <h3 className='font-semibold text-2xl mt-5 m-3'>Forget password ?</h3>
                  <p className='text-sm text-slate-500 m-3 -mt-2 '>No worries, we'll send you reset instructions.</p>
                  <div className="mb-6 m-3 mt-9">
                      {/* <label forHtml="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label> */}
                      <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Oubaid.Mahfoudh@gmail.com" required/>
                  </div> 
                  <Link to='/get-code-pin' className='flex justify-center mt-8'>
                      <button  type="submit" className=" text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                          Reset password
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
  );
}

export default ForgetPwd;
