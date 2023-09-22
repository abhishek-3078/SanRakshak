import React from 'react'

const AreasOfFocus = (props) => {
    const title = props.heading;
  return (
    <div className="w-full">
        <div className="h-[60vh] w-full flex justify-center items-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black bg-[#ffffffbb] font-serif p-5 rounded-[20px]">{title}</h1>
        </div>
    </div>
  )
}

export default AreasOfFocus