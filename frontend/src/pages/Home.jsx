import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='h'>
       <Navbar/>
       <div className='h-[500px] flex justify-center items-center w-full bg-slate-200'>
        
        <button className='p-4 bg-blue-400 '> Get Started</button>
        
       </div>

    </div>
  )
}

export default Home