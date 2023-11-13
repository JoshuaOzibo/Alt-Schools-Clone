import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className='bg-[#01427a] mb-10 py-2 mt-10'>
        <div className='w-[80%] md:flex justify-between m-auto container'>
            <h2 className='font-medium md:pb-0 pb-5 text-4xl md:text-start text-white text-center'>Why choose AltSchool</h2>

            <div className='w-[80%] space-y-5'>
                <div >
                    <div className='flex'>
                    <div className='px-[4px] mt-3 h-[7px] bg-[#01b3ef]'></div>
                        <div>
                            <h1 className='pb-3 text-white pr-10 pl-2 font-bold text-2xl'>We are not all talk.</h1>
                        </div>
                    </div>
                    <p className='pl-4 text-white'> Our programs are a perfect blend of 
                        theory and practice, providing you with a 
                        well-rounded education.
                    </p>
                </div>

                <div >
                    <div className='flex text-white'>
                    <div className='px-[4px] mt-3 h-[7px] bg-[#01b3ef]'></div>
                        <div>
                            <h1 className='pb-3 pr-10 pl-2 font-bold text-2xl'>Whatever your style of learning, we’ve got you covered.</h1>
                        </div>
                    </div>
                    <p className='pl-4 text-white'> Our blended learning approach allows for self-paced learning as well as instructor-led, real-time sessions.
                    </p>
                </div>
                <div >
                    <div className='flex'>
                    <div className='px-[4px] text-white mt-3 h-[7px] bg-[#01b3ef]'></div>
                        <div>
                            <h1 className='pb-3 text-white pr-10 pl-2 font-bold text-2xl'>Experienced and Expert Instructors</h1>
                        </div>
                    </div>
                    <p className='pl-4 text-white'> Our faculty comprises of instructors who are not just knowledgeable but are industry leaders in their fields and able to teach industry best practices
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs