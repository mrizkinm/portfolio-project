import Image from 'next/image'
import React from 'react'
import { MdRadioButtonChecked } from 'react-icons/md'

const Project1 = () => {
  return (
    <div className="w-full">
      <div className="h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image className="absolute z-1" src="/assets/project1.jpg" alt="Image" layout="fill" objectFit="cover" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-5">
          <h2>Project 1</h2>
          <h3>React JS /Tailwind</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-5 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-5 md:col-span-3">
          <p>Project</p>
          <h2>Overview</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum sem dolor, sit amet hendrerit elit ullamcorper id. Quisque commodo fermentum lacus vulputate viverra. Nullam mollis, velit non blandit cursus, nulla augue convallis quam, ut fermentum lectus urna non lectus.</p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Github</button>
        </div>
        <div className="col-span-5 md:col-span-2 rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:text-white p-4">
          <div className="p-5">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className=" text-gray-600 dark:text-gray-300">
              <p className="py-2 flex items-center"><MdRadioButtonChecked className="mr-2" /> React</p>
              <p className="py-2 flex items-center"><MdRadioButtonChecked className="mr-2" /> Tailwind</p>
              <p className="py-2 flex items-center"><MdRadioButtonChecked className="mr-2" /> HTML</p>
              <p className="py-2 flex items-center"><MdRadioButtonChecked className="mr-2" /> MySQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project1