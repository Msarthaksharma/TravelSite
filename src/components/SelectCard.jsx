import React from 'react'

const SelectCard = (props) => {
  return (
    <div className='relative'>
        <img className='w-full h-full object-cover' src={props.bg} alt='/'/>
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
            <p className='left-4 bottom-4 text-white font-bold text-xl absolute'>{props.text}</p>
        </div>
    </div>
  )
}

export default SelectCard