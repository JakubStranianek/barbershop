import React from 'react'
import Navbar from './Navbar'
import poly from "../../assets/polygon.png"

export default function Home() {
  return (
    <div className='w-full h-screen relative bg-title bg-no-repeat bg-cover bg-center flex flex-col items-center'>
         <Navbar/>
         <img src={poly} alt="polybg" className='w-full h-[230px] absolute bottom-0'/>  
    </div>
  )
}
