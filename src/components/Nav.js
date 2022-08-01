import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <StyledNav>
            <h1><a  id='logo'>1<Link to= "/">Capture</Link></a></h1>
            <ul>
                <li>
                    
                    <Link to="/">AboutUs</Link>  | {""}    
        
                </li>
                <li>
            
                    <Link to="/works">OurWorks</Link>
                </li>
                <li>
                
                    <Link to="/contact">ContactUs</Link>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;

    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }

    li{
        padding-left: 10rem;
        position: relative;
    }

`;



export default Nav
