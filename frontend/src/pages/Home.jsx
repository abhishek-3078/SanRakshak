import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import HomeNavbar from '../components/HomeNavbar'
import { API } from '../constant'
import Map from '../components/LocationSelectorMap'
import AOS from "aos";
import "aos/dist/aos.css";
import {useNavigate} from "react-router-dom"
import swal from 'sweetalert'; 
import Slider from '../components/Slider'
const Home = () => {
  const [forum,setForum]=useState([])
  const navigate = useNavigate();
  const getForumList=async()=>{
    try{
    const res=await fetch(`${API}/disaster`)
    const data=await res.json()
    if(res.ok){
      // console.log(data)
      setForum(data)
    }else{
      swal("Error",data.error, "error");
     
    }

    }catch(e){
      swal("Error", e.message, "error");
    }
  }
 useEffect(()=>{
  AOS.init({ duration: 1000 });
  getForumList()
 },[])
  return (
    <div  className=''>
      <HomeNavbar color={'blue-400'}/>
       <div className='h-[400px] flex justify-center items-center w-screen bg-slate-400'>
     <Slider/>
      <button  onClick={()=>navigate('/search')} className='px-7 py-4 text-xl font-normal rounded-full text-white bg-green-700/60'>Get Started</button>
 
      </div>
       
       <div data-aos="zoom-in" className='flex flex-col w-screen h-[500px] bg-blue-400'>
        <div className='pl-8 text-xl font-bold'>Community Forum</div>
        <div className='p-4'>
          {forum.map((data=>{
            return <div key={data._id}  onClick={()=>navigate(`/publicforum/${data._id}`)} className='border-b-2 cursor-pointer'>
              <p className='font-bold text-xl'>{data.name}</p>
              <p>{data.description}</p>
              </div>
          }))}
        </div>
        </div>
       <div data-aos="zoom-in" data-aos-delay="100"  className='flex '>
        <div className='h-[200px] w-screen bg-red-200'></div>
       </div>
       <div data-aos="zoom-in" data-aos-delay="100"  className='h-[200px] w-screen bg-green-400'></div>
    </div>
  )
}

export default Home