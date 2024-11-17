import React from 'react'
import './Hero.css'
import amazon from '../../assets/amazon.png'
import flipkart from '../../assets/flipkart.png'
import shoe from '../../assets/shoe_image.png'

const Hero = () => {
  return (
    <main className='container'>
        <div className='hero_content'>
            <h1>YOUR FEET DESERVE <span>THE BEST</span></h1>
            <p className='text'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
             YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
             <div className='hero_btn'>
                <button>Shop Now</button>
                <button className='btn'>Category</button>
             </div>
             <p>Also Available on</p>
             <div className="brand_icon">
                <img src={amazon} alt="" />
                <img src={flipkart} alt="" />

             </div>

        </div>
        <div className="shoe_img">
            <img src={shoe} alt="" />
        </div>
    </main>
  )
}

export default Hero