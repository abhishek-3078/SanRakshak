import React from 'react'
import MainNav from '../components/MainNav'
import Slider from '../components/Slider'
import HomeMidContent from '../components/HomeMidContent'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div>
      <MainNav/>
      <Slider/>
      <HomeMidContent/>
      <Footer/>
    </div>
  )
}