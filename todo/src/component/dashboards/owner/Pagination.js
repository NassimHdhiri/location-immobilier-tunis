



import { Link } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleCurrentPage,handleRangePosts } from '../../../store/dashOwner';


function Pagination() {

  const dispatch = useDispatch();
  const { allOwnerProperties,currentPage, isloading } = useSelector((state) => state.dashOwner);

  useEffect(() => {
    dispatch(handleCurrentPage(currentPage));
    dispatch(handleRangePosts());
  }, [currentPage, dispatch]);


  const nbrPages = Math.ceil(allOwnerProperties.length / 9);
  var pages=[]

 for (let i = 1; i <= nbrPages; i++) {
    pages.push(i);
}
  return (
<nav aria-label="Page navigation example" className=' absolute bottom-5 right-[40%] m-auto'>
  <ul className="inline-flex -space-x-px text-base h-10">
    <button onClick={() => dispatch(handleCurrentPage(currentPage - 1))}
      disabled={currentPage === 1} 
      className="flex disabled:cursor-not-allowed opacity-75 items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
      Previous
    </button>
      {pages.map((item) => (
            <button
              className='flex disabled:text-blue-600   disabled:bg-blue-50 items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              onClick={() => dispatch(handleCurrentPage(item))}
              key={item}
              disabled={currentPage === item} // Disable button for current page
            >
              {`${item}`}
            </button>
          ))}

    <button className="flex items-center disabled:opacity-75 disabled:cursor-not-allowed justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={() => dispatch(handleCurrentPage(currentPage + 1))}
        disabled={currentPage === nbrPages} >
        Next
    </button>
  </ul>
</nav>
  )
}

export default Pagination































// import React from 'react'
// import { Link } from 'react-router-dom'

// function Pagination() {
//   return (
// <nav aria-label="Page navigation example" className='absolute bottom-4'>
//   <ul className="inline-flex -space-x-px text-base h-10">
//     <li>
//       <Link to="#" className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</Link>
//     </li>
//     <li>
//       <Link to="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</Link>
//     </li>
//     <li>
//       <Link to="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</Link>
//     </li>
//     <li>
//       <Link to="#" aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</Link>
//     </li>
//     <li>
//       <Link to="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</Link>
//     </li>
//     <li>
//       <Link to="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</Link>
//     </li>
//     <li>
//       <Link to="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</Link>
//     </li>
//   </ul>
// </nav>
//   )
// }

// export default Pagination




// import { Link } from 'react-router-dom'
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { handleCurrentPage,handleRangePosts } from '../../../store/dashOwner';


// function Pagination() {
//   const dispatch = useDispatch();
//   const { allHomes, currentPage, isloading,filterLocation,nbrFilterLocation } = useSelector((state) => state.dashOwner);

//   useEffect(() => {
//     dispatch(handleCurrentPage(currentPage));
//     dispatch(handleRangePosts());
//   }, [currentPage, dispatch]);

//   var nbrPosts=0;

//   const nbrPages = Math.ceil(allHomes.length / 9);
//   console.log(nbrPages);
//   var pages=[]

// for (let i = 1; i <= nbrPages; i++) {
//     pages.push(i);
// }
//   return (
// <nav aria-label="Page navigation example" className='absolute -bottom-96 right-[40%]  m-auto'>
//   <ul className="inline-flex -space-x-px text-base h-10">
//     <button onClick={() => dispatch(handleCurrentPage(currentPage - 1))}
//       disabled={currentPage === 1} 
//       className="flex disabled:cursor-not-allowed opacity-75 items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//       Previous
//     </button>
//       {pages.map((item) => (
//             <button
//               className='flex items-center justify-center px-4 h-10 disabled:text-blue-400 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
//               onClick={() => dispatch(handleCurrentPage(item))}
//               key={item}
//               disabled={currentPage === item} // Disable button for current page
//             >
//               {`${item}`}
//             </button>
//           ))}

//     <button className="flex items-center disabled:opacity-75 disabled:cursor-not-allowed justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//         onClick={() => dispatch(handleCurrentPage(currentPage + 1))}
//         disabled={currentPage === nbrPages} >
//         Next
//     </button>
//   </ul>
// </nav>
//   )
// }

// export default Pagination


