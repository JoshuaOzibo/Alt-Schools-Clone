import React from 'react'

const Showcase = () => {
  return (
    <div className=''>
        <div className=''>
            <div className='relative h-[700] w-full'>
            <div className='bg-black opacity-70 absolute w-full  h-[700px]'></div>
                <div className='absolute flex h-[600px] w-full text-center items-center justify-center text-white'>
                    <div className='space-y-5 flex justify-center items-center w-full m-auto'>
                        <h1 className='font-bold md:w-[70%] w-[95%] lg:text-6xl md:text-4xl text-3xl mt-20'>High quality tech education at an affordable cost</h1>
                    </div>
                </div>
                <img className='w-full h-[700px] bg-cover object-cover' src="https://images.pexels.com/photos/4099099/pexels-photo-4099099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Learning" />
            </div>
            </div>
    </div>
  )
}

export default Showcase