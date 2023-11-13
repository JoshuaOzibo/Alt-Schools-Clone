import React from 'react'

//#01427a
  //#01b3ef
const HowTheAdmin = () => {
  return (
    <div className='w-full bg-[#01427a] py-10'>
        <div className='w-[80%] space-y-5 m-auto '>
            <h2 className='font-bold text-2xl pb-3 md:text-3xl text-white lg:text-5xl'>How the Admission Process Works</h2>

            <div>
                <h3 className='text-gray-300'>STEP ONE:</h3>
                <p className='text-white text-2xl'>Fill and submit the application form</p>
            </div>
            <div>
                <h3 className='text-gray-300'>STEP TWO:</h3>
                <p className='text-white text-2xl'>Take and pass the admission tests</p>
            </div>
            <div>
                <h3 className='text-gray-300'>STEP THREE:</h3>
                <p className='text-white text-2xl pb-10'>Complete enrolment and begin your journey into tech</p>
            </div>
        </div>
    </div>
  )
}

export default HowTheAdmin