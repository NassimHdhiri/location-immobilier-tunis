


import { Link } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleCurrentPage,handleRangePosts } from '../store/home';


function Pagination() {
  const dispatch = useDispatch();
  const { allHomes, filterRange,currentPage, isloading,filterLocation,nbrFilterLocation } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(handleCurrentPage(currentPage));
    dispatch(handleRangePosts());
  }, [currentPage, dispatch]);

  var nbrPosts=0;

 if(filterRange.length > 0) {
      nbrPosts=filterRange.length;
 }else {
      nbrPosts=allHomes.length;
}
  const nbrPages = Math.ceil(nbrPosts / 9);
  console.log(nbrPages);
  var pages=[]

 for (let i = 1; i <= nbrPages; i++) {
    pages.push(i);
}
  return (
<nav aria-label="Page navigation example" className='absolute -bottom-96 right-[40%]  m-auto'>
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

// // Pagination.js
// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux/es/hooks/useSelector';
// import {useDispatch} from '@reduxjs/toolkit'
// import { handleCurrentPage } from '../store/home';

// function Pagination(props) {

//   const dispatch = useDispatch();


//   const { 
//     allHomes,
//     currentPage,
//   }=useSelector((state)=>state.homes);



//   useEffect(() => {
//     dispatch(handleCurrentPage());
//   }, [currentPage]);

//   var nbrPages = Math.ceil(allHomes.length/9);


//   var pages=[]
//   for (let i = 1; i <= nbrPages; i++) {
//     pages.push(i);
//   }

//   return (
//     <div className='flex gap-2 justify-center items-center mb-20 mt-20 '>
//       <button onClick={() => dispatch(handleCurrentPage(currentPage - 1))} className='disabled:cursor-not-allowed opacity-75' disabled={currentPage===Math.min(...pages)}>pre</button>
//       {pages.map((item, key) => (
//         <button
//           className='ml-5 bg-slate-400 rounded-sm pl-2 pr-2 text-slate-50 text-lg'
//           onClick={() => dispatch(handleCurrentPage(item))}
//           key={key}
//         >
//           {`${item}`}
//         </button>
//       ))}
      
//       <button onClick={() => dispatch(handleCurrentPage(currentPage + 1))} className='  disabled:opacity-75 disabled:cursor-not-allowed' disabled={Math.max(...pages)===currentPage}>next</button>
      
      
//     </div>
//   );
// }

// export default Pagination;
