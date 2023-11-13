import React from 'react'
import Footer from '../../Footer/Footer'
import NavBar from '../../Header/NavBar'
import GotAnyQuest from './GotAnyQuest/GotAnyQuest'
import Showcase from './Showcase/Showcase'
import TuitionCard from './TuitionCard';
import { CirclesWithBar } from  'react-loader-spinner';
import { useState,useEffect } from "react";

const Tuition = () => {

  const spinner =
    <div className='bg-[#01b3ef] bg-rgba flex items-center justify-center h-[100vh] w-full'>
      <div>
        <CirclesWithBar
          height="600"
          width="600"
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

    const [Spinner, setSpinner] = useState(true);

    useEffect(() =>{
      setTimeout(() =>{setSpinner(false)}, 1500);
    });

  return (
    <>
      {Spinner ? spinner : <div>
        <NavBar />
        <Showcase />
        <TuitionCard />
        <GotAnyQuest />
        <Footer />
      </div>}
    </>
  )
}

export default Tuition