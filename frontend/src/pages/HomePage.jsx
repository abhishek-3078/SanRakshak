import React,{useEffect} from 'react'
import MainNav from '../components/MainNav'
import Slider from '../components/Slider'
import HomeMidContent from '../components/HomeMidContent'
import Footer from '../components/Footer'
import OurGoals from '../components/OurGoals'
import AOS from "aos";
import "aos/dist/aos.css";
export default function HomePage() {
  useEffect(()=>{
    AOS.init({ duration: 1000 });
   },[])
  return (
    <div>
      <MainNav/>
      <Slider/>  

      <HomeMidContent/>

      <OurGoals/>
      <Footer/>
    </div>
  )
}