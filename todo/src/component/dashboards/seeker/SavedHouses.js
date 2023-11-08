import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavProperties ,getFavorites} from '../../../store/dashRetailer'
import { Link, useParams } from 'react-router-dom';

function SavedHouses() {
    
    const {userFavorites,favProperties,isLoading} = useSelector((state)=>state.dashRetailer);
    const dispatch=useDispatch();
    const {id}=useParams();


    useEffect(() => {
        dispatch(getFavorites(id));
    }, [dispatch, id]);
    
    useEffect(() => {
        console.log(userFavorites)
        // Dispatch getFavProperties here when userFavorites changes
        if (userFavorites.length > 0 ) {
            console.log('User Favorites:', 'updated');  
            dispatch(getFavProperties(userFavorites));
        }
    }, [dispatch, userFavorites]);
    
    
    
  return (
    <>
    <div className="z-100 relative overflow-x-auto  sm:rounded-lg w-[90%] border-t-2 border-t-sky-500 shadow-lg shadow-slate-400 shadow-t- ">
        <table className="w-full mt-52 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        property name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                        status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
            {
            !isLoading 
            ? (
                ( favProperties.length>0 )
                ?
                favProperties.map((item, key) => (
            <tr key={key} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 
                <Link to={`/dash-retailer/${id}/${item.id}`} >
                 {item.title}
                 </Link>
                </th>
                <td className="px-6 py-4">
                {item.dateAvailable} 
                </td>
                <td className="px-6 py-4">
                {item.type} 
                </td>
                <td className="px-6 py-4">
                {`${item.price} TND` } 
                </td>
                <td className="px-6 py-4">
                    <div className='flex gap-6 m-auto'>
                    {/* onClick={()=>handleDelete(item.id)} */}
                        <button   to="#" className=" z-40 font-medium text-red-600 underline dark:text-blue-500 hover:underline">
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
            ))
                :
                <tr className=' text-center  h-96 w-full'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <span  className=' absolute left-[42%] top-[42%] text-2xl'>No properties found !</span>
                </tr>
        ) : (
            <tr>
                <td colSpan="5" className='text-center'>Loading...</td>
            </tr>
        )
    }
    
            </tbody>
        </table> 
    </div>
                {/* {(isDisplayed) && <DeleteConfirmation/>} */}
    </>
)
}

export default SavedHouses

