import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'
import avatar from '../assets/avatar.jpg'


const SideNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <div >
      <AiOutlineMenu
        onClick={handleNav}
        className='absolute rounded-md
           fill-white scale-125 hover:scale-150 
           h-6 w-5 top-4 left-4 z-[99] md:hidden  
           ease-in-out cursor-pointer'
      />
      {
        nav ? (
          <div 
            className=' fixed w-full h-screen 
             bg-black/60 flex flex-col justify-center items-center z-20'>
            <div
              className='visible mb-10 w-40 h-40 border-20 border-yellow-400 rounded-full justify-center overflow-hidden
                relative ' style={{ width: '180px', height: '180px' }}
            >
              <img
                src={avatar}
                alt="Avatar"
                srcset=""
                className='h-full w-full mt-10 absolute inset-0 object-contain grayscale hover:grayscale-0 transition ease-in-out delay-100  cursor-pointer scale-150'
              />
            </div>
            <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center
            items-center bg-gray-100 rounded-full shadow-lg
            shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110
            ease-in duration-200'>
              <AiOutlineHome size={20}/>
              <span className='pl-4'>Home</span>
            </a>
            <a onClick={handleNav} href='#works' className='w-[75%] flex justify-center
            items-center bg-gray-100 rounded-full shadow-lg
            shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110
            ease-in duration-200'>
              <GrProjects size={20}/>
              <span className='pl-4'>Work</span>
            </a>
            <a onClick={handleNav} href='#projects' className='w-[75%] flex justify-center
            items-center bg-gray-100 rounded-full shadow-lg
            shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110
            ease-in duration-200'>
              <AiOutlineProject size={20}/>
              <span className='pl-4'>Projects</span>
            </a>
            <a onClick={handleNav} href='#resume' className='w-[75%] flex justify-center
            items-center bg-gray-100 rounded-full shadow-lg
            shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110
            ease-in duration-200'>
              <BsPerson size={20}/>
              <span className='pl-4'>Resume</span>
            </a>
            <a onClick={handleNav} href='#contact' className='w-[75%] flex justify-center
            items-center bg-gray-100 rounded-full shadow-lg
            shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110
            ease-in duration-200'>
              <AiOutlineMail size={20}/>
              <span className='pl-4'>Contact</span>
            </a>
          </div>
        ) : (
          ''
        )
      }

      <div className='md:block hidden fixed top-[25%] z-10'>

        <div className='flex flex-col'>
          <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300'>
            <AiOutlineHome size={20} />
            
          </a>
          <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300'>
            <GrProjects size={20} />
          </a>
          <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300'>
            <AiOutlineProject size={20} />
          </a>
          <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300'>
            <BsPerson size={20} />
          </a>

          <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300'>
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SideNav