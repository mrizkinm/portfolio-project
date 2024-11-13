import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-5 py-16">
        <p className="uppercase tracking-widest text-blue-600 font-semibold">Project</p>
        <h2 className="py-4">What I've Done</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-3 group hover:bg-gradient-to-r from-blue-600 to-blue-300">
            <Image className="rounded-lg group-hover:opacity-20" src="/assets/project1.jpg" alt="Image" width="600" height="400" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">Project 1</h3>
              <p className="pb-4 text-white text-center">React JS</p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More Info</p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-3 group hover:bg-gradient-to-r from-blue-600 to-blue-300">
            <Image className="rounded-lg group-hover:opacity-20" src="/assets/project2.jpg" alt="Image" width="600" height="400" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">Project 2</h3>
              <p className="pb-4 text-white text-center">React JS</p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More Info</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project