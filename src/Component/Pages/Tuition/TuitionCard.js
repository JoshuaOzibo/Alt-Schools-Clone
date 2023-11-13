import React from 'react';
import {motion} from 'framer-motion'
//#01427a
  //#01b3ef

const TuitionCard = () => {
  return (
    <div className='w-full'>
        <div className='md:w-[80%] p-5 container m-auto'>
            <h2 className='text-center font-bold pb-10 lg:text-5xl text-[#01427a] md:text-3xl text-2xl'>Check out our flexible payment plans.</h2>

            <div className='w-full lg:space-y-0  md:space-y-0 space-y-5 md:grid grid-cols-3 gap-5'>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay:0.5}} className='border-2 bg-[#01b3ef] text-white rounded-lg'>
                    <h3 className='text-3xl font-medium text-center bg-[#01427a] text-white  py-4'>Upfront</h3>
                    <div className='p-2'>
                    <div className='flex'>
                        <div className='flex'>
                            <p className='font-bold'>$</p>
                            <h1 className='font-bold text-3xl'>290</h1>
                        </div>
                        <p className='font-bold'>Per Year</p>
                    </div>
                    <p className='w-full'>If you pay in full before you start, you get <span className='font-bold'>20%</span> <span className='font-bold'>off 
                        the tuition fee</span> with no additional costs, and 
                        nothing to pay when you’re done.
                    </p>
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay:0.7}} className='border-2 bg-[#01b3ef] text-white rounded-lg'>
                    <h3 className='text-3xl text-center bg-[#01427a] text-white  font-medium py-4'>Quarterly</h3>
                    <div className='p-2'>
                    <div className='flex'>
                        <div className='flex'>
                            <p className='font-bold'>$</p>
                            <h1 className='font-bold text-3xl'>80</h1>
                        </div>
                        <p className='font-bold'>per quarter</p>
                    </div>
                    <p className='w-full'>Pay upfront and <span className='font-bold'>save an extra 11%</span> when you choose this payment plan.
                    </p>
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay:0.9}} className='border-2 bg-[#01b3ef] text-white rounded-lg'>
                    <h3 className='text-3xl text-center bg-[#01427a] text-white  font-medium py-4'>Monthly</h3>
                    <div className='p-2'>
                        <div className='flex'>
                            <div className='flex'>
                                <p className='font-bold'>$</p>
                                <h1 className='font-bold text-3xl'>30</h1>
                            </div>
                            <p className='font-bold'>per month</p>
                        </div>
                        <p className='w-full'>If you choose this plan, you will pay the same amount in tuition every month.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default TuitionCard