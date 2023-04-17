import React from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'


const BottomNav = () => {
  return (
    <nav className=" h-[10vh] fixed bottom-0 left-0 w-full bg-white border-t border-gray-300">
      <div className="mx-auto px-3 py-2 flex-1 gap-1 items-center flex justify-center">
        <a href="#" className="bg-[#454556] rounded-full shadow-lg shadow-gray-400 mx-2 cursor-pointer m-2 p-4 ease-in-out duration-150 hover:scale-110">
          <AiOutlineHome size={15} className='fill-white dark:fill-gray-500'/>
        </a>
        <a href="#" className="bg-[#454556] rounded-full shadow-lg shadow-gray-400 mx-2 cursor-pointer m-2 p-4 ease-in-out duration-150 hover:scale-110">
        <BsPerson size={15} className='fill-white' />
        </a>
        <a href="#" className="bg-[#454556] rounded-full shadow-lg shadow-gray-400 mx-2 cursor-pointer m-2 p-4 ease-in-out duration-150 hover:scale-110">
        <GrProjects size={15} className='fill-white' />
        </a>
        <a href="#projects" className='bg-[#454556] rounded-full shadow-lg shadow-gray-400 mx-2 cursor-pointer m-2 p-4 ease-in-out duration-150 hover:scale-110'>
            <AiOutlineProject size={15} className='fill-white' />
          </a>
          

          <a href="#contact" className='bg-[#454556] rounded-full shadow-lg shadow-gray-400 mx-2 cursor-pointer m-2 p-4 ease-in-out duration-150 hover:scale-110'>
            <AiOutlineMail size={15} className='fill-white' />
          </a>
      </div>
    </nav>  )
}

export default BottomNav