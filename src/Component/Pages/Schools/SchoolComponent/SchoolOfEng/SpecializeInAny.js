import React from 'react';
import {useState} from 'react';

//#01427a
  //#01b3ef

  
const SpecializeInAny = () => {
const [ShowFrontend, setShowFrontend] = useState(true);
const [ShowBackend, setShowBackend] = useState(false);
const [ShowCloud, setShowCloud] = useState(false);

const clickFrontend =() =>{
    setShowFrontend(true)
    setShowBackend(false);
    setShowCloud(false);
}
const clickBackend =() =>{
    setShowFrontend(false)
    setShowBackend(true);
    setShowCloud(false);

}
const clickCloud =() =>{
    setShowFrontend(false)
    setShowBackend(false);
    setShowCloud(true);

}
//#01427a
  //#01b3ef

const color = 'bg-[#01b3ef]';

  return (
    <div className=' w-full overflow-hidden px-5 py-10'>
        <h2 className='md:text-4xl text-center pb-10 font-medium text-[#01427a] text-2xl '>Specialise in any of the following School of Engineering.</h2>

        <div className='flex md:w-[80%] p-2 container justify-center py-5 m-auto'>
             <button onClick={clickFrontend} className='border hover:bg-[#0092c3] text-[#01427a] hover:text-[#fff] rounded-md sm:px-8 p-2 font-semibold py-4' >Frontend Engineering</button>
            <button onClick={clickBackend } className='border hover:bg-[#0092c3] text-[#01427a] hover:text-[#fff] rounded-md sm:px-8 p-2 font-semibold py-4'>Backend Engineering</button>
            <button onClick={clickCloud} className='border hover:bg-[#0092c3] text-[#01427a] hover:text-[#fff] rounded-md sm:px-8 p-2 font-semibold py-4'>Cloud Engineering</button>
        </div>

        <div className=' lg:flex justify-between w-full rounded-lg md:w-[80%] p-5 m-auto bg-[#01427a] py-10'>
        { ShowFrontend && <h2 className={!color? '' : 'font-bold text-white hidden lg:flex pb-3 md:text-3xl text-2xl'}>Frontend Engineering</h2>}
        { ShowBackend && <h2 className='font-bold duration-[2000ms] hidden lg:flex text-white pb-3 md:text-3xl text-2xl'>Backend Engineering</h2>}
        { ShowCloud && <h2 className='font-bold hidden lg:flex text-white pb-3 md:text-3xl text-2xl'>Cloud Engineering</h2>}
            <div className='lg:w-[60%] w-full'>
            { ShowFrontend && <div className=''>
                <h2 className='font-bold pb-3 lg:hidden text-white md:text-3xl text-2xl'>Frontend Engineering</h2>
                <p className='text-white'>
                    Frontend Engineers are some of the 
                    most sought-after Software Engineers. 
                    This program is designed to provide 
                    you with in-depth knowledge on how 
                    to create functional websites by 
                    implementing web designs through the 
                    use of various programming languages. 
                    You will be exposed to best practices 
                    while executing projects with 
                    guidance from some of our faculty 
                    members comprised of top senior 
                    engineers.
                </p>
            </div>}
            
           {ShowBackend && <div className=''>
            <h2 className='font-bold pb-3 lg:hidden text-white md:text-3xl text-2xl'>Backend Engineering</h2>
                <p className='text-white'>
                    Backend engineering is an exciting career track. 
                    Like the name suggests, backend engineering deals 
                    with the part of a website or a software application 
                    that the users do not see or interact with. As a 
                    backend engineer, you are responsible for building the 
                    structure of a software application. In this program, 
                    you will learn how to program servers, client-side interfaces 
                    and design databases using the various programming languages.
                </p>
            </div>}

            {ShowCloud && <div>
                <h2 className='font-bold pb-3 lg:hidden text-white md:text-3xl text-2xl'>Cloud Engineering</h2>
                <p className='text-white'>
                    Cloud Engineering combines software development and IT operations 
                    to build and maintain cloud infrastructure. Cloud Engineers are in
                     high demand, as more companies continue to move critical business 
                     processes and applications to cloud infrastructures. In this program, 
                     you will gain hands-on experience with cloud platforms, understand how 
                     cloud resources are allocated and paid for and learn how to shorten 
                     the systems development life-cycle.
                </p>
            </div>}
            </div>
        </div>
    </div>
  )
}

export default SpecializeInAny;