import React, { useEffect } from 'react'
import {LuBedSingle} from 'react-icons/lu'
import {BsBorder} from 'react-icons/bs'
import {TbBath} from 'react-icons/tb'
import {FiDollarSign} from 'react-icons/fi'
import { GoBookmark ,GoBookmarkFill } from "react-icons/go";
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {setUser_id} from '../store/DetailsProperties'
import user from '../auth/isAuthentificated'
import {putUserAddFav} from '../store/dashRetailer'


function SingleHouse(props) {
    const {userUID}=useSelector((state)=>state.auth);
    
    const [checked,setChecked]=useState(false);
    const dispatch=useDispatch()

    useEffect(()=>{
        if(userUID!==null && userUID.favoriteHouses!==undefined){
            setChecked(userUID.favoriteHouses.includes(props.cle.id))
        }
    },[userUID])

    useEffect(()=>{
        dispatch(setUser_id(props.cle.owner_id));
    },[dispatch])

    const handleSetFav = async () => {
        try {
            if (user && userUID.role === 'renter') {

                // Convert favoriteHouses to a Set to ensure uniqueness
                const uniqueFavoriteHouses =await new Set(userUID.favoriteHouses);
    
                // Add props.cle.id to the Set
                uniqueFavoriteHouses.add(props.cle.id);
    
                // Convert it back to an array
                const newFavoriteHouses = await Array.from(uniqueFavoriteHouses);
    
                // Create the request body with the updated favoriteHouses
                const requestBody =await { ...userUID, favoriteHouses: newFavoriteHouses };
                console.log('New requestBody: ', requestBody);
    
                const response = await dispatch(putUserAddFav({ id: userUID.id, requestBody }));
    
                if (response.error) {
                    // Handle errors returned from the API
                    console.error('Error updating favoriteHouses:', response.error);
                    alert('Error updating favoriteHouses. Please try again.');
                } else {
                    setChecked(true);
                    alert("That's great!!!");
                    console.log("That's great!!!");
                }
            } else if (userUID.role === 'owner') {
                alert("This feature is available only for renters!");
                console.log("This feature is available only for renters!");
            } else if (user.uid === undefined) {
                alert('You must be a subscriber as a retailer!');
                console.log('You must be a subscriber as a retailer!');
            }
        } catch (error) {
            console.error('An unexpected error occurred:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    };
    
    const handlePopFav = async () => {
        try {
            if (user && userUID.role === 'renter') {

                // Convert favoriteHouses to a Set to ensure uniqueness
                const uniqueFavoriteHouses =await new Set(userUID.favoriteHouses);
    
                // Add props.cle.id to the Set
                uniqueFavoriteHouses.delete(props.cle.id);
    
                // Convert it back to an array
                const newFavoriteHouses = await Array.from(uniqueFavoriteHouses);
    
                // Create the request body with the updated favoriteHouses
                const requestBody =await { ...userUID, favoriteHouses: newFavoriteHouses };
                console.log('New requestBody: ', requestBody);
    
                const response = await dispatch(putUserAddFav({ id: userUID.id, requestBody }));
    
                if (response.error) {
                    // Handle errors returned from the API
                    console.error('Error updating favoriteHouses:', response.error);
                    alert('Error updating favoriteHouses. Please try again.');
                } else {
                    setChecked(false);
                    alert("That's great!!!");
                    console.log("That's great!!!");
                }
            } else if (userUID.role === 'owner') {
                alert("This feature is available only for renters!");
                console.log("This feature is available only for renters!");
            } else if (user.uid === undefined) {
                alert('You must be a subscriber as a retailer!');
                console.log('You must be a subscriber as a retailer!');
            }
        } catch (error) {
            console.error('An unexpected error occurred:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    };
    
    

  return (
    <div  className='  grid grid-cols-1 grid-rows-2 border-2 w-52 rounded-lg  shadow-lg '>
        <div className=' h-28 grid row-span-1 relative'> 
            <img src={process.env.PUBLIC_URL+`/images/${props.cle.photos[0]}`} alt='house images' className=' h-28 w-full rounded-lg'/>
            {(checked ===false) 
            ? <GoBookmark className=' absolute fill-blue-600 -right-5 top-3 text-2xl hover:cursor-pointer w-20 transition' onClick={handleSetFav}/>
            : <GoBookmarkFill className='  absolute  fill-blue-600 -right-5 top-3 text-2xl hover:cursor-pointer  w-20 transition' onClick={handlePopFav}/>
            }
        </div>
        <Link to={`/find-props/${props.cle.id}`} className='hover:cursor-pointer ' >  
            <div className='grid row-span-2 hover:cursor-pointer'>
                <div className='flex flex-col  mt-0.5 p-2 mb-0.5 hover:cursor-pointer'>
                    <div className='flex items-center pl-1 hover:cursor-pointer '>
                        <FiDollarSign className='text-indigo-500'/>
                        <label className=' text-[20px] text-indigo-500 hover:cursor-pointer'><strong>{props.cle.price}</strong> <span className='text-xs text-slate-500'>per month</span></label>
                    </div>
                    <label className=' text-[18px] font-semibold tracking-wide pl-1 hover:cursor-pointer'>{props.cle.title}</label>
                    <div className='flex gap-1 hover:cursor-pointer items-center pl-1'>
                        {/* <IoLocationOutline  className='text-indigo-500'/> */}
                        <label className='text-xs text-slate-500 hover:cursor-pointer' >{props.cle.address}</label>    
                    </div>
                </div>
                <div className='grid hover:cursor-pointer  grid-cols-3 gap-x-1 border-t-slate-300 border-t-2 justify-center items-center h-6'>
                    <div className=' flex inline-flex   hover:cursor-pointer items-center gap-1 pl-1 w-20' >
                        <LuBedSingle className=' text-xs text-indigo-500' />
                        <label className=' text-[10px] hover:cursor-pointer'>{`${props.cle.bathroom} bathroom`}</label>
                        
                    </div>
                    <div  className=' flex inline-flex hover:cursor-pointer items-center pl-2 gap-1 w-20'>
                        <TbBath className=' text-xs text-indigo-500'  />
                        <label className=' text-[10px] hover:cursor-pointer'>{`${props.cle.bedroom} Bedroom`}</label>
                    </div>
                    <div  className=' flex inline-flex hover:cursor-pointer  items-center gap-2 ml-4'>
                        <BsBorder  className=' text-xs text-indigo-500' />
                        <label className=' text-[10px] hover:cursor-pointer'>{`${props.cle.space} m`}</label>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default SingleHouse