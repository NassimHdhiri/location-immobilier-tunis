import React, { useEffect, useState } from 'react';
import SingleHouse from './SingleHouse';
import Pagination from './Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { handleFilterON, getHome , handleRangePosts} from '../store/home';
import { Link } from 'react-router-dom';


function ListingHouses() {
  const dispatch = useDispatch();
  const { rangePosts,filterOn,filterRange } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(getHome());
    dispatch(handleRangePosts());
  }, [dispatch]);


  const filterOnOff=()=>{
      dispatch(handleFilterON(false));
  }

      // Add a state to manage whether data is loaded or not
  const [dataLoaded, setDataLoaded] = useState(false);
  
    useEffect(() => {
    // Check if rangePosts or filterRange have data
    if ((filterOn && filterRange.length > 0) || (!filterOn && rangePosts.length > 0)) {
      setDataLoaded(true);
    }
  }, [filterOn, filterRange, rangePosts]);

  useEffect(() => {
    // This useEffect will trigger whenever filterOn changes
    (!filterOn && rangePosts.length > 0) && setDataLoaded(true); // Reset dataLoaded to false
  }, [filterOn])

    return (
    <>
      {(filterOn)&& 
        <span className='p-5 bg-red-400 hover:cursor-pointer '  onClick={filterOnOff}>click Me ! </span>
      }  
      <div className='grid grid-cols-3 p-2 pr-1 pt-0   grid-flow-row w-[700px] m-auto  pb-10 gap-y-7'>
      {dataLoaded ? (
          (filterOn ? filterRange : rangePosts)
            .map((item, key) => (
                <SingleHouse cle={item} key={key} />
            ))
        ) : (
          'Loading...'
        )}
      </div>
      <Pagination />
    </>
  );
}

export default ListingHouses;





// import React, { useEffect, useState } from 'react';
// import Pagination from './Pagination';
// import SingleHouse from './SingleHouse';
// import BlockPosts from './BlockPosts';
// import { useSelector } from 'react-redux/es/hooks/useSelector';
// import { handleCurrentPage } from '../store/home';
// import {useDispatch} from '@reduxjs/toolkit' 

// function ListingHouses(props) {


//   const { 
//           allhomes,
//           isloading,
//           currentPage,
//           postsPerPage,
//           firstPost,
//           lastPost,
//           rangePosts
//         }=useSelector((state)=>state.homes);


//   return (
//     <>
//       <div className='grid grid-cols-3 grid-flow-row w-[700px] m-auto pt-10 pb-10 gap-y-7'>
//         {rangePosts.map((item, key) => {
//           return <SingleHouse cle={item} key={key} />;
//         })}
//       </div>
//       <Pagination/>
//     </>
//   );
// }

// export default ListingHouses;










// import React, { useEffect, useState } from 'react';
// import Pagination from './Pagination';
// import SingleHouse from './SingleHouse';
// import BlockPosts from './BlockPosts';
// import { useSelector } from 'react-redux/es/hooks/useSelector';
// import { handleCurrentPage } from '../store/home';
// import { Dispatch } from 'react';

// function ListingHouses(props) {



//   const {allhomes,isloading,currentPage,postsPerPage,first}=useSelector((state)=>state.homes);


//   const Array = [];

//   for (let i = 1; i < 100; i++) {
//     Array.push("item " + i);
//   }

//   const [currentPage, setCurrentPage] = useState(1);
//   const [lastPostIndex, setLastPostIndex] = useState(9);
//   const [firstPostIndex, setFirstPostIndex] = useState(1);
//   const [housePerView, setHousePerView] = useState(9);
//   const [rangePosts, setRangePosts] = useState(Array.slice(0, 9)); // Initialize rangePosts here

//   var nbrPages = Math.ceil(Array.length / 9);

//   useEffect(() => {
//     console.log('rangePosts updated:', rangePosts);
//   }, [rangePosts]);

//   // const handleCurrentPage = (item) => {
//   //   setCurrentPage(item);
//   //   setLastPostIndex(item * housePerView);
//   //   setFirstPostIndex(item * housePerView - housePerView + 1);
//   //   setRangePosts(Array.slice(item * housePerView - housePerView, item * housePerView)); // Update rangePosts here
//   // };

//   return (
//     <>
//       <div className='grid grid-cols-3 grid-flow-row w-[700px] m-auto pt-10 pb-10 gap-y-7'>
//         {rangePosts.map((item, key) => {
//           return <SingleHouse cle={item} key={key} />;
//         })}
//       </div>
//       <Pagination pages={nbrPages} currentP={handleCurrentPage} lastPostIndex={lastPostIndex}/>
//     </>
//   );
// }

// export default ListingHouses;

