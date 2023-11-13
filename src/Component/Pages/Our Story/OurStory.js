import React from 'react'
import NavBar from '../../Header/NavBar'
import Showcase from '../Our Story/Showcase/Showcase'
import About from '../Our Story/About/About'
import WhyChooseUs from '../Our Story/WhyChooseUs/WhyChooseUs'
import HowTheAdmin from '../Schools/SchoolComponent/SchoolOfEng/HowTheAdmin'
import PrepareYour from '../../PrepareYourCom/PrepareYour'
import Features from '../../Features/Features'
import Footer from '../../Footer/Footer';
import { CirclesWithBar } from  'react-loader-spinner';
import { useState,useEffect } from "react";

const OurStory = () => {

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
          <About />
          <WhyChooseUs />
          <HowTheAdmin />
          <PrepareYour />
          <Features />
          <Footer />
        </div>}
    </>
  )
}

export default OurStory