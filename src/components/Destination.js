import React from 'react'
import "./DestinationStyles.css"
import image1 from "../components/images/1.jpg" 
import image2 from "../components/images/2.jpg" 
import image3 from "../components/images/10.jpg" 
import image4 from "../components/images/4.jpg" 
import DestinationData from './DestinationData'

function Destination() {
  return (
    <div className='Destination'>
    <h1>Popular Destination</h1>
    <p>Tour give you the opportunity to see a lot, with in a time frame</p>

   <DestinationData 
     heading="Murree Aubia, Kalam"
     className="first-des"
   text="Murree, once a charming colonial town nestled in the Himalayan foothills, is now a popular hill station and bustling summer resort in the Galyat region of northern Punjab. Due to being a picturesque and pleasantly scenic places in the country, the last one decade have seen rampant development and today Murree more closely resembles a litter-strewn overcrowded and a thriving tourist resort"

   img1={image1}
   img2={image2}

/>


   <DestinationData 
    className="first-des-reverse"
     heading="Naran, Khaghan Mansare"
   text="Allah (S.W.T) has blessed Pakistan with phenomenal and incomparable natural beauty.Among them! the Naran Kaghan is one such Gem.Naran is located in the upper Kaghan Valley in District Mansehra in KPK.This refreshing holiday gateway is an awesome place in the Kaghan Valley due to its charming, delightful, and pleasing views.The lovely Naran Kaghan Valley is on every vacation calendar of international and local travelers."

   img1={image3}
   img2={image4}

/>
    
    </div>
  )
}

export default Destination