import React from 'react'
import Sidebar from './Sidebar'
import ListingHouses from '../../../component/ListingHouses'
import TopFilter from '../../TopFilter'
import TopFilterMain from '../../TopFilterMain'
import TopDashBoard from './TopDashBoard'
import TableProperties from './TableProperties'
import Stepper from './Stepper'
import BasicInfos from './BasicInfos'
import PropertyDetails from './PropertyDetails'
import Pagination from '../owner/Pagination'
import { Helmet } from 'react-helmet'
import LogoutConfirmation from './LogoutConfirmation';
import { useSelector } from 'react-redux'

function DashOwner() {
  const {isDisplayedLogoutDialogue}=useSelector((state)=>state.dashOwner)
  return (
    <>
    <div className='flex  bg-white'>
      <Helmet>
            <title>Kariya Tn - Dash Owner</title>
        </Helmet>
        <Sidebar role={1}/>
        <div className='all-properties z-60   flex flex-col items-center m-auto h-screen  w-[90%] pt-8 gap-8 '>
          <TopDashBoard/>
          <TableProperties/>
          <Pagination/>
        </div>
    </div>
    {(isDisplayedLogoutDialogue) &&  <LogoutConfirmation/>}
    </>
  )
}

export default DashOwner