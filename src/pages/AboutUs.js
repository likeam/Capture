import React from 'react'
import AboutSection from '../components/AboutSection'
import FaqSection from '../components/FaqSection'
import ServicesSection from '../components/ServicesSection'
import GlobalStyle from "../components/GlobalStyle";
import Nav from "../components/Nav";

const AboutUs = () => {
    return (
        <div>
             <Nav />
            <GlobalStyle />
            <AboutSection />
            <ServicesSection />
            <FaqSection />

        </div>
        
    )
}

export default AboutUs
