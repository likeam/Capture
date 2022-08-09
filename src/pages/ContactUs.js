import React from 'react'
import Nav from '../components/Nav'
//Animation
import {motion} from 'framer-motion';
import { pageAnimation } from './animation';

const ContactUs = () => {
    return (
        <motion.div variants= {pageAnimation} initial = "hidden" animate = "show" exit= "exit">
            <Nav />
            <h1>Contact Our</h1>
        </motion.div>
    )
}

export default ContactUs
