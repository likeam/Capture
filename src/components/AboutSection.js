import React from 'react'
import home1 from '../img/home1.png';
//Styled
import {About,  Discription, Image, Hide } from '../style';
//Framer Motion
import {motion} from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../pages/animation';
import Wave from './Wave';


const AboutSection = () => {
    
    return (
        <About>
            <Discription>
                <motion.div  className="title">
                    <Hide>
                        < motion.h2 variants={titleAnim} >We work to  make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact for any Photography or Videography ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Discription>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="imge of guy holding camera" />
            </Image>
            <Wave />
        </About>
    )
}



export default AboutSection
