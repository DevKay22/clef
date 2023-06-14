import React from "react";
import "../Styles/Header.css";
import '../Styles/fonts.css';

const Header = () => {
    return (
        <div>
            <header>
                <h2 className="logo">Logo</h2>
                <nav className="navigation">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                    <button className="btn-login">Login</button>
                    
                </nav>
            </header>

            

        </div>
    );
};

export default Header;