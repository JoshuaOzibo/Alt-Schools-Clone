import React from 'react';
import {motion} from 'framer-motion';
import NumberCounter from './NumberCounter/NumberCounter';

import NumberCounter2 from './NumberCounter/NumberCounter2';
import NumberCounter3 from './NumberCounter/NumberCounter3';
import NumberCounter4 from './NumberCounter/NumberCounter4';
//#01427a
  //#01b3ef

//   <div className="text-center">
//         <h1 className="text-4xl font-semibold mb-4">Number Counter</h1>
//         <NumberCounter targetNumber={1000} /> {/* Change the target number */}
//       </div>

const AltNum = () => {
  return (
    <div className='bg-[#01427a] py-20 p-10'>
        <div className='md:flex md:space-y-0 space-y-5 justify-center text-center md:space-x-5'>
            <div className='flex space-x-5'>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.5}} className='w-[80%] space-y-3 border-r'>
                    <h1 className='font-bold lg:text-6xl md:text-4xl text-[#01b3ef] text-2xl'><NumberCounter targetNumber={80} /></h1>
                    <p className='w-[55%] font-medium m-auto text-white'>ALT graduates since 2021</p>
                </motion.div>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.7}} className='w-[80%] space-y-3 md:border-r'>
                    <h1 className='font-bold lg:text-6xl md:text-4xl text-2xl text-[#01b3ef]'> <NumberCounter2 targetNumber={85} /></h1>
                    <p className='w-[55%] m-auto font-medium text-white'>6-month employment rate for ALT graduates</p>
                </motion.div>
            </div>

            <div className='flex space-x-5'>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.9}} className='w-[80%] space-y-3 border-r'>
                    <h1 className='font-bold lg:text-6xl md:text-4xl text-2xl text-[#01b3ef]'><NumberCounter3 targetNumber={93}/></h1>
                    <p className='w-[55%] m-auto font-medium text-white'>graduate satisfaction score</p>
                </motion.div>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 1.1}} className='w-[80%] space-y-3 md:border-r'>
                    <h1 className='font-bold lg:text-6xl md:text-4xl text-2xl text-[#01b3ef]'><NumberCounter4 targetNumber={85} /></h1>
                    <p className='w-[55%] m-auto font-medium text-white'>global demand for tech professionals by 2030</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default AltNum