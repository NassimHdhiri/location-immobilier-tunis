import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams  } from "react-router-dom";
import Button from '../Button';
import Image from '../../images/logo-final.png'
import Dropdown from './Dropdown.js';
import isAuthenticated from '../../auth/isAuthentificated'
import {auth} from '../../auth/config'
import {getUserWithUID} from '../../store/auth'
import { useDispatch, useSelector } from 'react-redux'; 

function NavBar() {
  const location = useLocation();
  const userAuth = isAuthenticated(auth);
  const [display,setDisplay]=useState(false)
  const {userUID,user}=useSelector((state)=>state.auth)
  const dispatch=useDispatch();



  useEffect(() => {
    if (userAuth !== null && userAuth.uid !== null) {
        dispatch(getUserWithUID(userAuth.uid));
    }
}, [dispatch, userAuth,user]);


  useEffect(()=>{
    setTimeout(()=>{
        setDisplay(true)
    },5000)
  },[display])


  // console.log('id : '+userAuth.uid)
  // Exclude NavBar from /login and /sign-up routes
  if (location.pathname === '/login' || location.pathname === '/sign-up'
  || location.pathname === '/forget-pwd' || location.pathname === '/get-code-pin' 
  ||  location.pathname === '/set-new-pwd' || location.pathname === '/dash-owner' 
  ||(
      location.pathname.includes('/dash-owner')
    ) 
  || location.pathname.includes('/dash-retailer')
    ) {
    return null;
  }
  return (
    <nav className=' justify-between  bg-transparent  flex z-10 absolute w-full  ' >
      <Link to='/' className='text-gray  font-bold ml-24 text-lg cursor-pointer m-auto'>
       <img src={Image} className=' w-56' alt='logo website '/>
      </Link>
      <ul className='flex justify-around w-1/4 ml-10 m-auto font-sans space-x-4 '>
        <li>
          <Link to='/' className='text-gray hover:text-neutral-500'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/find-props' className='text-gray  hover:text-neutral-500'>
            Find props
          </Link>
        </li>
        <li>
          <Link to='/about-us' className='text-gray  hover:text-neutral-500'>
            About Us
          </Link>
        </li>
        <li>
          <Link to='/contact-us' className='text-gray  hover:text-neutral-500'>
            Contact Us
          </Link>
        </li>
      </ul>
      { 
        (display)
        ?
              (userAuth===null)
            ?
              <div className='flex justify-between items-center w-60 mr-16 -ml-10 '>
              <Link to='/login' ><Button>Login</Button></Link>
              <Link to='/sign-up'><Button>Sign up</Button></Link>
            </div>
            :
              <Dropdown userDetails={userUID}/>
          :
            <div>Loading ...</div>
        }
      
    </nav>
  );
}

export default NavBar;
