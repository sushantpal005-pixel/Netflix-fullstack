import React from 'react'
import logo from "../assets/logo.svg"
import { IoIosArrowDropdown } from "react-icons/io"; 


const Header = () => {
  return (
    <div className=" absolute z-10 flex w-[100vw]  items-center px-6 justify-between bg-gradient-to-b from-black">
      <img src={logo} className="w-56" />
      <div className='flex items-center'>
        <IoIosArrowDropdown size="24px" color='white'/>
        <h1 className='text-lg font-medium text-white'>Sushant Pal</h1>
        <div className='ml-4'>
          <button className='bg-red-800 text-white px-4 py-2'>Logout</button>
          <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
        </div>
      </div>
    </div>
  )
}

export default Header
