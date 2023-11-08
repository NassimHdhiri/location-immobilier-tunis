import React from 'react'
import {GoogleMap,useLoadScript,Marker} from '@react-google-maps/api'
import Maps from './Maps'
import Image from '../images/image.png'



function ContactUs() {
  return (
    <section className='grid grid-cols-2 grid-rows-1 h-[753px]'>
        <div className='flex flex-col col-span-1 gap-5 items-center pt-16 border-l-2 border-r-purple-600'>
            <div className='ml-[-7rem] pt-3 pb-5'>
                <h2 className=' text-left text-[35px] font-semibold'>Contact Us</h2>
                <p className=' text-slate-500'>Our friendly team would love ti hear from you !</p>
            </div>
            
            <form className='grid gap-5 flex-col items-center'>
                <div className='flex gap-2 row-start-1 row-end-1 justify-between'>
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                    </div>
                    
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="MEKRI" required/>
                    </div>
                </div>
                

                <div className="mb-2">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
                </div> 

                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                    <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                </div>

                <div className='flex gap-2 flex-col row-span-1'>
                    <label>Message</label>
                    <textarea rows="4"  className="block p-2.5  max-h-36 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </div>
                
                <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center  text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    send Message
                </button>
            </form>
        </div>
        <div className='col-span-1'>
            <img src={Image} alt='maps' className='h-[753px] ' />
        </div>
    </section>
  )
}

export default ContactUs