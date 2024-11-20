import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaInstagram, FaLinkedinIn, FaMailBulk } from 'react-icons/fa'
import LinkSocial from './linkSocial'

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-5 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-700 dark:text-gray-200">Let's Build Something Together</p>
          <h1 className="pt-2">Hello, I'm <span className="text-blue-700">Rizki</span></h1>
          <h1 className="py-4 text-gray-700 dark:text-gray-200">I'm A Full Stack Developer</h1>
          <p className="py-4 text-gray-600 dark:text-gray-300 max-w-[70%] m-auto">
            I'm a full stack developer specializing in building front end and back end web applications also android mobile applications
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <LinkSocial icon={<FaLinkedinIn />} url="https://linked.in" />
            <LinkSocial icon={<FaGithub />} url="https://github.com" />
            <LinkSocial icon={<AiOutlineMail />} url="https://gmail.com" />
            <LinkSocial icon={<FaInstagram />} url="https://instagram.com" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main