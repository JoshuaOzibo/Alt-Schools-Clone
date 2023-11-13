import React from 'react';
import AltNum from '../AltNumbers/AltNum';
import Features from '../Features/Features';
import FindRightSchool from '../FinfRightSchool2/FindRightSchool';
import Footer from '../Footer/Footer';
import NavBar from '../Header/NavBar';
import PrepareYour from '../PrepareYourCom/PrepareYour';
import Shaping from '../ShapingFuture/Shaping';
import Showcase from '../Shocase/Showcase';
import WhoAltFor from '../WhoAltFor/WhoAltFor';
import { CirclesWithBar } from  'react-loader-spinner';
import { useState,useEffect } from "react";

const Component = () => {

   //#01427a
  //#01b3ef

  const spinner =
    <div className='bg-[#01b3ef] flex items-center justify-center h-[100vh] w-full'>
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

    { isLoading ? spinner : <div>
        <NavBar />
        <Showcase />
        <AltNum />
        <Shaping />
        <WhoAltFor />
        <FindRightSchool />
        <PrepareYour />
        <Features />
        <Footer />
    </div>}
    
    </>
  )
}

export default Component