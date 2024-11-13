"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/assets/logo.png" alt="Image" width="60" height="60" />
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b hover:border-blue-500">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b hover:border-blue-500">
              <Link href="/">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b hover:border-blue-500">
              <Link href="/">Contact</Link>
            </li>
          </ul>
          <div onClick={handleNav} className="cursor-pointer md:hidden">
            <AiOutlineMenu size={25}/>
          </div>
        </div>
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden' : ''}>
        <div className={nav 
          ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-6 ease-in duration-300 md:hidden'
          : 'fixed left-[-100%] top-0 p-6 ease-in duration-300'}>
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src="/assets/logo.png" alt="image" width="70" height="70" />
              <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Menu</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li className="py-4 text-sm">
                <Link href="/">Home</Link>
              </li>
              <li className="py-4 text-sm">
                <Link href="/">About</Link>
              </li>
              <li className="py-4 text-sm">
                <Link href="/">Contact</Link>
              </li>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">Social media</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar