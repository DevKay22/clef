import React from 'react';
import "../Styles/Hero.css";
import '../Styles/Fonts.css';

const Hero = () => {
  return (
    <div className='hero'>
        <div>
        <h2 className='goals'>New Goals <br/> <span className='require'>Require</span> <br/>New Knowledge</h2>

        </div>

        <div>
        <button className='click-btn'>Click Here</button> 
        </div>
        
        
    </div>
  );
};

export default Hero;