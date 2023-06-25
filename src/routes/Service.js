import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AboutImG from "../components/images/1.jpg"
import Footer from '../components/Footer'
import Trip from '../components/Trip'


function Service() {
  return (
   <>
   <Navbar />
    <Hero
    cName="hero-mid"
    heroImg={AboutImG}
    title="Service"
  
    btnClass="hide" />
    <Trip />
    <Footer />
   </>
  )
}

export default Service