import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../../assets/logo.png"
import { useState } from 'react'
import Hamburger from "hamburger-react"

export default function Navbar() {
    const [isOpen, setOpen] = useState(false)

    const handleDeleteResponsive = () => {
        if (window.innerWidth >= 1023) {
          setOpen(false);
          console.log(window.innerWidth)
        }
      }
    
      window.addEventListener("resize", handleDeleteResponsive)
  return (

    <div className='w-5/6 mt-10 lg:bg-myHeaderColor lg:rounded-md lg:pt-4 lg:pb-4'>
        <nav>
            <ul className='lg:flex lg:items-center lg:justify-evenly'>
            <div className='flex items-center justify-between lg:hidden'>
                    <Link to="/domov"><img src={Logo} alt='logo' className='w-[150px]' /></Link>
                <div className='relative z-10 lg:hidden'>
                    <Hamburger toggled={isOpen} toggle={setOpen} onToggle={() => setOpen(!isOpen)} color={isOpen ? "#FCEDC5" : "white"}/>
                </div>
            </div>
                
                <div className='hidden lg:flex lg:text-2xl pl-4'>
                    <li className='text-white pr-4 pl-4 lg:hover:text-sand'><Link to="/domov">DOMOV</Link></li>
                    <li className='text-white pr-4 pl-4 lg:hover:text-sand'><Link to="/o-nás">O&nbsp;NÁS</Link></li>
                    <li className='text-white pr-4 pl-4 lg:hover:text-sand'><Link to="/cenník">CENNÍK</Link></li>
                </div>
                <li className='text-white'><Link to="/domov"><img src={Logo} alt='logo' className='hidden lg:block lg:w-[260px]' /></Link></li>
                <div className='hidden lg:flex lg:text-2xl pr-4 '>
                    <li className='text-white pr-4 pl-4 lg:hover:text-sand'><Link to="/recenzie">RECENZIE</Link></li>
                    <li className='text-white pr-4 pl-4 lg:hover:text-sand'><Link to="/kariéra">KARIÉRA</Link></li>
                    <li className='text-white pr-4 pl-4 lg:hover:text-sand'><Link to="/kontakt">KONTAKT</Link></li>
                </div>
            </ul>
        </nav>

        { isOpen ? 
                <div className='w-full h-screen bg-black absolute top-0 left-0 flex items-center justify-center delay-200 animate-'>
                    <div className='text-white flex flex-col justify-center items-center text-2xl leading-loose'>
                        <Link to="/" onClick={isOpen}>DOMOV</Link>
                        <Link to="/o-nas" onClick={isOpen}>O NÁS</Link>
                        <Link to="/cennik"  onClick={isOpen}>CENNÍK</Link>
                        <Link to="/recenzie" onClick={isOpen}>RECENZIE</Link>
                        <Link to="/kariéra"  onClick={isOpen}>KARIÉRA</Link>
                        <Link to="/kontakt"  onClick={isOpen}>KONTAKT</Link>
                    </div>    
                </div>
                :
                ""
        }
    </div>

  )
}
