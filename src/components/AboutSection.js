import React from 'react'
import home1 from '../img/home1.png';
//Styled
import styled from 'styled-components';

const AboutSection = () => {
    return (
        <About>
            <div className="discription">
                <div className="title">
                    <div className="hide">
                        <h2>We work to  make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact for any Photography or Videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="imge of guy holding camera" />
            </div>
        </About>
    )
}

const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

export default AboutSection
