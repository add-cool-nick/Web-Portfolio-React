import React from 'react';
import './styles/workexperience.css';
import Grid from '@mui/material/Grid';
// import GSLogo from './../../public/gs_logo.png'

const About = () => {
    return (
        <div className='workexperience-section'>
            <Grid container spacing={0}>
                <Grid container justifyContent="center" alignItems="center">

                    <Grid item xs={12} md={1} />
                    <Grid item xs={12} md={4}>
                        <div className='workexperience-text'>
                            <p className='workexperience-text-heading'>
                                Work Experience
                            </p>
                            {/* <p className='workexperience-text-description'>
                                Check out some of the cool stuff<br/>
                                that I've worked on<br/>
                            </p> */}
                        </div>
                    </Grid>

                
                    <Grid item xs={12} md={7}>
                        <Grid container justifyContent="center" alignItems="center">
                        {/* Org logos and text goes here */}
                        <img src='/gs_logo.png' alt='Goldman Sachs Logo' className='org-logo' />
                        <img src='/nutanix_logo.png' alt='Nutanix Logo' className='org-logo' />
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
            
        </div>
    )
}

export default About;