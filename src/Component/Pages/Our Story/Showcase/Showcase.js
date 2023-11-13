import React from 'react'

const Showcase = () => {
  return (
    <div className=''>
    <div className=''>
        <div className=' h-full w-full'>
        <div className='bg-black opacity-70 absolute w-full  h-[603px]'></div>
            <div className='absolute flex h-[600px] w-full text-center items-center justify-center text-white'>
            <div className='m-auto'>
                          <h1 className='font-bold md:text-3 text-3xl lg:text-5xl'>The Story of AltSchool Africa</h1>
                          <p className='md:w-[60%] p-5 pb-10 text-1xl m-auto'>
                          An educational program designed to arm you with the 
                          skills and knowledge required to launch your tech 
                          career.
                          </p>
              </div>
            </div>
            <img className='w-full h-[603px] bg-cover object-cover' src="https://www.altschoolafrica.com/_next/static/images/reader-7061e74965a01450a6ecc4f085e008af.png" alt="Learning" />
        </div>
        </div>
</div>
  )
}

export default Showcase;