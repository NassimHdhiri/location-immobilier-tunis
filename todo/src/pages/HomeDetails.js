import React, { useDebugValue, useEffect, useState } from 'react'
import GalleryProperties from '../component/HomeDetails/GalleryProperties'
import Head from '../component/HomeDetails/Head'
import SpecsProperties from '../component/HomeDetails/SpecsProperties'
import Price from '../component/HomeDetails/Price'
import Contact from '../component/HomeDetails/Contact'
import AsideTable from '../component/HomeDetails/AsideTable'
import Description from '../component/HomeDetails/Description'
import LocationNeighborhood from '../component/HomeDetails/LocationNeighborhood'
import Maps from '../component/HomeDetails/Maps'
import SuggestedProperties from '../component/HomeDetails/SuggestedProperties'
import RecentlyViewed from '../component/HomeDetails/RecentlyViewed'
import PhoneDialogue from '../component/HomeDetails/PhoneDialogue'
import { useSelector,useDispatch } from 'react-redux'
import {getUser,getPropertyDetails} from '../store/DetailsProperties'
import { useNavigate, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import LogoutConfirmation from '../component/dashboards/owner/LogoutConfirmation';


function PropertyDetails() {

  const {isDisplayedLogoutDialogue}=useSelector((state)=>state.dashOwner)
  const location = useLocation();

  const {id,propsId}=useParams();

  const dispatch = useDispatch();
  const {userId,displayPhone,PropertyDetails,userDetails}=useSelector((state)=>state.detailsProperty);

  useEffect(() => {
    const fetchUserData = async () => {
      if(location.pathname.includes('/dash-owner/')){
        await dispatch(getUser(id));
      }else if (location.pathname.includes('/find-props/')){
        await dispatch(getUser(userId));
    }

      await dispatch(getPropertyDetails(propsId));

      
    };
  
    fetchUserData();
  }, [dispatch, id, userId]);
  


  return (
    <>
    <div className='grid grid-cols-10  relative '> 
      <div className='col-span-8 overflow-y-auto h-screen '>
        <Head data={PropertyDetails}/>
        <GalleryProperties data={PropertyDetails}/>
        <div className='flex mt-16  '>
          <SpecsProperties data={PropertyDetails}/>
          <Price data={PropertyDetails.price} />
        </div>
        <div className='container mx-auto p-8'> 
          <div className='bg-white shadow-md rounded-lg p-6 '>
            <Description data={PropertyDetails.description}/>
            <LocationNeighborhood data={PropertyDetails}/>
            <Maps/>
            <SuggestedProperties />
            <RecentlyViewed/>
          </div>
        </div>
      </div>
      <div className=' h-screen pb-8 overflow-y-auto col-span-2 border-l-2 border-gray-200 shadow-lg shadow-indigo-300 rounded-l-3xl'>
        <Contact data={PropertyDetails} userInfos={userDetails}/>
        <AsideTable data={PropertyDetails}/>
      </div>
      {(displayPhone) && <PhoneDialogue userInfos={userDetails}/>}
      

    </div>
    {(isDisplayedLogoutDialogue) &&  <LogoutConfirmation/>}
    </>
  )
}

export default PropertyDetails