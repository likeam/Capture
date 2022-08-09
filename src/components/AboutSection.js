import React from 'react'
import home1 from '../img/home1.png';
//Styled
import {About,  Discription, Image, Hide } from '../style';
//Framer Motion
import {motion} from 'framer-motion';
const AboutSection = () => {
    
    return (
        <About>
            <Discription>
                <motion.div  className="title">
                    <Hide>
                        < motion.h2  >We work to  make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 >your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 >true.</motion.h2>
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
