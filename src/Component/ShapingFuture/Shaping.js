import React from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
//#01427a
  //#01b3ef
const Shaping = () => {
  return (
    <div className=' mt-10 pb-10 overflow-hidden'>
        <div className='lg:w-[90%] w-full m-auto md:flex flex-row-reverse items-center justify-between'>
            <div className='md:w-[64%] lg:w-[70%] pt-10'>
                <motion.img initial={{scale: 0.1, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{delay: 0.3}} className=' relative rounded-full border-[#01b3ef] border-2  w-[65%] m-auto' src="https://www.alxafrica.com/wp-content/uploads/2023/01/img-about.png" alt="shapimg" />
            </div>

            <div className='lg:w-[60%] pl-2 w-[90%] md:text-start text-center m-auto pt-10'>
                <motion.h2 initial={{x:-50, opacity: 0}} whileInView={{x:0, opacity: 1}} transition={{delay: 0.6}} className='lg:text-6xl md-text-3 text-2xl text-center text-[#01427a] font-bold pb-10'>Shaping the Future of Work</motion.h2>

                <div className='space-y-5'>
                    <motion.p initial={{y:20, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{delay: 0.6}}>
                        As the name suggests, AltSchool Africa is different from the 
                        traditional institutions. We are a school for individuals 
                        looking to gain technical skills and kickstart a career in Tech. 
                        AltSchool Africa takes a non-traditional approach to learning by teaching 
                        courses directly connected with the selected track.
                    </motion.p>
                    <motion.p initial={{y:20, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{delay: 0.7}} className='pb-7'> 
                        Our robust curriculum which combines theoretical knowledge with 
                        practical real world applications is guaranteed to transform anyone 
                        into a top Software Engineer within one year.
                    </motion.p>

                    <motion.button initial={{x:40, opacity: 0}} whileInView={{x:0, opacity: 1}} transition={{delay: 0.6}} className=' group px-10 relative hover:text-[#fff] text-white bg-[#01b3ef] py-4 rounded-lg'>
                        
                        <div class="absolute inset-0 w-0 bg-[#0092c3] rounded-md transition-all duration-[300ms] ease-out group-hover:w-full"></div>
                        <Link to="/OurStory" class="relative text-[#01427a] group-hover:text-white">Find Out More</Link>
                    </motion.button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shaping;