import React from 'react';
import './styles/intro.css'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Intro = () => {
    return (
        <div className='intro-section'>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6}>
                    <div className='intro-text'>
                        <p className='intro-text-heading'>
                            Hello.<br/>
                            I'm Nikhil<br/>
                        </p>
                    </div>
                </Grid>

                <Grid item xs={12} md={6} />

                <Grid item xs={12} md={6}>
                    <div className='intro-text'>
                        <p className='intro-text-description'>
                            I'm a Computer Science<br/>
                            Undergrad Student<br/>
                        </p>
                    </div>
                </Grid>

                <Grid item xs={6} md={2}>
                    <Grid container justifyContent="space-around" alignItems="center">
                        <a href="https://drive.google.com/file/d/14v_L5em5IVnnFeSJr4aeZLdXq8sKpTcm/view?usp=sharing" target="_blank">
                            <Button variant="contained" size="large" color="error" className="intro-resume-button"
                            sx={{
                                fontFamily: "Pacifico",
                                backgroundColor: "red",
                                fontSize: "25px",
                                fontWeight: "300",
                                textTransform: "None"
                            }}
                            >
                                Resume
                            </Button>
                        </a>
                    </Grid>
                </Grid>
                
                <Grid item xs={6} md={2}>
                    <Grid container justifyContent="space-around" alignItems="center">
                        <a href="https://www.linkedin.com/in/nikhil-boddupalli-504257129/" target="_blank">
                            <Button variant="outlined" size="large" color="error" className="intro-linkedin-button"
                            sx={{
                                fontFamily: "Pacifico",
                                color: "white",
                                borderColor: "red",
                                borderWidth: "2px",
                                fontSize: "25px",
                                fontWeight: "300",
                                textTransform: "None"
                            }}>
                                LinkedIn
                            </Button>
                        </a>
                    </Grid>
                </Grid>

            </Grid>
        </div>
        
    )
}

export default Intro;