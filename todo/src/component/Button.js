import React from 'react'

function Button(props) {
  return (
    <button className=' bg-black text-slate-200   hover:text-white ml-4 w-full p-1 hover:drop-shadow-sm'>
        {props.children}
    </button>
  )
}

export default Button