import { Typography } from '@mui/material';
import React from 'react';
import Logo from '../Images/Logo.svg';

const App = () => {
  return (
    <div>
      <div className='TopBar'>
        <div>
          <img src={Logo} alt='LS' />
          <Typography>Lemlem School</Typography>
        </div>
      </div>
      <div className='LandingPage'>

      </div>
    </div>
  )
}

export default App;