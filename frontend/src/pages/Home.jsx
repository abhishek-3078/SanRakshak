import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import HomeNavbar from '../components/HomeNavbar'
import { API } from '../constant'
import Map from '../components/LocationSelectorMap'

import AOS from "aos";
import "aos/dist/aos.css";
import {useNavigate} from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();
 useEffect(()=>{
  AOS.init({ duration: 1000 });
 },[])
  return (
    <div  data-aos="flip-left" data-aos-delay="100" className=''>
      <HomeNavbar color={'blue-400'}/>
       <div data-aos="flip-left" data-aos-delay="100" className='h-[400px] flex justify-center items-center w-screen bg-slate-400'>
     
      <button  onClick={()=>navigate('/search')} className='px-7 py-4 text-xl font-normal rounded-full text-white bg-green-700/60'>Get Started</button>
 
      </div>
       
       <div data-aos="zoom-in" className='flex w-[300px] h-[500px] bg-blue-400'>
        </div>
       <div data-aos="zoom-in" data-aos-delay="100"  className='flex '>
        <div className='h-[200px] w-screen bg-red-200'></div>
       </div>
       <div data-aos="zoom-in" data-aos-delay="100"  className='h-[200px] w-screen bg-green-400'></div>
    </div>
  )
}

export default Home