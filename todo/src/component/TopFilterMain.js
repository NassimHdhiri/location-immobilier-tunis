import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {    
            handleType,
            handleSize,
            handleFilterON,
            handleFilterLocation ,
            handleLocation,
            handleNbrFilterLocation,
            handleFilterRange
        } from '../store/home';

        

function TopFilterMain() {

    const {
        allHomes,
        filterLocation,
        filterTop
    }=useSelector((state)=>state.home);

    var items =[];

    allHomes.map((item,index)=>{
        return items.push(item.location)
    })

    // Create a Set from the array to automatically remove duplicates
    var uniqueItemsSet = new Set(items);

    // Convert the Set back to an array
    var uniqueItemsArray = Array.from(uniqueItemsSet);


        const dispatch=useDispatch();
        
        const handleFLocation=(item)=>{
            dispatch(handleFilterLocation(item))
        }
        const handleNbrFlocation=(searchInput)=>{
            const result = allHomes.filter(item => item.location === searchInput).length;
            console.log(result);
            handleFLocation(searchInput);
            dispatch(handleLocation(searchInput));
        }

        const filterRange=[];


        console.log(filterRange);

        const setFilterOn=(item)=>{
            dispatch(handleFilterON(item));
            
        allHomes.filter((item)=>{
            if((item.location === filterTop.location&&item.size===filterTop.size&&item.type===filterTop.type)
            || (item.size===filterTop.size)
            || (item.type===filterTop.type)){
                return true
            }
        }).map((item)=>{filterRange.push(item)});
            dispatch(handleFilterRange(filterRange))
        }
        const setType=(item)=>{
            dispatch(handleType(item));
        }
        
        const setSize=(item)=>{
            dispatch(handleSize(item));
        }

        const valueChanged=(item)=>{
            return item
        }
        const [open,setOpen]=useState(false);

        const [inputValue,setInputValue]=useState('')


return (
    <div className='w-[62%] m-auto -pr-11 pl-4 pt-4'>
        <form className='flex flex-row justify-around items-center gap-1'>
            <div className='relative z-50'>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                <input type="text" value={inputValue}  onFocus={()=>{setOpen(true)}}  onBlur={()=>{setOpen(false)}} id="location_input" onChange={(e)=>{handleNbrFlocation(e.target.value)}} autoComplete="off" className="bg-gray-50 border duration-75  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tunis" required/>
                
                {(open) &&  
                <div className='ml-3 overflow-auto min-h-20 max-h-60 bg-white border-blue-400 border-2 p-5  pt-4 absolute w-44 rounded-lg mt-1'>
                    <ul className='pb-0' >
                        {uniqueItemsArray
                            .filter((item) => {
                                if (filterLocation.toLowerCase() === "") {
                                    return true;
                                } else if (item.toLowerCase().includes(filterLocation.toLowerCase())) {
                                    return true;
                                }
                                return false;
                            })
                            .map((item, index) => { 

                            return  <li onClick={()=>setInputValue(item)} className=' capitalize hover:text-blue-500 p-1 cursor-pointer border-b-2 border-gray  '   key={index}>{item}</li>
                            }
                                
                            )} 
                    </ul>
                </div>
                }
            </div>
            <div>
            <label htmlFor="propertyType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Property type</label>
            <select
                id="propertyType"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e)=>{setType(e.target.value)}}
                
            >
                <option value="">Choose Property type</option>
                <option value="apartment">Appartment</option>
                <option value="house">House</option>
            </select>
        </div>
            <div>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price range</label>
                <select  id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option  >Choose your range</option>
                    <option value="0-500">0 - 500 dt</option>
                    <option value="500-1000">500 - 1000 dt</option>
                    <option value="1000-1500">1000 - 1500 dt</option>
                    <option value=">1500">More than 1500 dt</option>
                </select>
            </div>
         
            <div>
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Property size</label>
            <select
                placeholder='Choose your size'
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(event) => setSize(parseInt(event.target.value))}
            >
                <option value="">Choose your size</option>
                <option value="0">s+0</option>
                <option value="1">s+1</option>
                <option value="2">s+2</option>
                <option value="3">s+3</option>
                <option value="4">s+4</option>
            </select>
            </div>

            <div className='mt-3'>
                <button onClick={()=>setFilterOn(true)} type="button" className="text-white ml-2 mt-4 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Search</button>
            </div>
        </form>
    </div>
)
}

export default TopFilterMain