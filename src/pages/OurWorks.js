import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
//Imges
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import Nav from '../components/Nav';



const OurWorks = () => {
    return (
        <div>
            <Nav />
        <Work>
        
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/"> <img src={athlete} alt="athele pic" /> </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/"> <img src={theracer} alt="racer pic" /> </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to= "/"> <img src={goodtimes} alt="goodtime pic" /> </Link>
            </Movie>
        </Work>
        </div>
    )
}

const Work = styled.div`
    min-height: 90vh;
    overflow: hidden;
    padding: 5rem 10rem;
    background: #1b1b1b;
    h2{
        padding: 1rem 0rem;
        color: white;
    }
`;

const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover ;
    }
`;
export default OurWorks
