import React from 'react'

function SectionTitle({children, id}) {
  return (
    <h1 id={id && id}
    className='text-4xl font-bold mb-5 text-center text-[#D4AE37]
    dark:text-indigo-500'>
        {children}
    </h1>
    
  )
}

export default SectionTitle