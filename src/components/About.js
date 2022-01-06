import React from 'react';
import './styles/about.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CodeIcon from '@mui/icons-material/Code';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const About = () => {
    return (
        <div className='about-section'>
            <Grid container spacing={0} direction='row-reverse'>

                <Grid item xs={12} md={8}>
                    <Grid container justifyContent="space-around" alignItems="center">
                        <div className='about-text'>
                            <p className='about-text-heading'>
                                About Me
                            </p>
                            <p className='about-text-description'>
                                Hey there, Thanks for visiting my page.<br/>
                                I study Computer Science at BITS Pilani.<br/>
                                I love Software Development, Reading Books and Problem Solving.<br/>
                                Also, did I mention I’m also an avid gamer?
                            </p>
                        </div>
                    </Grid>
                </Grid>


                <Grid item xs={12} md={4} className='cards-block'
                sx={{
                    marginTop: "15rem",
                    marginBottom: "2rem"
                }}>
                
                    {/* The revolving cards go here */}
                    <Grid item xs={12} md={12}>
                    <Grid container justifyContent="space-around" alignItems="center">
                        <div className='about-card'>
                            <CodeIcon className='about-card-icon'
                            sx={{
                                height: "5rem",
                                width: "5rem"
                            }} />
                        </div>
                    </Grid> 
                    </Grid>
                    
                    <Grid item xs={12} md={12}>
                    <Grid container justifyContent="space-around" alignItems="center">
                        <div className='about-card'>
                            <SportsEsportsIcon className='about-card-icon'
                            sx={{
                                height: "5rem",
                                width: "5rem"
                            }} />
                        </div>

                        <div className='about-card'>
                            <MenuBookIcon className='about-card-icon'
                            sx={{
                                height: "5rem",
                                width: "5rem"
                            }} />
                        </div>
                    </Grid>
                    </Grid>
                    
                </Grid>

            </Grid>
            
        </div>
    )
}

export default About;