import { Typography } from '@mui/material';
import React from 'react';
import Logo from '../../Images/Logo.svg';
import { scroller } from 'react-scroll';
import './TopBar.style.scss';

const TopBar = () => {

    const constscrollToHome = () => {
        scroller.scrollTo("LandingPage", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    const constscrollToNews = () => {
        scroller.scrollTo("NewsPage", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    const constscrollToContactUs = () => {
        scroller.scrollTo("ContactUsPage", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    return (
        <div className='TopBar'>
            <div className='LogoContainer'>
                <img src={Logo} alt='LS' />
                <h2>Lemlem School</h2>
            </div>
            <div className='NavMenu'>
                <Typography
                    onClick={constscrollToHome}
                >Home</Typography>
                <Typography
                    onClick={constscrollToNews}
                >News</Typography>
                <Typography
                    noWrap
                    onClick={constscrollToContactUs}
                >Contact Us</Typography>
            </div>
        </div>
    )
}

export default TopBar;