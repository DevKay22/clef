import React from 'react';
import "../Styles/About.css";
import '../Styles/Fonts.css';

const About = () => {
  return (
    <div>
        <h2 className='abt'>About Us</h2>
         <div className='about-us'>
        <div>
            <ul>
                <li>Communication</li>
                <li>Analytics</li>
                <li>Security</li>
                <li>Critical reasoning</li>
            </ul>
        </div>

        <div>
            <ul>
                <li>Quantitative analysis</li>
                <li>Informatics</li>
                <li>Decision making</li>
                <li>Conflict management</li>
            </ul>
        </div>

        <div>
            <ul>
                <li>Reliability</li>
                <li>Testing</li>
                <li>Trouble shooting</li>
                <li>Projecting</li>
            </ul>
        </div>
    </div>

    </div>
   
  )
}

export default About;