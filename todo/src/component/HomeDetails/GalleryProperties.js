import React, { useState } from 'react';
import { BsArrowLeftCircleFill,BsArrowRightCircleFill } from 'react-icons/bs';

function GalleryProperties() {
  const allThumbnails = [
    'condo-1.jpg',
    'condo-5.jpg',
    'cottage-1.jpg',
    'family-home-5.jpg',
    'house.png',
    'loft-1.jpg',
    'modern-home-1.png',
    'cottage-1.jpg',

    // ... Add more thumbnail URLs here
  ];

  const [mainImage, setMainImage] = useState("condo-1.jpg");
  const [showMore, setShowMore] = useState(false);
  const [firstIndex,setFirstIndex] = useState(0);
  const [lastIndex,setLastIndex] = useState(4);
  const [visibleThumbnails, setVisibleThumbnails] = useState(allThumbnails.slice(firstIndex, lastIndex));

        
        const handleThumbnailClick = (image) => {
            setMainImage(image);
        };


    const handleSlice=(index) => {
       
            if(index===1 && firstIndex>0){
                setFirstIndex(firstIndex-1);
                setLastIndex(lastIndex-1);
                setVisibleThumbnails(allThumbnails.slice(firstIndex, lastIndex));


            }else if(index===2 && lastIndex<=allThumbnails.length){
                setFirstIndex(firstIndex+1);
                setLastIndex(lastIndex+1);
                setVisibleThumbnails(allThumbnails.slice(firstIndex, lastIndex));

            }
    };
    

    if(!allThumbnails.length%2 === 0){
        allThumbnails.push(allThumbnails[0]);
    }

  return (
    <div className="flex items-center mt-8 gap-4   w-[75%] min-h-400  max-h-[500px] ml-36 no-select">
      
      <div className='relative h-[320px] flex items-center gap-2 '>
        <div className="grid     grid-rows-7 gap-4 max-w-44 ">
        {       (firstIndex!==0) &&   <BsArrowLeftCircleFill onClick={()=>handleSlice(1)} disabled={lastIndex>allThumbnails.length} className=' rotate-90 absolute hover:cursor-pointer fill-black text-3xl  disabled:opacity-70 disabled:cursor-not-allowed left-8 -top-16'/>}

            {visibleThumbnails.map((thumbnail, index) => (
            <div className="h-20  " key={index} onClick={() => handleThumbnailClick(thumbnail)}>
                <img width={50} height={50} className=" w-32  rounded-lg no-select hover:cursor-pointer" src={process.env.PUBLIC_URL+`/images/${thumbnail}`} alt={`Thumbnail ${index}`} />
            </div>
            ))}
            {(lastIndex<=allThumbnails.length) &&  <BsArrowRightCircleFill onClick={()=>handleSlice(2)} disabled={firstIndex<=0}  className=' rotate-90 absolute hover:cursor-pointer fill-black text-3xl  disabled:opacity-70 disabled:cursor-not-allowed  left-8 -bottom-12' />}      

            </div>
        </div>
        <div id="picture-big" className=' relative w-full h-96 ml-24 -mt-6'>
            <img  width={800}    className=" align-center absolute top-0  shadow-md shadow-indigo-200 w-[90%]  rounded-lg selection:none" src={process.env.PUBLIC_URL+`/images/${mainImage}`} alt="Main" />
        </div> 
    </div>
  );
}

export default GalleryProperties;
