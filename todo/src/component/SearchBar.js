import React from 'react'
import { LuSearch } from 'react-icons/lu';

function SearchBar() {
  return (
    <form className=' bg-white flex justify-around absolute h-24 p-5 left-10' style={{top:'62%',left:'7%',width:"60%"}}>
        <div className='flex flex-col space-y-1  border-r-2 ' style={{paddingRight:"5%"}}>
            <label className='ml-[-10%]  font-semibold'>Location</label>
            <input  className='ml-[-10%]  border-b focus:outline-none w-40'    type='text'  placeholder='Long Beach, California'/>
        </div>
        <div className='flex flex-col space-y-1 border-r-2' style={{paddingRight:"3%"}}>
            <label  className='ml-[-15%] font-semibold'>Property Type </label>
            
            <select className="ml-[-20%] outline-none border rounded-lg px-4 py-2 mt-4">
                <option >Appartement</option>
                <option>House</option>
            </select>
            {/* <input className='ml-[-15%]  border-b  focus:outline-none w-40	' type='text' placeholder='Appartement'/> */}
        </div>
        <div className='flex flex-col space-y-1' style={{marginRight:"-3%"}}>
            <label className='ml-[-10%] font-semibold'>Price</label>
            <input className='ml-[-10%]  border-b focus:outline-none w-52	' type='number ' placeholder='Long Beach, California'/>
        </div>
        <div className='bg-black w-16 h-16 pt-5 mr-[-4%] hover:cursor-pointer '>
            <LuSearch className=" text-2xl m-auto"style={{color:'white'}}/>
        </div> 
    </form>
  )
}

export default SearchBar