import { Slider } from '@material-tailwind/react'
import React from 'react'
import SliderMinMax from '../component/SliderMinMax'
import Image from '../images/building-line.png'

function SideMenu() {
    const [itemNbrBedRms,setItemNbrBedRms]=React.useState([2,5,6,7,10]);
    const [itemNbrBathRms,setItemNbrBathRms]=React.useState([3,5,6,7,10]);
    const [minValue,setMinValue]=React.useState(30);
    const [maxValue,setMaxValue]=React.useState(70);

    const changeMin=(newMin)=>{
        setMinValue(newMin);
    }
    const changeMax=(newMax)=>{
        setMaxValue(newMax);
    }

    
  return (
    <div className='w-60 flex flex-col items-center justify-center rounded-lg p-2  shadow-lg bg-primary ' >
        <form  >
            <div className='categories mb-5  rounded-lg bg-white p-5 w-56   '>
                <h3   className="mb-4    text-gray-900 dark:text-white">Property type</h3>
                <ul   className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li   className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div   className="flex items-center pl-3">
                            <input id="vue-checkbox" type="checkbox" value=""   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label htmlFor="vue-checkbox"   className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Appartment</label>
                        </div>
                    </li>
                    <li   className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div   className="flex items-center pl-3">
                            <input id="react-checkbox" type="checkbox" value=""   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label htmlFor="react-checkbox"   className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">House</label>
                        </div>
                    </li>
                    <li   className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div   className="flex items-center pl-3">
                            <input id="angular-checkbox" type="checkbox" value=""   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label htmlFor="angular-checkbox"   className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Garage</label>
                        </div>
                    </li>
                    <li   className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div   className="flex items-center pl-3">
                            <input id="laravel-checkbox" type="checkbox" value=""   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label htmlFor="laravel-checkbox"   className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Local Commercial</label>
                        </div>
                    </li>
                    <li   className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div   className="flex items-center pl-3">
                            <input id="fonds-checkbox" type="checkbox" value=""   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label htmlFor="fonds-checkbox"   className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fonds du commerce </label>
                        </div>
                    </li>
                    <li   className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div   className="flex items-center pl-3">
                            <input id="terrain-checkbox" type="checkbox" value=""   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label htmlFor="terrain-checkbox"   className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Terrain</label>
                        </div>
                    </li>
                </ul>
            </div>

            <div className='price-range rounded-lg bg-white p-5 w-56 mb-5'>
                <h3 className='mb-4    text-gray-900 dark:text-white'>Price Range</h3>
                <div>
                    <p className=' text-lg font-mono ml-9 '>{`$ ${minValue}  -  $ ${maxValue}`}</p>
                </div> 
                <div>
                    <img src={Image} alt='building-line' className='w-48'/>
                    <SliderMinMax  className='w-20' changeMin={changeMin} changeMax={changeMax}/>
                </div>
            </div>
            <div className='nbr rooms  rounded-lg bg-white p-5 w-56 mb-5'>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bed Rooms</label>
                <div className='flex justify-center items-center gap-5'>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            itemNbrBathRms.map((item,key)=>{
                                return <option key={key}>{item}</option>
                            })
                        }
                    </select> -
                    <select id="countries" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            itemNbrBathRms.map((item,key)=>{
                                return <option key={key}>{item}</option>
                            })
                        }
                    </select>
                </div>
            </div>

            <div className='nbr rooms  rounded-lg bg-white p-5 w-56 mb-5 '>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bed Rooms</label>
                <div className='flex justify-center items-center gap-5'>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            itemNbrBathRms.map((item,key)=>{
                                return <option key={key}>{item}</option>
                            })
                        }
                    </select> -
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            itemNbrBathRms.map((item,key)=>{
                                return <option key={key}>{item}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className='nbr rooms rounded-lg bg-white p-5 w-56 mb-5 '>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Furnished</label>
                <select id="countries" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Yes</option>
                        <option>No</option>    
                    </select>
            </div>
        </form>
    </div>
  )
}

export default SideMenu