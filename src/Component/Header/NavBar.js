import React from 'react';
import {Link} from 'react-router-dom';
import {FcMenu} from 'react-icons/fc';
import Sidebar from './HarmBurger Cart/SideBar/Sidebar';
import { useState } from 'react';

import {motion} from 'framer-motion';

const NavBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const ClickHarmburger = () =>{
    setShowSideBar(true);
  }

  const clickOverlay =() =>{
    setShowSideBar(false);
  }
  return (
    <div className='fixed w-full z-10'>
      <div className='w-full bg-[#01427a]'>
      <nav className='lg:w-[80%] text-white w-full pr-1 flex lg:px-5 items-center justify-between container m-auto'>
        {/* Alt Logo */}
          <motion.div initial={{x: -50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{delay: 0.8}} className='ml-4'>
            <motion.img  className='' alt="lo" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjgzNTUgMjEuMjA2NUgxMi40MjIyTDcuNjEwMzUgMzYuMjIyMUgxMC41MTA0TDExLjg0MjIgMzIuMDk3NkgxOC41MDE1TDE5Ljg5NzggMzYuMjIyMUgyMi43OTc4TDE3LjgzNTUgMjEuMjA2NVpNMTIuNjE1NSAyOS43MTMyTDE1LjEyODkgMjEuOTU4NEwxNy43MDY2IDI5LjcxMzJIMTIuNjE1NVpNMjYuNzY2NSAzNi4yNDM2VjIxLjIwNjVIMjQuMTAyOFYzNi4yNDM2SDI2Ljc2NjVaTTMyLjYzODQgMjUuMTU5MVYyMS4yMDY1SDI5Ljk3NDdWMjUuMTU5MUgyOC4zNjM2VjI3LjI0MjhIMjguNjIxNEMyOC42MjE0IDI3LjI0MjggMjkuOTc0NyAyNy4yNDI4IDI5Ljk3NDcgMjguNzI1MUMyOS45NzQ3IDI5LjM2OTUgMjkuOTc0NyAzMy41MTU0IDI5Ljk3NDcgMzMuNTE1NEMyOS45NzQ3IDM1LjA0MDYgMzEuMTk5MiAzNi4yNDM2IDMyLjcwMjkgMzYuMjQzNkgzNC41Mjg4VjMzLjg4MDZDMzQuNTI4OCAzMy44ODA2IDMzLjkwNTggMzMuODgwNiAzMy40NzYyIDMzLjg4MDZDMzMuMDI1MSAzMy44ODA2IDMyLjYzODQgMzMuNDkzOSAzMi42Mzg0IDMzLjA0MjhWMjguOTE4NEMzMi42Mzg0IDI3LjMyODggMjkuMjY1OCAyNy4yNDI4IDI4LjcwNzMgMjcuMjQyOEgzNC41Mjg4VjI1LjE1OTFIMzIuNjM4NFpNMTYuMDc0MSA0Ny45NDVDMTYuMDc0MSA0Ny45NDUgMTMuMTk1NSA0Ny4yNzkxIDEzLjEwOTYgNDcuMjU3NkMxMi4xNDI5IDQ2Ljk5OTkgMTEuMzI2NiA0Ni41MjczIDExLjMyNjYgNDUuNTM5MUMxMS4zMjY2IDQ0LjQ2NSAxMi42MzcgNDMuNTg0MyAxNC4yOTExIDQzLjU4NDNDMTYuMzEwMyA0My41ODQzIDE3LjQ0ODkgNDQuODMwMiAxNy40NDg5IDQ2LjA1NDdIMjAuMjYyOUMyMC4yNjI5IDQzLjQzMzkgMTguMjIyMiA0MS4yMjEzIDE0LjI5MTEgNDEuMjIxM0MxMC45NjE1IDQxLjIyMTMgOC41MTI1NyA0My4wMDQzIDguNTEyNTcgNDUuNTYwNkM4LjUxMjU3IDQ4LjIwMjggMTAuMTg4MSA0OS40NzAyIDEyLjYzNyA1MC4wMjg3QzEyLjYzNyA1MC4wMjg3IDE1LjUzNyA1MC42OTQ3IDE1LjYwMTUgNTAuNzE2MkMxNi43MTg1IDUwLjk5NTQgMTcuNjQyMiA1MS41NTM5IDE3LjY0MjIgNTIuNjQ5NUMxNy42NDIyIDU0LjAwMjggMTUuOTY2NiA1NC44NjIxIDE0LjIwNTIgNTQuNzExN0MxMS44MjA3IDU0LjUxODQgMTAuOTQgNTIuOTUwMiAxMC45NCA1MS44MzMySDguMTQ3MzlDOC4xNDczOSA1NC4yODIxIDEwLjE4ODEgNTYuOTg4NyAxNC4yNDgxIDU3LjA5NjFDMTcuMjk4NSA1Ny4xNjA2IDIwLjQ1NjMgNTUuNDg1IDIwLjQ1NjMgNTIuNjQ5NUMyMC40NTYzIDUwLjAyODcgMTguNjUxOCA0OC41NjggMTYuMDc0MSA0Ny45NDVaTTI3LjMwMTMgNTQuNTgyOEMyNS42MDQzIDU0LjU4MjggMjQuNzAyMSA1Mi45NzE3IDI0LjcwMjEgNTEuMTI0M0MyNC43MDIxIDQ5LjI1NTQgMjUuODE5MSA0Ny42NjU4IDI3LjI3OTggNDcuNjY1OEMyOC40Mzk4IDQ3LjY2NTggMjkuMzYzNSA0OC41MjUgMjkuNjg1OCA0OS43MDY1SDMyLjU2NDNDMzIuMDkxNyA0Ni45MzU0IDI5Ljg3OTEgNDUuMzAyOCAyNy4yNTgzIDQ1LjMwMjhDMjQuMzE1NCA0NS4zMDI4IDIxLjc1OTEgNDcuODgwNiAyMS45MDk1IDUxLjQ2OEMyMi4wMzg0IDU0LjgxOTEgMjQuNDQ0MyA1Ni45MjQzIDI3LjMyMjggNTYuOTI0M0MzMC4wMDggNTYuOTI0MyAzMi4wMDU4IDU1LjE0MTMgMzIuNTIxMyA1Mi43MTM5SDI5LjU1NjlDMjkuMzIwNiA1My42ODA2IDI4LjQ2MTMgNTQuNTgyOCAyNy4zMDEzIDU0LjU4MjhaTTM3LjA0NTcgNTAuMTU3NkMzNy4wNDU3IDUwLjE3OTEgMzcuMDQ1NyA1MC4yMDA2IDM3LjA0NTcgNTAuMjIyMUMzNy4wNDU3IDUwLjIwMDYgMzcuMDQ1NyA1MC4xNzkxIDM3LjA0NTcgNTAuMTU3NlpNNDAuMDk2MSA0NS4zNDU4QzM4LjQ2MzUgNDUuNDc0NyAzNy4wNjcyIDQ3LjE3MTcgMzcuMDQ1NyA1MC4xNTc2QzM3LjA2NzIgNDguNjc1NCAzNy43MzMxIDQ3LjYwMTMgMzkuMjU4MyA0Ny42MDEzQzQwLjkzMzggNDcuNjAxMyA0MS40NzA5IDQ4Ljg0NzMgNDEuNDcwOSA1MC4yMjIxVjU2LjY4OEg0NC4xNTZWNDkuMzE5OUM0NC4xNTYgNDYuNzQyMSA0Mi4wMjk0IDQ1LjE5NTQgNDAuMDk2MSA0NS4zNDU4Wk0zNC4zODIgNDEuNjUxVjU2LjY4OEgzNy4wNDU3VjQxLjY1MUgzNC4zODJaTTUxLjM4NiA0NS4zMDI4QzQ4LjUyOSA0NS4zMDI4IDQ1LjkwODMgNDcuNDI5NSA0NS45MDgzIDUxLjEyNDNDNDUuOTA4MyA1NC44MTkxIDQ4LjQ4NiA1Ni45MDI4IDUxLjM4NiA1Ni45MjQzQzU0LjMwNzUgNTYuOTAyOCA1Ni44ODUzIDU0Ljc5NzYgNTYuODg1MyA1MS4xMjQzQzU2Ljg4NTMgNDcuNDI5NSA1NC4yNDMxIDQ1LjMwMjggNTEuMzg2IDQ1LjMwMjhaTTUxLjM4NiA1NC41NjEzQzQ5Ljk2ODMgNTQuNTYxMyA0OC41OTM1IDUzLjQ0NDMgNDguNTkzNSA1MS4xMjQzQzQ4LjU5MzUgNDguOTMzMiA0OS45NDY4IDQ3LjY4NzMgNTEuMzg2IDQ3LjY2NThDNTIuODQ2OCA0Ny42ODczIDU0LjIwMDEgNDguOTU0NyA1NC4yMDAxIDUxLjEyNDNDNTQuMjAwMSA1My40NDQzIDUyLjgyNTMgNTQuNTYxMyA1MS4zODYgNTQuNTYxM1pNNjMuNzYzMSA0NS4zMDI4QzYwLjkwNiA0NS4zMDI4IDU4LjI4NTMgNDcuNDI5NSA1OC4yODUzIDUxLjEyNDNDNTguMjg1MyA1NC44MTkxIDYwLjg2MzEgNTYuOTAyOCA2My43NjMxIDU2LjkyNDNDNjYuNjg0NiA1Ni45MDI4IDY5LjI2MjMgNTQuNzk3NiA2OS4yNjIzIDUxLjEyNDNDNjkuMjYyMyA0Ny40Mjk1IDY2LjYyMDEgNDUuMzAyOCA2My43NjMxIDQ1LjMwMjhaTTYzLjc2MzEgNTQuNTYxM0M2Mi4zNDUzIDU0LjU2MTMgNjAuOTcwNSA1My40NDQzIDYwLjk3MDUgNTEuMTI0M0M2MC45NzA1IDQ4LjkzMzIgNjIuMzIzOCA0Ny42ODczIDYzLjc2MzEgNDcuNjY1OEM2NS4yMjM4IDQ3LjY4NzMgNjYuNTc3MiA0OC45NTQ3IDY2LjU3NzIgNTEuMTI0M0M2Ni41NzcyIDUzLjQ0NDMgNjUuMjAyMyA1NC41NjEzIDYzLjc2MzEgNTQuNTYxM1pNNzMuODIwMSA1Ni42ODhWNDEuNjUxSDcxLjE1NjRWNTYuNjg4SDczLjgyMDFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzMuODUxOCAzMi45NjI5SDM3LjQwNzNWMzYuMjIyMUg3My44NTE4VjMyLjk2MjlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" />
          </motion.div>

        <ul className='md:flex hidden space-x-16'>
            <motion.li initial={{opacity: 0, y: -10}} transition={{ delay: 0.5 }}  whileInView={{opacity: 1, y:0}} ><Link to="/" className='font-bold'>Home</Link></motion.li>
            <motion.li initial={{opacity: 0, y: -10}} transition={{ delay: 0.7 }}  whileInView={{opacity: 1, y:0}}><Link to="/Schools" className='font-bold'>Schools</Link></motion.li>
            <motion.li initial={{opacity: 0, y: -10}} transition={{ delay: 0.9 }}  whileInView={{opacity: 1, y:0}}><Link to="/OurStory" className='font-bold'>Our Story</Link></motion.li>
            <motion.li initial={{opacity: 0, y: -10}} transition={{ delay: 1 }}  whileInView={{opacity: 1, y:0}}><Link to="/Tuition" className='font-bold'>Tuition</Link></motion.li>
        </ul>

        <motion.a initial={{x: 50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{delay: 0.8}} 
        className='p-2 hidden md:flex text-center group relative hover:text-[#313f44] font-bold transition-all px-5 rounded-md py-3 bg-[#01b3ef] text-white' href="##">
          <div className="absolute inset-0 w-0 bg-[#0092c3] rounded-md transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-[#01427a] group-hover:text-white">Apply Now</span>
          </motion.a>
        <motion.div initial={{x: 50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{delay: 0.8}} className='md:hidden absolute right-5'>
        <FcMenu  size={40} onClick={ClickHarmburger} className="cursor-pointer"/>
        </motion.div>
      </nav>

      <div className='hidden md:block'>
       {showSideBar && <Sidebar clickOverlay={clickOverlay} />}
      </div>
      
    </div>
    <p className='w-full text-center text-xs p-1 bg-[#01b3ef] text-white'>Applications to all our schools are now open, apply today.</p>
    </div>
  )
}

export default NavBar