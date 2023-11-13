import React from 'react'

const SchoolOfEng = () => {
  return (
    <div className=' py-10'>
      <div className='w-[80%] m-auto container'>
        <h1 className='font-bold text-center lg:text-5xl md:text-4xl text-[#01427a] text-2xl pt-5'>SCHOOL OF ENGINEERING</h1>

        <div className=''>
          <h2 className='text-2xl font-bold pt-5 text-[#01427a]'>Learning Path</h2>
          <div className='space-y-5'>
            <p>
                Whether you are looking to continue 
                your education, transition into a career 
                in tech or simply boost your career path, 
                we offer certifications across three tracks 
                in Software Programming.
            </p>
            <p className='pb-5'>At the initial stage, students who are enrolled 
              in AltSchool Africa will spend some time exploring 
              their interests in software engineering by learning 
              through a unified curriculum before eventually 
              landing on an area of focus. When this happens, 
              learning becomes much more specialised to the 
              selected certification track.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolOfEng