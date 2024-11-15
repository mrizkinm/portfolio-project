import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id="contact" className="w-full px-5 py-16 ">
      <div className="max-w-[1240px] m-auto">
        <p className="uppercase tracking-widest text-blue-600 font-semibold">Contact</p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="col-span-3 md:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img className="rounded-lg hover:scale-105 ease-in duration-300 w-full" src="/assets/contact.jpg" />
              </div>
              <div>
                <h2 className="py-2">Muhammad Rizki</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">Please contact me if you need my services</p>
              </div>
              <div>
                <p className="uppercase pt-4">Social Media</p>
                <div className="flex items-center justify-between py-4">
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
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4">
              <form>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input className="border-2 rounded-lg p-2 flex border-gray-300" type="text" />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Phone</label>
                  <input className="border-2 rounded-lg p-2 flex border-gray-300" type="text" />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input className="border-2 rounded-lg p-2 flex border-gray-300" type="email" />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input className="border-2 rounded-lg p-2 flex border-gray-300" type="text" />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea className="border-2 rounded-lg flex border-gray-300" rows="5"></textarea>
                </div>
                <button className="w-full p-3 text-gray-100 mt-3">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-blue-600" size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact