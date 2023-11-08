import React from 'react'
import SideMenu from '../component/SideMenu'
import TopFilter from '../component/TopFilter'
import ListingHouses from '../component/ListingHouses'
import Footer from '../component/Footer'
import { Helmet } from 'react-helmet';


function FindPros() {
  return (
    <div>
        <Helmet>
            <title>Kariya Tn - FindPros</title>
        </Helmet>
      <TopFilter/>
      <div className='flex  '>
        <div className='ml-2'>
        < SideMenu className='grid col-span-1'/> 
        </div>
        <div className='grid  grid-cols-1 m-auto pt-2 mt-6'>
          <ListingHouses/>
        </div>
        <div className='mr-5'>
        < SideMenu className='grid col-span-1'/> 
        </div>
      </div>
      <Footer/>  
    </div>
  )
}

export default FindPros