import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-3 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-700">Let's Build Something Together</p>
          <h1 className="pt-2">Hi, I'm <span className="text-blue-700">Rizki</span></h1>
          <h1 className="py-4 text-gray-700">Hi, I'm A Full Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a full stack developer specializing in building front end and back end web applications also android mobile applications
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-5 hover:scale-105 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-5 hover:scale-105 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-5 hover:scale-105 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-5 hover:scale-105 ease-in duration-300">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main