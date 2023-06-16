import React from 'react';
import "../Styles/About3.css";
import '../Styles/Fonts.css';

const About3 = () => {
  return (
    <div>
        <div className='about-3'>
            <div className='abt-3'>
            <div className='abtt'><h2>We're just getting started</h2></div>
            <div className='abtt'><p>Lolly is growing fast and we are looking for passionate, dynamic and talented individuals to join our distributed team all round the world</p></div>
            <div className='abtt'><p>Our philosophy is simple- hire a team of diverse, passionate people and foster a culture that empowers good work.</p></div>
            <div className='abtt'>
                <button className='read'>Read our principles</button>
                <button className='abt-btn'>About us</button>
            </div>

            </div>

            <div className='abt-3'>
            <div className='aboot'>
            <div className='abut'>
            <div className='abat'>
                <div className='girl1-img'>
                    
                    <img src="../Images/bg.jpg" alt="" />
                    <img src={require('../Images/flower.jpeg').default } height={120} width={150}/>
                </div>
                <div className='girl2'>

                </div>

            </div>
                

            </div>
                
            

            <div className='abut'>
                <div className='abat'>
                <div className='guy1'>3</div>
                <div className='guy2'>4</div>
                <div className='guy3'>5</div>

                </div>
                
                
            </div>
                    
                </div>
            


            </div>

        </div>
    </div>
  )
}

export default About3;