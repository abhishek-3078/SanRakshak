import React from 'react'

const NewComponent = (props) => {
    const heading = props.title;
  return (
    <div className="bg-white text-center border-2 border-solid border-black">
        <h1>{heading}</h1>
        <p>This is a pararaph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptas enim fuga libero ratione aliquam, minus perspiciatis, vitae modi possimus omnis! Porro iure nesciunt inventore possimus pariatur aliquid deserunt distinction.</p>
    </div>
  )
}

export default NewComponent;