import React from 'react'
import SkillItem from './skillItem'

const Skill = () => {
  return (
    <div id="skill" className="w-full p-5 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase tracking-widest text-blue-600 font-semibold">Skill</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <SkillItem name="HTML" imageUrl="/assets/html.png" />
          <SkillItem name="CSS" imageUrl="/assets/css.png" />
          <SkillItem name="Javascript" imageUrl="/assets/js.png" />
          <SkillItem name="Bootstrap" imageUrl="/assets/bootstrap.png" />
          <SkillItem name="React" imageUrl="/assets/react.png" />
          <SkillItem name="Tailwind" imageUrl="/assets/tailwind.png" />
          <SkillItem name="PHP" imageUrl="/assets/php.png" />
          <SkillItem name="Python" imageUrl="/assets/python.png" />
        </div>
      </div>
    </div>
  )
}

export default Skill