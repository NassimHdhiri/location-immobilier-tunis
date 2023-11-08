import React from 'react'
import { BsBorder } from 'react-icons/bs'
import { LuBedSingle } from 'react-icons/lu'
import { TbBath } from 'react-icons/tb'

function SpecsProperties(props) {
return (
    <div className='flex  justify-around bg-slate-300  border-2 rounded-lg w-[70%] m-auto p-1'> 
        <div className=''>
            <span className=' text-base'>Bedrooms</span>
            <div className='flex justify-center items-center gap-2'>
                <LuBedSingle className=' text-lg'/>
                <span className=' text-lg'>{props.data.bedroom}</span>
            </div>
        </div>
        <div>
            <span className=' text-base'>Bathroom</span>
            <div className='flex justify-center items-center gap-2'>
                <TbBath className=' text-lg'/>
                <span className=' text-lg'>{props.data.bathroom}</span>
            </div>
        </div>
        <div>
            <span className=' text-base'>Square Area</span>
            <div className='flex justify-center items-center gap-2'>
                <BsBorder className=' text-lg'/>
                <span className=' text-lg'>{props.data.space} m²</span>
            </div>
        </div>
    </div>
)
}

export default SpecsProperties