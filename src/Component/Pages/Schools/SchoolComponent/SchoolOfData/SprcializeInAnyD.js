import React from 'react'
import { useState } from 'react';

const SprcializeInAnyD = () => {
    const [DataEngineering, setDataEngineering] = useState(true);
const [DataAnalysis, setDataAnalysis] = useState(false);
const [DataScience, setDataScience] = useState(false);

const clickDataEng =() =>{
    setDataEngineering(true)
    setDataAnalysis(false);
    setDataScience(false);
}
const clickDataAna =() =>{
    setDataEngineering(false)
    setDataAnalysis(true);
    setDataScience(false);

}
const clickDataSci =() =>{
    setDataEngineering(false)
    setDataAnalysis(false);
    setDataScience(true);
}
 

//#01427a
  //#01b3ef
  return (
    <div className=' w-full overflow-hidden px-5 py-10'>
        <h2 className='md:text-4xl text-center pb-10 font-medium transition-all duration-500 text-[#01427a]  text-2xl'>Specialise in any of the following School of Data.</h2>

        <div className='flex md:w-[80%] p-2 container justify-center py-5 m-auto'>
             <button onClick={clickDataEng} className='border hover:bg-[#0092c3] text-[#01427a] hover:text-[#fff] rounded-md sm:px-8 p-2 font-semibold py-4' >Data Engineering</button>
            <button onClick={clickDataAna } className='border hover:bg-[#0092c3] text-[#01427a] hover:text-[#fff] rounded-md sm:px-8 p-2 font-semibold py-4'>Data Analysis</button>
            <button onClick={clickDataSci} className='border hover:bg-[#0092c3] text-[#01427a] hover:text-[#fff] rounded-md sm:px-8 p-2 font-semibold py-4'>Data Science</button>
        </div>

        <div className=' lg:flex justify-between w-full md:w-[80%] rounded-xl text-white p-5 md:m-auto bg-[#01427a] py-10'>
        { DataEngineering && <h2 className='font-bold hidden lg:flex pb-3 md:text-3xl text-2xl'>Data Engineering</h2>}
        { DataAnalysis && <h2 className='font-bold hidden lg:flex pb-3 md:text-3xl text-2xl'>Data Analysis</h2>}
        { DataScience && <h2 className='font-bold hidden lg:flex pb-3 md:text-3xl text-2xl'>Data Science</h2>}
            <div className='lg:w-[60%] w-full'>
            { DataEngineering && <div className=''>
            <h2 className='font-bold pb-3 lg:hidden md:text-3xl text-2xl'>Data Engineering</h2>
                <div>
                    <p className='text-white'>
                    Data engineering deals with the ingestion, transformation, storage, and retrieval 
                    of data. It also, in some cases, deals with the deployment and productionisation 
                    of Machine Learning models. The data that data engineers handle is often used 
                    by others within the organization, such as data analysts, data scientists, 
                    and ML engineers.
                    </p>
                    <p className='text-white'>To succeed in this program, you’ll need to have prerequisite knowledge of:</p>
                    <ul>
                        <li className='list-disc ml-5'>Structured Query Language.</li>
                        <li className='list-disc ml-5'>Python programming language.</li>
                        <li className='list-disc ml-5'>Basic programming foundation.</li>
                    </ul>
                </div>
            </div>}
            
           {DataAnalysis && <div>
            <h2 className='font-bold pb-3 lg:hidden md:text-3xl text-2xl'>Data Analysis</h2>
                <div>
                    <p className='text-white'>
                    Data Analysis is one of the highly sought after and lucrative tech skills. 
                    It is the process of systematically applying statistical and/or logical 
                    techniques to describe and illustrate, condense and recap, and evaluate data.
                    </p>
                    <p className='text-white'>To succeed in this program, you’ll need to have prerequisite knowledge of;</p>
                    <ul className='text-white'>
                        <li className='list-disc ml-5'>Basic understanding of High school Mathematics.</li>
                        <li className='list-disc ml-5'>Basic computer literacy.</li>
                    </ul>
                </div>
            </div>}

            {DataScience && <div>
                <h2 className='font-bold pb-3 lg:hidden md:text-3xl text-2xl'>Data Science</h2>
                <div>
                    <p className='text-white'>
                    Data science is an interdisciplinary field that uses scientific methods, 
                    processes, algorithms and systems to extract knowledge and insights from 
                    noisy, structured and unstructured data, and apply knowledge from data 
                    across a broad range of application domains.
                    </p>
                    <p className='text-white'>To succeed in this program, you’ll need to have prerequisite knowledge of;</p>
                    <div>
                    <ul className='text-white'>
                        <li className='list-disc ml-5'>Math.</li>
                        <li className='list-disc ml-5'>Statistics.</li>
                        <li className='list-disc ml-5'>Python programming.</li>
                    </ul>
                    </div>
                </div>
                
                
            </div>}
            </div>
        </div>
    </div>
  )
}

export default SprcializeInAnyD