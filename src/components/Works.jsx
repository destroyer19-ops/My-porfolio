import React from 'react'
import SectionTitle from './SectionTitle'
import WorkItem from './WorkItem'
// import graceImg from '../assets/Grace-stores.png'
import works from '../data/works'

function Works() {
  return (
    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-20'>
        <SectionTitle id='works'>Recent Works</SectionTitle>
        <div>
          {works.map(work => (
            <WorkItem
            key={work.title}
            title={work.title}
            imgUrl={work.imgUrl}
          details={work.details}
            />
          ))
          }
            {/* {works.map(work => (
                <WorkItem 
                key={work.title}
                imgUrl={work.imgUrl}
                text={work.text}
                ></WorkItem>
            ))
            } */}
            <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Incidunt vero corporis 
              iusto aspernatur numquam voluptatum odio,
              quod ducimus autem molestiae.</p>
        </div>
    </div>
  )
}

export default Works