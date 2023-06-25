import "./DestinationStyles.css"
import image1 from "../components/images/1.jpg" 
import image2 from "../components/images/2.jpg" 
import image3 from "../components/images/10.jpg" 
import image4 from "../components/images/4.jpg" 


import React, { Component } from 'react'

export default class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
      <div className='des-text'>
        <h2>{this.props.heading}</h2>
        <p>{this.props.text}</p>
      </div>
  
        <div className='image'>
          <img alt='img' src={this.props.img1} />
          <img alt='' src={this.props.img2} />
        </div>
  
  
      </div>
      
    )
  }
}
