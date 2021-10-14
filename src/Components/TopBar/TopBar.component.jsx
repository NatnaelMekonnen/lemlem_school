import { Typography } from '@mui/material';
import React from 'react';
import Logo from '../../Images/Logo.svg';
import './TopBar.style.scss';

const TopBar = () => {
    return (
        <div className='TopBar'>
            <div className='LogoContainer'>
                <img src={Logo} alt='LS' />
                <h2>Lemlem School</h2>
            </div>
            <div className='NavMenu'>
                <Typography>Home</Typography>
                <Typography>News</Typography>
                <Typography noWrap>Contact Us</Typography>
            </div>
        </div>
    )
}

export default TopBar;