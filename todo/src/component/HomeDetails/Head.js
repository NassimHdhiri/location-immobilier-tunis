import React, { useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai';
import { BsShare } from 'react-icons/bs';
import { MdFavoriteBorder,MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Head(props) {
    const navigate = useNavigate();
    const location = useLocation();

    const [favoriteOn,setFavoriteOn] = useState(false);

  return (
    <div className='w-full m-auto p-9 '>
        <Link onClick={() => navigate(-1)} className='ml-2 flex gap-1 items-center text-blue-500 text-md'>
            <AiOutlineLeft/>
            {`Back to ${(location.pathname.includes('/find-props'))?'Find props':'dashboard'}`}
        </Link>
        <h2 className=' text-4xl  pt-8 pl-20 font-semibold capitalize '>{props.data.title}</h2>
        <div className='flex justify-between items-center'>
            <h4 className='text-gray-500 -mt-2 pl-20'>{props.data.address}</h4>
            <div className='flex gap-5'>
                <span className='cursor-pointer text-white bg-blue-600 p-2 rounded-lg flex items-center gap-2'><BsShare/>  Share</span>
                <span className='cursor-pointer text-white bg-blue-600 p-2 rounded-lg flex items-center gap-2' onClick={()=>{setFavoriteOn(!favoriteOn)}}>{(!favoriteOn)?<MdFavoriteBorder className='text-lg'/>:<MdFavorite className=' text-lg fill-red-600'/> } Favorite</span>
            </div>
        </div>

    </div>
  )
}

export default Head