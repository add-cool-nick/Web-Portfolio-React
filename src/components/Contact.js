import React from 'react';
import './styles/contact.css';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';

const About = () => {
    return (
        <div className='contact-section'>
            <Grid container spacing={0} direction='row-reverse'>

                <Grid item xs={12} md={5}>
                    <div className='contact-text'>
                        <p className='contact-text-heading'>
                            Contact
                        </p>
                    </div>
                </Grid>

                
                <Grid item xs={12} md={7}>
                    <Grid container justifyContent="center" alignItems="center">
                        {/* Contact icons go here */}
                        <a href="https://www.linkedin.com/in/nikhil-boddupalli-504257129/" target="_blank">
                            <IconButton aria-label="icon-1">
                                <LinkedInIcon color='primary' size='large' className='contact-button'
                                sx={{
                                    color: "#0e76a8",
                                    height: "4rem",
                                    width: "4rem"
                                }} />
                            </IconButton>
                        </a>
                        <a href="https://github.com/add-cool-nick" target="_blank">
                            <IconButton aria-label="icon-2">
                                <GitHubIcon size='large'className='contact-button'
                                sx={{
                                    color: "#c9510c",
                                    height: "4rem",
                                    width: "4rem"
                                }} />
                            </IconButton>
                        </a>
                        <a href="https://www.facebook.com/nikhil.boddupalli.3/" target="_blank">
                            <IconButton aria-label="icon-3">
                                <FacebookIcon size='large' className='contact-button'
                                sx={{
                                    color: "#3b5998",
                                    height: "4rem",
                                    width: "4rem"
                                }} />
                            </IconButton>
                        </a>
                        <a>
                            <IconButton aria-label="icon-4">
                                <GoogleIcon size='large' className='contact-button'
                                sx={{
                                    color: "#DB4437",
                                    height: "4rem",
                                    width: "4rem"
                                }} />
                            </IconButton>
                        </a>

                    </Grid>
                </Grid>

                

            </Grid>
            
        </div>
    )
}

export default About;