import { Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import React from 'react';
import './Footer.style.scss';

const Footer = () => {
    return (
        <div className='Footer'>
            <div>
                <h2>Location</h2>
                <Typography>
                    Yeka
                    Addis Ababa, Ethiopia
                </Typography>
            </div>
            <div>
                <h2>Around The Web</h2>
                <div className='SocialIcons'>
                    <TelegramIcon />
                    <InstagramIcon />
                    <FacebookIcon />
                </div>
            </div>
            <div>
                <h2>More Info</h2>
                <div className='PhoneInfo'>
                    <LocalPhoneIcon />
                    <Typography>+251-111-140074</Typography>
                </div>
                <div className='PhoneInfo'>
                    <PhoneAndroidIcon />
                    <Typography>+251-911-690738 / +251-911-693829</Typography>
                </div>
                <div className='PhoneInfo'>
                    <LocalPostOfficeIcon />
                    <Typography>30744</Typography>
                </div>
            </div>
        </div>
    )
}

export default Footer;