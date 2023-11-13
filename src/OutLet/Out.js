import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Component/Header/NavBar';
import Schools from '../Component/Pages/Schools/Schools';
import Showcase from '../Component/Shocase/Showcase';
const Out = () => {
  return (
    <div>
        
        <NavBar />
        <Schools />
        <Showcase />
        <Outlet />
    </div>
  )
}

export default Out;