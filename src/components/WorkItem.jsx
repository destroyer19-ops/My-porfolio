import React from 'react'
// import imgUrl from '../assets/Grace-stores.png'

function WorkItem({imgUrl, title, details}) {
  return (
    <ul src={imgUrl} alt={title} className=' flex flex-col md:flex-row relative border-1 border-stone-200 '>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-2 font-semibold text-white rounded-md bg=[#001b5e]'>{title}</span>
          <span> {imgUrl} </span>
          <span>{details}</span>
        </p>
      </li>
      
      </ul>
    
    
  )
}

export default WorkItem