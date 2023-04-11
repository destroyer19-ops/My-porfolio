import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import backgroundImage from '../assets/workspace.jpg'
import avatar from '../assets/avatar.jpg'
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function HeroSection() {
    return (
        <div className='flex flex-col '>
        <div id='main'>

            <img className='h-screen w-full absolute left-0 object-cover object-right scale-x-[-1]' src={backgroundImage} alt="techWorkspace" srcset="" />
            <div className='w-full h-screen absolute left-0 bg-white/80 dark:bg-black/80'></div>
            <div className=' max-w-[700px] m-auto w-full relative 
                flex text-center py-56 md:pl-12 items-center 
                lg:items-start md:items-start justify-center 
                flex-col'>

                <h1 className='text-4xl sm:text-5xl mb-1 
            md:mb-3 text-gray-800 dark:text-white font-bold font-inter'>
                    Hi, I'm <span className='text-blue-700 dark:text-[#D4AE37]'>Alvin</span>
                </h1>
                <h2 className='flex sm:text-center sm:items-center sm:text-3xl text-xl pt-4 text-gray-500 dark:text-white'>I'm a
                    <TypeAnimation
                        sequence={[
                            'Creative Frontend Developer', // Types 'Creative Frontend Developer'
                            2000, // Waits 1s
                            'Tech Enthusiast', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            'Lifelong Learner', // Types 'Three' without deleting 'Two'
                            2000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
                    />

                </h2>
                <div className='justify-between flex pt-6 max-w-[200px] w-full'>
                    <FaTwitter className='cursor-pointer dark:fill-white' size={20} />
                    <FaInstagram className='cursor-pointer dark:fill-white' size={20} />
                    <FaLinkedinIn className='cursor-pointer dark:fill-white' size={20} />
                </div>
                {/* <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>
                        As a highly motivated and detail-oriented frontend
                        developer.
                        I am excited to apply my passion for software
                        development
                        and creative problem-solving skills to an internship
                        position. With a willingness to learn and a strong 
                        team player mindset, I am eager to contribute to the 
                        success of the team while gaining valuable experience 
                        in the tech industry.
                    </p> */}
                {/* <a href="#" className='inline-block px-8 py-3 border 
                    border-transparent text-base font-medium rounded-md 
                    bg-indigo-600 hover:bg-indigo-700 text-white md:text-md'>Contact Me</a> */}
            </div>
            
        </div>
        <div
        className='invisible lg:visible md:visible lg:top-44 md:top-60 md:right-8 lg:w-64 lg:h-64 md:w-40 md:h-40 mb-10 rounded-full place-items-end justify-center overflow-hidden
        absolute ' style={{ border: '#D4AE37 solid 5px' }}
    >
        <img
            src={avatar}
            alt="Avatar"

            className='h-full w-full mt-10 relative inset-0 object-contain grayscale hover:grayscale-0 transition ease-in-out delay-100  cursor-pointer scale-150'
        />
    </div>
    </div>

    )
}

export default HeroSection