import React from 'react'
import './HeroSection.css'
import { TypeAnimation } from 'react-type-animation'
import Vector1 from '../assets/Vector1.png'
import Vector2 from '../assets/Vector2.png'
import me from '../assets/me2.png'
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import FloatingDiv from './FloatingDiv'
import Crown from '../assets/crown.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'

function HeroSection() {
    
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span className='dark:text-white'>Hi! I Am</span>
                    <span>Alvin</span>
                    <span className='h-[10vh]'>I'm <TypeAnimation
                        sequence={[
                            'a frontend developer!!! ', // Types 'Creative Frontend Developer'
                            2000, // Waits 1s
                            'with high experience in web design and development.',
                            2000,
                            'passionate about technology. ', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            'constantly striving to learn more.', // Types 'Three' without deleting 'Two'
                            2000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
                    />
                    </span>
                </div>
                <button className="button i-button">Say Hi</button>
                <div className="i-icons">
                    <img src={github} alt=""/>
                    <img src={instagram} alt=""/>
                    <img src={linkedin} alt=""/>

                </div>
            </div>

            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={me} alt="" />
                <div style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </div>
                {/* blur divs */}
                <div className="blur"
                    style={{ background: "rgb(238 210 255)" }}>
                </div>
                <div className="blur"
                    style={{
                        background: '#c1f5ff',
                        top: '17rem',
                        width: '21rem',
                        left: '-9rem'
                    }}>

                </div>
            </div>
        </div>


        // <div className='flex flex-col '>
        //     <div id='main'>
        //         <div className="h-64 absolute  bg-yellow-500 clip-path-polygon">
        //             This is an irregular shape.
        //         </div>

        //         <div className=' max-w-[700px] m-auto w-full relative 
        //                 flex text-center py-56 md:pl-12 items-center 
        //                 lg:items-start md:items-start justify-center 
        //                 flex-col'>

        //             <h1 className='text-4xl sm:text-5xl mb-1 
        //             md:mb-3 text-gray-800 dark:text-white font-bold font-inter'>
        //                 Hi, I'm <span className='text-blue-700 dark:text-[#D4AE37]'>Alvin</span>
        //             </h1>
        //             <h2 className='flex sm:text-center sm:items-center sm:text-3xl text-xl pt-4 text-[#007bff] dark:text-white'>I'm a

        //             </h2>
        //             <div className='justify-between flex pt-6 max-w-[200px] w-full'>
        //                 <FaTwitter className='cursor-pointer fill-[#28a745] dark:fill-white' size={20} />
        //                 <FaInstagram className='cursor-pointer dark:fill-white' size={20} />
        //                 <FaLinkedinIn className='cursor-pointer dark:fill-white' size={20} />
        //             </div>
                    // {/* <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>
                    //             As a highly motivated and detail-oriented frontend
                    //             developer.
                    //             I am excited to apply my passion for software
                    //             development
                    //             and creative problem-solving skills to an internship
                    //             position. With a willingness to learn and a strong 
                    //             team player mindset, I am eager to contribute to the 
                    //             success of the team while gaining valuable experience 
                    //             in the tech industry.
                    //         </p> */}
                    // {/* <a href="#" className='inline-block px-8 py-3 border 
                    //         border-transparent text-base font-medium rounded-md 
                    //         bg-indigo-600 hover:bg-indigo-700 text-white md:text-md'>Contact Me</a> */}
        //         </div>

        //     </div>
        //     <div
        //         className='invisible lg:visible md:visible lg:top-44 md:top-60 md:right-8 lg:w-64 lg:h-64 md:w-40 md:h-40 mb-10 rounded-full place-items-end justify-center overflow-hidden
        //         absolute ' style={{ border: '#007bff solid 5px' }}
        //     >
        //         <img
        //             src={me}
        //             alt="Avatar"
        //             className='h-full w-full mt-10 relative inset-0 object-contain grayscale hover:grayscale-0 transition ease-in-out delay-100  cursor-pointer scale-150'
        //         />
        //     </div>
        // </div>

    )
}

export default HeroSection