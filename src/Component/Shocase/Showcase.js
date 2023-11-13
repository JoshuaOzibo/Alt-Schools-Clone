import React from 'react'
import Typed from "react-typed";
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const Showcase = () => {
    const TypesItems = <Typed
    className='text-[#01b3ef] text-1xl font-bold'
      strings={[
      ' Product Design.',
      'Product Marketing.',
      'Product Management.',
      'Software Engineering.',
      'Data Analysis.']}
      typeSpeed={70}
      backSpeed={70}
      loop >
</Typed>

//#01427a
  //#01b3ef

  return (
    <div className='overflow-hidden'>
        <div className=''>
            <div className=' h-full w-full'>
            <div className='bg-black opacity-70 absolute w-full  h-[700px]'></div>
                <div className='absolute flex h-[700px] text-center items-center justify-center text-white'>
                    <div className='space-y-5'>
                        <motion.h1 initial={{scale: 0.8, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{delay: 0.6}} className='font-bold mt-16 m-auto w-[80%] md:text-4xl text-2xl lg:text-6xl'>Kickstart your tech career in <span className='text-gray-500'>{TypesItems}</span> </motion.h1>
                        <motion.p initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.6}} className='md:w-[60%] p-5 pb-10 md:text-2xl font-medium m-auto'>Learn the in-demand skills required to take you from beginner
                            to industry ready in 12 months. No degree
                            or prior tech experience required.
                        </motion.p>

                        <motion.a initial={{opacity: 0, scale: 0.6}} whileInView={{opacity: 1, scale: 1}} transition={{delay: 0.6}} href="##" className='px-8 group relative py-4 hover:text-[#fff] rounded-md bg-[#01b3ef]'>
                            <div class="absolute inset-0 w-0 bg-[#0092c3] rounded-md transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <Link to="/Schools" class="relative text-[#01427a] group-hover:text-white">View Schools</Link>
                        </motion.a>
                        <motion.p initial={{opacity: 0, scale: 0.6}} whileInView={{opacity: 1, scale: 1}} transition={{delay: 0.6}}>Learn in-demand tech skills for just $1 a day</motion.p>
                    </div>
                </div>
                <img className='w-[100%] h-[700px] bg-cover object-cover' src="https://www.altschoolafrica.com/_next/static/images/reader-7061e74965a01450a6ecc4f085e008af.png" alt="Learning" />
            </div>
            </div>
    </div>
  )
}

export default Showcase