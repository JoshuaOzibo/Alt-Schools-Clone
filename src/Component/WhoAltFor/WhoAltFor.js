import React from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
//#01427a
  //#01b3ef

const WhoAltFor = () => {
  return (
    <div className='py-10 w-full overflow-hidden bg-[#01427a] text-white'>
        <div>
        <motion.h3 initial={{x: 40, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{delay: 0.5}} className='text-center md:text-3xl text-2xl lg:text-6xl pb-10'>WHO IS ALTSCHOOL AFRICA FOR?</motion.h3>
            <div className='md:flex w-[60%] justify-between items-center m-auto'>
                
            <motion.img initial={{scale:0.4, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{delay: 0.6}} className='rounded-full m-auto border-2 border-[#01b3ef] md:w-[50%]' src="https://www.altschoolafrica.com/_next/static/images/smiling_guy-bc861dcf98f91a14d2484b7ccdd5dfc3.png" alt="whofor" />

                <div className='md:w-[40%] w-full mt-5 m-auto space-y-5'>
                    <motion.h2 initial={{x: 40, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{delay: 0.6}} className='md:text-3xl text-2xl lg:text-6xl'>Too busy? No problem</motion.h2>
                    <motion.p initial={{x: 40, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{delay: 0.6}} className='pb-6'> We understand that you might have a 
                        lot of commitments and as such we've 
                        designed our courses and curriculum 
                        to work around you and your commitments
                    </motion.p>
                    <motion.button initial={{x: 40, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{delay: 0.6}} className='px-6 py-3 group relative rounded-lg hover:text-[#fff] text-white bg-[#01b3ef]' href="##">
                      
                      <div class="absolute inset-0 w-0 bg-[#0092c3] rounded-md transition-all duration-[300ms] ease-out group-hover:w-full"></div>
                        <Link to="/OurStory" class="relative text-[#01427a] group-hover:text-white">View All Schools</Link>
                      </motion.button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoAltFor