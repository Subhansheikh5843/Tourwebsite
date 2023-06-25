import "./TripStles.css"
import React from 'react'
import TripData from "./TripData"

import img5 from "../components/images/5.jpg"
import img8 from "../components/images/8.jpg"
import img6 from "../components/images/11.jpg"

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps</p>

      <div className="tripcard">
        <TripData 
        image={img5}
        heading="Trip in Indonesia"
        text="With an area of 1,904,569 km², Indonesia is the largest country consisting only of islands. The combined area of the archipelago is slightly smaller than Mexico or larger than five times the size of Germany. The multi-ethnic country has a population of more than 271 million people (in 2021)."
         />
        <TripData 
        image={img8}
        heading="Trip in America"
        text="The United States of America is the world's third largest country in size and nearly the third largest in terms of population. Located in North America, the country is bordered on the west by the Pacific Ocean and to the east by the Atlantic Ocean. Along the northern border is Canada and the southern border is Mexico."
         />
        <TripData 
        image={img6}
        heading="Trip in France"
        text="France is one of the oldest nations on Earth and the most ethnically diverse country in Europe. These deep and broad influences have made France a world leader throughout history in nearly all aspects of culture, including cuisine, wine-making, politics, philosophy, music, art, film, fashion, literature, and sports."
         />
      </div>
    </div>
  )
}

export default Trip