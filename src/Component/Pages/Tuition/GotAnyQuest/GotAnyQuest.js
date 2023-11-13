import React from 'react';
//#01427a
  //#01b3ef

const GotAnyQuest = () => {
  return (
    <div className=' w-full px-5 py-10'>
        <div className='bg-[#01427a] text-white p-5 rounded-md space-y-2 md:w-[80%] m-auto'>
            <h2 className='text-center font-bold lg:text-3xl text-3xl'>Got any Questions?</h2>
            <p className='text-center'> Our Learning and Development Team are 
                here to help you. <a href="##">Contact Us</a>
            </p>

            <div className='m-auto w-full'>
                <h2 className=' md:text-4xl text-2xl pb-3'>Jumpstart your tech career.</h2>
                <p className='pb-3'> Interested in building a career in 
                    tech? AltSchool Africa is just 
                    right for you. Earn a top-rated 
                    diploma in tech within twelve 
                    months.
                </p>
                <div className='w-full flex justify-center pb-4'>
                    <a href="##" className='px-20 py-4 hover:bg-[#0092c3] hover:text-[#fff] rounded-md bg-[#01b3ef] text-white'>Apply Now</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GotAnyQuest