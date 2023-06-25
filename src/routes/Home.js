import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AboutIMg from "../components/images/car.jpg"
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

function Home() {
  return (
   <>
   <Navbar />
    <Hero
    cName="hero"
    heroImg={AboutIMg}
    title="Your Journey Your Story"
    text="Choose Your Favourite Destination."
    url="/"
    btnClass="show"
    buttonText="Travel Plan"

     />

    <Destination />
    <Trip />
    <Footer />
    

   </>
  )
}

export default Home


//

//