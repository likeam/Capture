import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
//Imges
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import Nav from '../components/Nav';
//Animation
import {motion} from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from './animation';



const OurWorks = () => {
    return (
        <motion.div variants= {pageAnimation} initial = "hidden" animate = "show" exit= "exit">
            <Nav />
        <Work 
        style={{ background: "#fff"}}
        exit= "exit"
        variants= {pageAnimation}
        initial ="hidden"
        animate = "show"
        >
            <motion.div variants={sliderContainer} >
                <Frame1 variants={slider} ></Frame1>
                <Frame2 variants={slider} ></Frame2>
                <Frame3 variants={slider} ></Frame3>
                <Frame4 variants={slider} ></Frame4>
            </motion.div>
        
            <Movie>
                <motion.h2 variants={fade} >The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/the-athlete"> 
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt="athele pic" /> 
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <motion.h2 variants={fade} >The Racer</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/the-race"> 
                    <Hide>
                        <motion.img variants={photoAnim} src={theracer} alt="racer pic" /> 
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <motion.h2 variants={fade} >Good Times</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to= "/goodtime">
                    <Hide>
                        <motion.img variants={photoAnim} src={goodtimes} alt="goodtime pic" /> 
                    </Hide>
                </Link>
            </Movie>
        </Work>
        </motion.div>
    )
}

const Work = styled.div`
    min-height: 90vh;
    overflow: hidden;
    padding: 5rem 10rem;
    background: white;
    h2{
        padding: 1rem 0rem;
        
    }
`;

const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover ;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    width: 100%;
    top: 10%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
    background: #8effa0;
`;


export default OurWorks
