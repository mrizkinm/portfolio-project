import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, backgroundImg, url, projectType}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-3 group hover:bg-gradient-to-r from-blue-600 to-blue-300">
      <Image className="rounded-lg group-hover:opacity-20" src={backgroundImg} alt="Image" width="600" height="400" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
        <p className="pb-4 text-white text-center">{projectType}</p>
        <Link href={url}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More Info</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem