import React from 'react'
import AboutSection from '../components/AboutSection'
import FaqSection from '../components/FaqSection'
import ServicesSection from '../components/ServicesSection'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const AboutUs = () => {
    return (
        <div>
            <AboutSection />
            <ServicesSection />
            <FaqSection />

        </div>
        
    )
}

export default AboutUs
