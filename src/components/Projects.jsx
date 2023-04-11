import React from 'react'
import ProjectItem from './ProjectItem'
import ecommerceImg from '../assets/ecommerce.png'

const Projects = () => {
    return (
        <div id='projects' className='  max-w-[1040px] m-auto md:pl-20 p-4 py-20'>
            <h1 className=' font-bold text-center text-4xl text-[#D4AE37]'>Projects</h1>
            <p className='text-center py-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                A, eligendi ipsam quia ullam saepe minus rem tempora,
                autem fugit aspernatur ipsum, asperiores eveniet
                explicabo repudiandae? Fugit, similique quod. Impedit,
                nostrum?
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>

                <ProjectItem img={ecommerceImg} title='Ecommerce App'/>
                <ProjectItem img={ecommerceImg} title='Ecommerce App'/>
                <ProjectItem img={ecommerceImg} title='Ecommerce App'/>
                <ProjectItem img={ecommerceImg} title='Ecommerce App'/>
                            </div>
        </div>
    )
}

export default Projects