import React from 'react';
import "../Styles/Footer1.css";
import '../Styles/Fonts.css';

const Footer1 = () => {
  return (
    <div>
        <div className='foot-1st'>
            <div>
                <div>
                    <h3>Lolly World UI</h3>

                </div>

                <div className='footer-icons'>
                    <div>
                    <img src="" alt="" />

                    </div>
                    <div>
                    <img src="" alt="" />
                    </div>
                    <div>
                    <img src="" alt="" /> 
                    </div>
                    
                    

                </div>


            </div>

            <div className='footer-list'>
            <div>
                <ul>
                    <span className='foot-start'> <li >Product</li></span>
                    <li>Overview</li>
                    <li>Feature</li>
                    <li>Solutions <button>New</button></li>
                    <li>Tutorials</li>
                    <li>Pricing</li>
                    <li>Releases</li>
                    
                </ul>
            </div>
            <div>
            <ul>
                    <span className='foot-start'><li >Company</li></span>
                    <li>Career</li>
                    <li>Press</li>
                    <li>About us</li>
                    <li>News</li>
                    <li>Media kit</li>
                    <li>Contact</li>
                    
                </ul>
            </div>
            <div>
            <ul>
                    <span className='foot-start'><li >Resources</li></span>
                    <li>Blog</li>
                    <li>News letter</li>
                    <li>Events <button>New</button></li>
                    <li>Tutorials</li>
                    <li>Help centre</li>
                    <li>Solutions</li>
                    
                </ul>
            </div>

            </div>
            
            
        </div>
    </div>
  )
}

export default Footer1