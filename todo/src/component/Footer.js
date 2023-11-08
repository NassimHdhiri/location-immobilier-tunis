import React from 'react'
import Image from '../images/logo-final.png'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <footer className='h-60 bg-indigo-300 pt-10 pb-60 '>
        <div className='grid grid-rows-1 grid-cols-2'>
            <div className='w-[30rem] ml-32'>
                <img src={Image} alt='logo' className='ml-[-20px] w-60  '/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ex ipsam neque rem aperiam illo ut voluptas ducimus, dolores ipsum aspernatur!</p>
                <div className='flex justify-around mt-5 w-24 text-xl'>
                    <BsFacebook/>
                    <BsInstagram/>
                    <BsWhatsapp/>
                </div>
            </div>

            <div className='grid grid-rows-1 grid-cols-3 mt-3'>
                <div>
                    <label className=' font-semibold '>Menu</label>  
                    <ul className='grid gap-y-1 mt-2 '>
                        <Link><li className='hover:text-white'>Home </li></Link>
                        <Link><li className='hover:text-white'>Find Props</li></Link>
                        <Link><li className='hover:text-white'>About Us</li></Link>
                        <Link><li className='hover:text-white'>Contact Us</li></Link>
                    </ul>
                </div>
                
                <div >
                    <label className=' font-semibold'>Location</label>
                    <ul className='grid gap-y-1 mt-2 '>
                        <Link><li    className='hover:text-white'>Appartement     </li></Link>
                        <Link><li    className='hover:text-white'>Maison          </li></Link>
                        <Link><li    className='hover:text-white'>Garage          </li></Link>
                        <Link><li    className='hover:text-white'>Terrain         </li></Link>
                        <Link><li    className='hover:text-white'>Local commercial</li></Link>
                        <Link><li    className='hover:text-white'>Fonds commerce  </li></Link>
                    </ul>
                </div>
                
                <div>
                    <label className=' font-semibold'>Vente</label> 
                    <ul className='grid gap-y-1 mt-2 '>
                        <Link><li className='hover:text-white'>Appartement     </li></Link>
                        <Link><li className='hover:text-white'>Maison          </li></Link>
                        <Link><li className='hover:text-white'>Garage          </li></Link>
                        <Link><li className='hover:text-white'>Terrain         </li></Link>
                        <Link><li className='hover:text-white'>Local commercial</li></Link>
                        <Link><li className='hover:text-white'>Fonds commerce  </li></Link>
                    </ul>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center m-auto text-slate-50 bg-black h-8 mt-6'>
                © 2023 Kariya . All rights reserved.
        </div>
    </footer>
  )
}

export default Footer