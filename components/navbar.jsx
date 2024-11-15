"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(()=>{
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    };
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]' : 'fixed w-full h-20 z-[100] bg-[#ecf0f3]'}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src="/assets/logo.png" alt="Image" width="60" height="60" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-blue-500">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-blue-500">
                About
              </li>
            </Link>
            <Link href="/#skill">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-blue-500">
                Skill
              </li>
            </Link>
            <Link href="/#project">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-blue-500">
                Project
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-blue-500">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="cursor-pointer md:hidden">
            <FiMenu size={25}/>
          </div>
        </div>
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden' : ''}>
        <div className={nav 
          ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-6 ease-in duration-300 md:hidden'
          : 'fixed left-[-100%] top-0 p-6 ease-in duration-300'}>
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src="/assets/logo.png" alt="image" width="70" height="70" />
              </Link>
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
              <Link onClick={() => setNav(false)} href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link onClick={() => setNav(false)} href="/#about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link onClick={() => setNav(false)} href="/#skill">
                <li className="py-4 text-sm">Skill</li>
              </Link>
              <Link onClick={() => setNav(false)} href="/#project">
                <li className="py-4 text-sm">Project</li>
              </Link>
              <Link onClick={() => setNav(false)} href="/#contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
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