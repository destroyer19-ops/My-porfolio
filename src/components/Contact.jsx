import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-20'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#D4AE37]'>Contact</h1>
            <form action="https://getform.io/f/d98b9ed3-d5e7-44a6-9242-25478248047d" method="post" encType='muliport/form-data'>
                <div className='grid md:grid-cols-2 gap-4 py-2 w-full'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input type='text' name='name' className='border-2 rounded-lg p-3 flex border-gray-300 ' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Phone Number</label>
                        <input 
                        type='text' 
                        name='phone' 
                        className='border-2 rounded-lg p-3 flex border-gray-300 '/>
                    </div>

                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>E-mail</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type='email' name='email' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input type='text' name='subject' className='rounded-lg p-3 flex border-gray-300 border-2' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea 
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10' 
                    name='message'></textarea>
                </div>
                <button className='button bg-[#D4AE37] text-gray-100 w-full p-4 rounded-lg pt-4'>
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default Contact