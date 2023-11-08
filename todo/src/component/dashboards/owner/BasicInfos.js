import { Link, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Stepper from "./Stepper";
import React, { useEffect, useState } from 'react'
import {postProperties,updateProperties,handleDisplayUpdateWindow} from '../../../store/dashOwner'
import {getPropertyDetails} from '../../../store/DetailsProperties'
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import LogoutConfirmation from './LogoutConfirmation';           


function BasicInfos(props) {
    const dispatch=useDispatch();

    const [currentStep,setCurrentStep]=useState(1);
    const params=useParams();   
    
    const { PropertyDetails } = useSelector((state) => state.detailsProperty);
    const {updateShow,isDisplayedLogoutDialogue} = useSelector((state) => state.dashOwner) ;
    const [data, setData] = useState({ owner_id: params.id });
    
    useEffect(() => {
        if (props.settings.id && PropertyDetails) {
            setData({ ...PropertyDetails });
        }
    }, [props.settings.id, PropertyDetails]);
    
    

    const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image

    const totalSteps=5;
    const [update,setUpdate]=useState(false);
    const [nameSteps,setNameStep]=useState(['Basic info','Property Details','Pricing','Photos','Review'])
    
    useEffect(()=>{
        (props.settings.id) && dispatch(getPropertyDetails(props.settings.id))
    },[dispatch])


    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
        setData({...data,photos:e.target.value });
    }

    const handleCurrentStep=()=>{
        if(currentStep<totalSteps){
            if(currentStep===1 && data.title && data.type && data.address 
                && data.description && (data.furnished || !data.furnished) && (data.parking || !data.parking)
                && (data.petFriendly || !data.petFriendly)&& (data.securitySystem || !data.securitySystem)
                ){
                    setCurrentStep(currentStep+1);
                    
                }else if(currentStep===2 && data.floor && data.size && data.bathroom && data.bedroom && data.space){
                        setCurrentStep(currentStep+1);
                    }

        else if(currentStep===3 && data.price && data.dateAvailable  && (data.electricity || data.water|| data.gaz|| data.internet) 
                        ){
                            setCurrentStep(currentStep+1);
                        }else if(currentStep===4 && data.photos
                        ){

                            setCurrentStep(currentStep+1);
                        }else{
                            alert('Please fill all fields');
                        }  
                        
            
        }else{
            console.log('CRUD');
        }
    }


    const handleUpdate=()=>{
        setCurrentStep(1)
        setUpdate(true);
    }

    const handleFetch=(data)=>{
        if(props.settings.id){

            dispatch(updateProperties(data))
            dispatch(handleDisplayUpdateWindow(false))
        }else{
            dispatch(postProperties(data))
        }
        window.location.reload();
    }

    const keyMappings = {
        title: 'Property Title',
        type: 'Property Type',
        petFriendly: 'Pet Friendly',
        securitySystem: 'Security System',
        dateAvailable: 'Date Available',
    };

    const hadleDiplayUpdate =()=>{
        dispatch(handleDisplayUpdateWindow(false))
    }

    
  return (

    <div className={`flex    ${((props.settings.id))?'w-full bg-black bg-opacity-10':'bg-white' }`}>
    {(props.settings.sideBar)&&<Sidebar role={1}/>}

    {(props.settings.id && updateShow)&& <AiOutlineClose onClick={hadleDiplayUpdate} className=' fill-white text-3xl absolute right-5 top-5 cursor-pointer'/> }
    <div className='add-new-prop m-auto   h-screen  w-[90%] pt-8 gap-8'>
        <div className='w-[90%] bg-white min-h-[90%] max-h-[94%] overflow-y-auto  m-auto  p-20 pt-0  rounded-2xl border border-blue-300 shadow-indigo-300 shadow-lg'>
    
    <Stepper level={currentStep} />
    <form action="#" className='z-40  overflow-y-auto mt-20'>
       {(currentStep===1)&&(
        <>
        <fieldset className='border p-5 text-center rounded-lg mt-3'>
                <legend className='text-gray-500'>Property Information</legend>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Property Title</label>
                        <input name="propsTitle" id="propsTitle"  value={props.settings.id && data.title}  
                        onChange={(e) => setData({ ...data, title: e.target.value  })} type="text"  className=" select-auto block  p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50" placeholder="username.example" required="" />
                    </div>
                    <div>
                        <label htmlFor="property-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Property type</label>
                        <select   value={(props.settings.id && !data.type) ? PropertyDetails.type:data.type}  
                        onChange={(e)=>setData({...data,type:e.target.value })} name='property-type' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" 'required>
                            <option value={null}>-- Enter a type</option>   
                            <option value={"apartment"}>Apartment</option>
                            <option value={"house"}>House</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                        <input  value={props.settings.id && data.location}   
                        onChange={(e)=>setData({...data,location:e.target.value  })}    type="text" name="password" id="password" className=" capitalize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Soliman" required=""/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input  value={props.settings.id && data.address}   
                        onChange={(e)=>setData({...data,address:e.target.value  })}    type="text" name="password" id="password" className="capitalize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Soliman,Nabeul" required=""/>
                    </div>
                </div>
            
                <label htmlFor="desc-property" className=" text-left pl-48 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Property Description</label>
                <textarea  value={props.settings.id && data.description} 
                onChange={(e)=>setData({...data,description:e.target.value })} id="desc-property"  rows="4" className="block  p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>   
            </fieldset>
            
            <fieldset className='border p-5 text-center rounded-lg mt-3'>
                <legend className='text-gray-500'> Property Features </legend>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="property-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Furnished</label>
                        <select value={props.settings.id && data.furnished}  
                        onChange={(e) => setData({ ...data, furnished: !data.furnished })} name='property-type' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" 'required>
                            <option value={null}> -- According your property </option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="property-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parking</label>
                        <select  value={props.settings.id && data.parking}  
                        onChange={(e) => setData({ ...data, parking: !data.parking })}  name='property-type' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" 'required>
                            <option value={null}> -- According your property </option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="property-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pet Friendly</label>
                        <select  value={props.settings.id && data.petFriendly}  
                         onChange={(e) => setData({ ...data, petFriendly: !data.petFriendly })}  name='property-type' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" 'required>
                            <option value={null}>  -- According your property </option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="property-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Security System</label>
                        <select  value={props.settings.id && data.securitySystem} 
                        onChange={(e) => setData({ ...data, securitySystem: !data.securitySystem })}  name='property-type' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" 'required>
                            <option value={null}> -- According your property </option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                </div>
            </fieldset>
        </>
)}
                
                {(currentStep===2)&&(
        <>
                <fieldset className='border p-5 text-center rounded-lg mt-3'>
                <legend className='text-gray-500'>Property Information</legend>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                
                <div>
                    <label htmlFor="property-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Floor</label>
                    <select value={props.settings.id && data.floor}  onChange={(e)=>setData({...data,floor:e.target.value})} name='property-type' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" 'required>
                        <option value={0}>RC</option>
                        <option value={1}>1st</option>
                        <option value={2}>2nd </option>
                        <option value={3}>3rd</option>
                        <option value={4}>4th</option>
                        <option value={5}>5th</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="property-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Size</label>
                    <select value={props.settings.id && data.size}   onChange={(e)=>setData({...data,size:e.target.value })} name='property-type' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" 'required>
                        <option value={0}>S+0</option>
                        <option value={1}>S+1</option>
                        <option value={2}>S+2 </option>
                        <option value={3}>S+3</option>
                        <option value={4}>S+4</option>
                        <option value={5}>S+5</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="property-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bath Rooms</label>
                    <select value={props.settings.id && data.bathroom}   onChange={(e)=>setData({...data,bathroom:e.target.value })} name='property-type' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" 'required>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3 </option>
                    </select>
                </div>
                <div>
                    <label htmlFor="property-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bed Rooms</label>
                    <select value={props.settings.id && data.bedroom}   onChange={(e)=>setData({...data,bedroom:e.target.value })} name='property-type' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" 'required>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3 </option>
                        <option value={4}>4 </option>
                        <option value={5}>5 </option>
                    </select>
                </div>
                <div>
                    <label htmlFor="property-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Space</label>
                    <input value={props.settings.id && data.space}     onChange={(e)=>setData({...data,space:e.target.value })}  type='number' placeholder='XX m² 'className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   required/>
                </div>
            </div>
        </fieldset>
        <fieldset className='border p-5 text-center rounded-lg mt-3'>
            <legend>Amenities</legend>
        </fieldset>
               </>
                )}
        
                {currentStep === 3 && (
                    <fieldset className='border p-5 text-center rounded-lg mt-3'>
                        <legend className="text-gray-400">Price</legend>
                    <div className="grid grid-cols-2 pt-10">
                        <div >
                            <label htmlFor="rental-price" className="block mb-2 m-auto  font-semibold -ml-16 text-sm  text-gray-900 dark:text-white">Rental Price</label>
                            <div className="flex gap-5  justify-around items-center">
                                <input value={props.settings.id && data.price}     required onChange={(e)=>setData({...data,price:e.target.value })} type="Number"  name="rental-price" id="rental-price" className="z-50 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="600" required=""/>
                                <label className="pr-10 font-semibold text-blue-600">DT</label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="move-in-date" className="block mb-2 font-semibold text-sm  text-gray-900 dark:text-white">Move-In Date</label>
                            <div className="relative max-w-sm m-auto cursor-pointer">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                                </div>
                                <input value={props.settings.id && data.dateAvailable}  required onChange={(e)=>setData({...data,dateAvailable:e.target.value })}id="move-in-date" name="move-in-date" type="date" className="bg-gray-50 m-auto border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
                            </div>
                        </div>
                        </div>
                        <div className="pt-10 pb-10">                            
                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Utilities Included</h3>
                            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input value={(props.settings.id && !data.electricity) ? PropertyDetails.electricity:data.electricity}  checked={data.electricity} required onChange={(e) => setData({ ...data, electricity: !data.electricity })} id="electricity" type="checkbox"   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label htmlFor="electricity" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Electricity</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input value={(props.settings.id && !data.water) ? PropertyDetails.water:data.water} checked={data.water}  required onChange={(e) => setData({ ...data, water: !data.water })}  id="water" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label htmlFor="water" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Water</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input value={(props.settings.id && !data.gaz) ? PropertyDetails.gaz:data.gaz} checked={data.gaz}    required  onChange={(e)=>setData({...data,gaz: !data.gaz})}  id="gaz" type="checkbox"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label htmlFor="gaz" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gaz</label>
                                    </div>
                                </li>
                                <li className="w-full dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input value={(props.settings.id && !data.internet) ? PropertyDetails.internet:data.internet} checked={data.internet} required onChange={(e) => setData({ ...data, internet: !data.internet })}  id="internet" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label htmlFor="internet" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Internet</label>
                                    </div>
                                </li>
                            </ul>

                        </div>
                        
                    </fieldset>
                )}
                {   currentStep === 4 && (
                    // need the server here 
                    <fieldset className='border p-5 text-center rounded-lg mt-3'>
                        <legend>Photos</legend>
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6  ">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            {/* ... SVG path */}
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input  required onChange={(e)=>handleImageChange(e)}  id="dropzone-file" type="file" className="hidden"  />
                                </label>
                            </div>
                            {selectedImage && <img value={props.settings.id && data.photos[0]}    className="w-56 h-60 mt-2 m-auto " src={URL.createObjectURL(selectedImage)} alt="Selected" />}
                    </fieldset>
                )}
                {currentStep === 5 && (
                    <fieldset>
                        <legend className='border p-5 text-center rounded-lg mt-3'>Review</legend>
                                        
                        <table className="border-collapse w-full">
                        <tbody>
                            {Object.entries(data).filter(([key]) => key !== 'owner_id' && key !== 'id').map(([key, value]) => (
                                <tr key={key} className="border-b border-gray-300">
                                    <td className="py-2 pr-4 text-lg text-gray-600 capitalize w-40 ">{keyMappings[key] || key}</td>
                                    <td className="py-2 pl-4 text-lg text-gray-600  capitalize max-w-20 text-justify">{value === true ? 'Yes' : value === false ? 'No' : value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>




                    </fieldset>
                )}


    {(currentStep===5)
    ?
    <div className="flex justify-between">
        <Link to={`/dash-owner/${params.owner_id}`} type="submit" onClick={()=>handleFetch(data)}  className=" text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            IF YOU ARE SURE : Submit
        </Link>

        <Link  type="submit" onClick={handleUpdate}  className=" text-white mt-5 bg-yellow-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            I Want correct something
        </Link>
    </div>
        
    :
        <input type="button" onClick={handleCurrentStep} 
            value={`Next Step: ${nameSteps[currentStep]}`} 
            className=" text-white mt-5 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        </input>
    }
    </form>
    
        </div>
    </div>
   
    {(isDisplayedLogoutDialogue) &&  <LogoutConfirmation/>}
</div>
)
}

export default BasicInfos


// ((props.settings.id) && PropertyDetails.furnished)?'apartment':'house'