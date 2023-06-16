import React from "react";
import Header from "../Components/Header.jsx";
import Login from "../Components/Login.jsx";
import Hero from "../Components/Hero.jsx";
import About from "../Components/About.jsx";
import Footer from "../Components/Footer.jsx";
import About3 from "../Components/About3.jsx";
import Info from "../Components/Info.jsx";
import Footer1 from "../Components/Footer1.jsx";

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <About3 />
            <Info />
            <Footer1 />
            <Footer />
        </div>
    );
};

export default Home; 