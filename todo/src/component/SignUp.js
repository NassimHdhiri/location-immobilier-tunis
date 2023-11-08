import React, { useState } from 'react'
import Image from '../images/Home Decor Ideas Gates-Home Decor Ideas-Home Decor Ideas Living room.jpg'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Logo from '../images/logo-final.png'
import {GoogleAuthProvider, signInWithPopup, fetchSignInMethodsForEmail ,createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../auth/config'
import {getUser,postUser} from '../store/auth'

import { useSelector, useDispatch } from 'react-redux';


function SignUp() {


    const [confirmPassword,setConfirmPassword]=useState('');
    
    const dispatch = useDispatch();
    const {user}=useSelector((state)=> state.auth);

    const navigate = useNavigate();

    const [data,setData] = useState(
        {
            "role": "",
            "firstName": "",
            "lastName": "",
            "email": "",
            "phoneNumber": "",
            "photoProfile": "",
            "emailNotif": false
        }
);


const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const userAuth = await fetchSignInMethodsForEmail(auth, data.email);

        if (userAuth.length > 0) {
            alert('Sorry, this email already exists!');
            console.log(userAuth);
        } else {
            // Create a new user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;

            // Access the user's uid
            const uid = user.uid;

            // Update your data with the user's uid
            const updatedData = { ...data, uid: uid };
            await setData(updatedData);

            alert('Congratulations, you successfully signed up!');
            await dispatch(postUser(updatedData));
            navigate('/login');
            console.log('Sign-in with success!!!');
        }
    } catch (err) {
        console.error(err);
        return err.message;
    }
}


  return (
    <div className='flex items-center justify-center h-screen'>
    <Link to='/' className='h-screen font-bold ml-32 text-lg cursor-pointer flex items-start justify-start '>
    <img src={Logo} className=' w-52 pt-5' alt='logo website '/>
   </Link>
    <div className='flex flex-row  w-[700px] min-h-[600px]  m-auto ' >
        <div className='w-96 relative '>
            <img src={Image} alt="Login-pic" className='h-full w-full rounded-s-2xl shadow-lg'/>
            <p className='absolute bottom-7 left-6 text-white'>Already have an account ? <Link to='/login'><span className=' text-teal-400 font-semibold'>Log in</span></Link></p>
        </div>
        <div className=' bg-white rounded-e-2xl shadow-lg w-[500px]'>
            <h2 className='text-center font-semibold text-3xl p-8'>Sing Up</h2>            
              <form onSubmit={(e)=>handleSubmit(e)} className=' w-[90%] m-auto '>
              <div className="grid grid-cols-2 -mt-3 mb-3 gap-2 text-center ">
                    <div className="border rounded-lg flex p-2  border-primary">
                        <input onChange={(e)=>setData({...data,role:'owner'})} type="radio" className="ml-5 text-blue-500" id="asOwner" name="userType" />
                        <label htmlFor="asOwner" className="ml-5 ">
                        As owner
                        </label>
                    </div>
                    <div className="border rounded-lg flex p-2  border-primary">
                        <input onChange={(e)=>setData({...data,role:'renter',favoriteHouses:[]})} type="radio" className="ml-5" id="asRenter" name="userType" />
                        <label htmlFor="asRenter" className="ml-5">
                        As renter
                        </label>
                    </div>
                </div>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                      <div>
                          <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                          <input onChange={(e)=>setData({...data,firstName:e.target.value})} type="text" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Oubaid" required/>
                      </div>
                      <div>
                          <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                          <input  onChange={(e)=>setData({...data,lastName:e.target.value})}  type="text" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mahfoudh" required/>
                      </div>
                  </div>
                  
                  <div className="mb-6">
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                      <input onChange={(e)=>setData({...data,email:e.target.value})} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Oubaid.Mahfoudh@gmail.com" required/>
                  </div>
                  <div className="mb-6">
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                      <input  onChange={(e)=>setData({...data,phoneNumber:e.target.value})}  type="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="54000001" required/>
                  </div>  
                  <div className="grid gap-3  md:grid-cols-2">
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input onChange={(e)=>setData({...data,password:e.target.value})} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                    </div> 
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input onChange={(e)=>setConfirmPassword(e.target.password)} type="password" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                    </div> 
                  </div>
                 
                  <div className="flex items-start mb-6">
                      <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                      </div>
                  </div>
                  <button type="submit" className="bt-primary text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5 ml-[27%] w-full">Create an account</button>
              </form>
              
        </div>
    </div>
</div>
)
}

export default SignUp

// {/* <div className='relative border-t-2'>
//                   <p className=' absolute top-0 left-44 -mt-3 bg-white pl-3 pr-3 text-gray-500'>Or</p>
                        
//                         <div className="flex items-center justify-around  w-56  m-auto bg-white p-3">
//                             <button onClick={signInWithGoogle} className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-1 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 gap-4">
//                                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" viewBox="0 0 48 48" style={{ fill: '#000000' }}>
//                                     {/* Include the path elements from the SVG here */}
                        //             <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        //             <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                        //             <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                        //             <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        //         </svg>
                        //     </button>
                        //     <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-1 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 gap-4">
                        //         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                        //         <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                        //         </svg>
                        //     </button>
                        //     <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-1 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 gap-4">
                        //                                 <svg height="23" width="23" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 551.034 551.034" xmlSpace="preserve" fill="#000000">
                        //                                 <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="XMLID_13_"><linearGradient id="XMLID_2_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.5714" x2="275.517" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)"><stop offset="0" stopColor="#E09B3D"></stop><stop offset="0.3" stopColor="#C74C4D"></stop><stop offset="0.6" stopColor="#C21975"></stop>
                        //                 <stop offset="1" stopColor="#7024C4"></stop>
                        //                 </linearGradient>
                        //                 <path id="XMLID_17_" fill="url(#XMLID_2_)" d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"></path>
                        //                 <linearGradient id="XMLID_3_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.5714" x2="275.517" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
                        //                 <stop offset="0" stopColor="#E09B3D"></stop>
                        //                 <stop offset="0.3" stopColor="#C74C4D"></stop>
                        //                 <stop offset="0.6" stopColor="#C21975"></stop>
                        //                 <stop offset="1" stopColor="#7024C4"></stop>
                        //                 </linearGradient>
                        //                 <path id="XMLID_81_" fill="url(#XMLID_3_)" d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z"></path>
                        //                 <linearGradient id="XMLID_4_" gradientUnits="userSpaceOnUse" x1="418.306" y1="4.5714" x2="418.306" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
                        //                 <stop offset="0" stopColor="#E09B3D"></stop>
                        //                 <stop offset="0.3" stopColor="#C74C4D"></stop>
                        //                 <stop offset="0.6" stopColor="#C21975"></stop>
                        //                 <stop offset="1" stopColor="#7024C4"></stop>
                        //                 </linearGradient>
                        //                 <circle id="XMLID_83_" fill="url(#XMLID_4_)" cx="418.306" cy="134.072" r="34.149"></circle>
                        //             </g>
                        //             </g>
                        //             </svg>
                        //     </button>
                        // </div>
            // </div> */}