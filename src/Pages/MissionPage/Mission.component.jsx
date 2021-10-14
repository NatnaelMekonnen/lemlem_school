import { Divider, Typography } from '@mui/material';
import React from 'react';
import './Mission.style.scss';

const MissionPage = () => {
    return (
        <div className='MissionPage'>
            <Divider />
            <div className='Mission'>
                <div className='Tittle'>
                    <h2>Mission</h2>
                </div>
                <div className='Content'>
                    <Typography>
                        To give quality education and guide students to be creative, compitent and capable to solve problems.
                        To provide the required knowledge to enable students pass successfully the national exams and prepare students enter the university.
                        Working to improve the system of the learning and teaching activity and relate it with modern technology.
                        Work to produce a democratic, independent and confident citizens.
                    </Typography>
                </div>
            </div>
            <Divider />
            <div className='Mission'>
                <div className='Content'>
                    <Typography>
                        Our vision is to offer young children an advanced eduation related with scientific and technological development, which takes the nations demand, social and cultural aspect into account.
                        We strive to produce confident and hard working citizens.
                    </Typography>
                </div>
                <div className='Tittle'>
                    <h2>Vision</h2>
                </div>
            </div>
            <Divider />
            <div className='Mission'>
                <div className='Tittle'>
                    <h2>Objective</h2>
                </div>
                <div className='Content'>
                    <Typography>
                        Working to meet the demands of the government, society and parents in order to build capable citizens, who keep their promises and recognize Ethiopias beauty, unity and history.
                    </Typography>
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default MissionPage;