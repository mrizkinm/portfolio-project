import React from 'react'

const LinkSocial = ({icon, url}) => {
  return (
    <a href={url} target="_blank" className="rounded-full cursor-pointer p-5 hover:scale-105 ease-in duration-300 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
      {icon}
    </a>
  )
}

export default LinkSocial