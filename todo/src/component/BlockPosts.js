import React from 'react'
import SingleHouse from './SingleHouse';

function BlockPosts(props) {
 
  return (
    <div className='h-[400px] flex flex-row flex-wrap'>
        {
            props.range.map((item,key)=>{
                return <SingleHouse cle={key} />;
            })
        }
    </div>
  )
}

export default BlockPosts