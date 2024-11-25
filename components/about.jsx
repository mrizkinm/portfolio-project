import React from 'react'

const About = () => {
  return (
    <div id="about" className="w-full p-5 flex items-center py-16">
      <div className="max-w-[1240px] mx-auto grid grid-cols-5 gap-8">
        <div className="col-span-5 md:col-span-3 xl:col-span-3">
          <p className="uppercase tracking-widest text-blue-600">About Me</p>
          <h2 className="py-4">Who Am I</h2>
          <p className="py-2 text-gray-600 dark:text-gray-300">I'm a Fulstack Developer</p>
          <p className="py-2 text-gray-600 dark:text-gray-300 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum sem dolor, sit amet hendrerit elit ullamcorper id. Quisque commodo fermentum lacus vulputate viverra. Nullam mollis, velit non blandit cursus, nulla augue convallis quam, ut fermentum lectus urna non lectus.
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-300 text-justify">
            Sed in placerat enim. Sed euismod lectus et ante rhoncus, ut elementum elit iaculis. Morbi nec felis mollis augue varius elementum. Quisque at pretium lectus. Praesent est diam, faucibus vel faucibus sit amet, consequat sit amet nisl. Nam tempor libero in quam auctor auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eu blandit sapien.
          </p>
        </div>
        <div className="col-span-5 md:col-span-2 xl:col-span-2 flex items-center justify-center hover:scale-105 duration-300">
          <img className="w-full h-auto m-auto rounded-xl" src="/assets/about.jpg" />
        </div>
      </div>
    </div>
  )
}

export default About