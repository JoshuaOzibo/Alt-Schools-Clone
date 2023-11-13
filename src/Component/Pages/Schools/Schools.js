import React from 'react'
import Features from '../../Features/Features';
import Footer from '../../Footer/Footer';
import NavBar from '../../Header/NavBar';
import PrepareYour from '../../PrepareYourCom/PrepareYour';
import HowTheAdmin from './SchoolComponent/SchoolOfEng/HowTheAdmin';
import SchoolOfEng from './SchoolComponent/SchoolOfEng/SchoolOfEng';
import SpecializeInAny from './SchoolComponent/SchoolOfEng/SpecializeInAny';
import Showcase from './Showcase/Showcase';
import SpecializingInAnyP from '../Schools/SchoolComponent/SchoolOfProduct/SpecializingInAnyP';
import SpecializingInAnyD from './SchoolComponent/SchoolOfData/SprcializeInAnyD';
import { CirclesWithBar } from  'react-loader-spinner';
import { useState,useEffect } from "react";
const Schools = () => {

  const spinner =
    <div className='bg-[#01b3ef] bg-rgba flex items-center justify-center h-[100vh] w-full'>
      <div>
        <CirclesWithBar
        height="500"
        width="500"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=" w-[100px] h-full"
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel='circles-with-bar-loading'
        />
      </div>
    </div>

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() =>{
    setTimeout(() =>{
      setIsLoading(false)
    }, 1500);
  });


  return (
    <>
      {isLoading ? spinner : <div>
        <NavBar />
        <Showcase />
        {/** school of Engineering */}
        <SchoolOfEng />
        <SpecializeInAny />
        {/**school of Product */}
        
        <SpecializingInAnyP />

        {/**school of Data */}
        
        <SpecializingInAnyD />

        <HowTheAdmin />
        <PrepareYour />
        <Features />
        <Footer />
      </div>}
    </>
  )
}

export default Schools