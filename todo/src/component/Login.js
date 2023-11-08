import React, { useEffect } from 'react'
import Image from '../images/Home Decor Ideas Gates-Home Decor Ideas-Home Decor Ideas Living room.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../images/logo-final.png'
import {auth} from '../auth/config'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { getUser } from '../store/auth'
import { useDispatch, useSelector } from 'react-redux'
import {postUser} from '../store/auth'


function Login() {
    const dispatch=useDispatch();
    const {user,isAuthenticated} =useSelector((state)=>state.auth);

    const navigate = useNavigate();

    useEffect(() => {
        // Check if isAuthenticated has been updated
        if (isAuthenticated) {
            if(user.role==='owner'){
                navigate(`/dash-owner/${parseInt(user.id, 10)}`);
            }else if(user.role==='renter'){
                navigate(`/dash-retailer/${parseInt(user.id, 10)}`);
            }
        }
    }, [isAuthenticated, navigate, user.id]);



    // const handleSubmit =async (e) => {
    //     e.preventDefault()
    //     const email = e.target.email.value
    //     const password = e.target.password.value
        
    //     try {

    //             const result=await signInWithEmailAndPassword(auth, email, password).then(async()=>{
    //             if(result){
    //                 await dispatch(getUser(email));
    //             }else {
    //                 return alert('user not found ! Please Sign Up !')
    //             }
    //         })
    //     } catch (error) {
    //         // Handle authentication failure
    //         throw new Error ('Authentication failure')
    //     }
    // }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
      
        try {
          // Sign in the user
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
      
          // Check if the user is successfully signed in
          if (user) {
            await dispatch(getUser(email));
          } else {
            // User not found or other sign-in issues
            alert('User not found! Please Sign Up.');
          }
        } catch (error) {
          // Handle authentication failure
          console.error('Authentication failure:', error);
          alert('Authentication failed. Please try again.');
        }
      };
      
return (
    <div className='flex items-center justify-center  h-screen '>
        <Link to='/' className='h-screen font-bold ml-32 text-lg cursor-pointer flex items-start justify-start'>
            <img src={Logo} className=' w-52 pt-5' alt='logo website '/>
        </Link>
    <div className='flex flex-row  w-[700px] max-h-[600px] m-auto  ' >
        <div className='w-96  '>
            <img src={Image} alt="Login-pic" className='h-full w-full rounded-s-2xl shadow-lg'/>
        </div>
        <div className=' bg-white rounded-e-2xl shadow-lg w-[500px]  '>
            <h2 className='text-center font-semibold text-3xl p-8 '>Login</h2>            
                <form  className='w-80 m-auto mt-8' onSubmit={(e)=>handleSubmit(e)}  >
                <div className="grid grid-cols-2 -mt-3 mb-3 gap-2 text-center">
                    {/* <div className="border rounded-lg flex p-2 border-primary">
                        <input type="radio" className="ml-5 text-blue-500" id="asOwner" name="userType" />
                        <label htmlFor="asOwner" className="ml-5 ">
                        As owner
                        </label>
                    </div>
                    <div className="border rounded-lg flex p-2  border-primary">
                        <input type="radio" className="ml-5" id="asRenter" name="userType" />
                        <label htmlFor="asRenter" className="ml-5">
                        As renter
                        </label>
                    </div> */}
                </div>

                    <div className="mb-6 mt-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Oubaid.Mahfoudh@gmail.com" required/>
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                    </div>
                    
                    <div className='flex justify-between'>
                        <div className="flex items-center">
                            <input   id="disabled-checked-checkbox" name="disabled-checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="disabled-checked-checkbox"  className=" cursor-pointer ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Remember me</label>
                        </div>
                        <div className="flex items-center">
                            <Link to='/forget-pwd'><span className='ml-2 text-sm font-medium text-blue-500 dark:text-gray-500 underline'>Forget password ?</span></Link>
                        </div>
                    </div>
                    <div className='mt-10 flex flex-col justify-center'>
                        <button type="submit" className="w-full sm:w-auto mb-2  px-24 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-base text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Login
                        </button>
                    </div>
                </form>
                
                        {/* <div className='m-10 mt-1 flex flex-col justify-center '>
                            <button  type="submit" className="flex  w-full sm:w-auto mb-1  px-24 py-2  bg-white border-gray-400 border-2 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-base text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" viewBox="0 0 48 48" style={{ fill: '#000000' }}>
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>
                                <span className='m-auto'>Sign In </span>
                            </button>
                    </div> */}

                <div className='relative p-10 pl-5 pt-4 pb-4'>
                    <p className=' bottom-7 left-6 text-gray-700'>Don't have an account ? <Link to='/sign-up'><span className=' text-blue-400 font-semibold'>Sign up</span></Link></p>
                </div>         
        </div>
    </div>
    </div>
)

}
export default Login


