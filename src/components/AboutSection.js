import React from 'react'
import home1 from '../img/home1.png';
//Styled
import {About,  Discription, Image, Hide } from '../style';
//Framer Motion
import {motion} from 'framer-motion';
const AboutSection = () => {
    const titleAnim = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 2}}
    };
    const container ={
        hidden:{ x: 100},
        show: {x: 0, transition: {duration: 0.75, ease: "easeOut", staggerChildren: 1,}},
    };
    return (
        <About>
            <Discription>
                <motion.div variants={container}  initial= "hidden" animate = "show" className="title">
                    <Hide>
                        < motion.h2 variants= {titleAnim } initial= "hidden" animate = "show" >We work to  make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants= {titleAnim }>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants= {titleAnim }>true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact for any Photography or Videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </Discription>
            <Image>
                <img src={home1} alt="imge of guy holding camera" />
            </Image>
        </About>
    )
}



export default AboutSection
