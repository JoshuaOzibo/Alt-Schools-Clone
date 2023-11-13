import React from 'react';

import Typed from "react-typed";
const TypesItems = <Typed
    className='text-[#01b3ef] text-1xl font-bold'
      strings={[
      ' School of Engineering.',
      'School of Product.',
      'School of Data.']}
      typeSpeed={70}
      backSpeed={70}
      loop >
</Typed>

const Showcase = () => {
  return (
    <div className=''>
        <div className=''>
            <div className=' h-full w-full'>
            <div className='bg-black opacity-70 absolute w-full  h-[603px]'></div>
                <div className='absolute flex h-[600px] text-center items-center justify-center text-white'>
                    <div className='space-y-5'>
                        <h1 className='font-bold m-auto w-[80%] md:text-4xl text-2xl lg:text-6xl'>Kickstart your tech career in <span className='text-gray-500'>{TypesItems}</span> </h1>
                        <p className='md:w-[60%] p-5 pb-10 md:text-2xl font-medium m-auto'>Learn the in-demand skills required to take you from beginner
                            to industry ready in 12 months. No degree
                            or prior tech experience required.
                        </p>
                        
                    </div>
                </div>
                <img className='w-full h-[603px] bg-cover object-cover' src="https://www.altschoolafrica.com/_next/static/images/reader-7061e74965a01450a6ecc4f085e008af.png" alt="Learning" />
            </div>
            </div>
    </div>
  )
}

export default Showcase