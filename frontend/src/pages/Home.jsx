import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import HomeNavbar from '../components/HomeNavbar'
import { API } from '../constant'
import Map from '../components/LocationSelectorMap'


const Home = () => {

  return (
    <div className='h'>
       <HomeNavbar color="#6A8BFF"/>
       <div className='h-[500px] flex justify-center items-center w-full bg-slate-200'>
        
        {/* <button className='p-4 bg-blue-400 '> Get Started</button> */}
        <Map/>
        
       </div>

    </div>
  )
}

export default Home