import React from 'react';
import './styles/projects.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

const About = () => {
    return (
        <div className='projects-section'>
            <Grid container spacing={0}>
            
                <Grid item xs={12} md={4}>
                    <div className='projects-text'>
                    <p className='projects-text-heading'>
                        Projects
                    </p>
                    <p className='projects-text-description'>
                        Check out some of the cool stuff<br/>
                        that I've worked on<br/>
                    </p>
                </div>
            </Grid>

            

            <Grid item xs={12} md={8}
            sx={{
                marginTop: "10rem",
                marginBottom: "2rem"
            }}>
                <Grid container justifyContent="space-around" alignItems="center">
                    <Card sx={{ maxWidth: 345, margin: "0.75rem", height: "400px" }}>
                        <a href="https://github.com/add-cool-nick/Waves-2019" target="_blank">
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="250px"
                                image="/waves.jpg"
                                alt="Waves"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Waves-2019, BITS Goa
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Web Application for the Official Cultural Festival of BITS Goa,
                                    2019
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </a>
                    </Card>

                    <Card sx={{ maxWidth: 345, margin: "0.75rem", height: "400px" }}>
                        <a href="https://github.com/add-cool-nick/Project-Management-App" target="_blank">
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="250px"
                                image="/android.jpg"
                                alt="Android"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Project Management App
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Android Application for managing project details and finances,
                                    developed for CSIR-CEERI Pilani
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </a>
                    </Card>
                

                    <Card sx={{ maxWidth: 345, margin: "0.75rem", height: "400px" }}>
                        <a href="https://github.com/itskaranshetty/Approx-Algorithms" target="_blank">
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="225px"
                                image="/algorithms.png"
                                alt="Algorithms"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Empirical Analysis of Approximation Algorithms
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Implementation of code for the Vertex Cover, Bin Packing Problem, Set Cover and the Travelling Salesman problem and
                                    comparison of Brute force with various approximation algorithms
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </a>
                    </Card>

                    <Card sx={{ maxWidth: 345, margin: "0.75rem", height: "400px" }}>
                        <a href="https://colab.research.google.com/drive/1KEV30gsbw5tIZ-5pnYmeb55jiHmiYAq9?usp=sharing" target="_blank">
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="250px"
                                image="/deep_learning.png"
                                alt="Deep Learning"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Skip Connections in MLPs
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Studied various types of Skip Connections and their impact
                                    on Multilayer Perceptrons
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </a>
                    </Card>
                
                </Grid>

                <Grid item xs={12}>
                <Grid container justifyContent="space-around" alignItems="center">
                    <a href="https://github.com/add-cool-nick" target="_blank">
                        <Button variant="contained" size="large" color="error" className="intro-resume-button"
                            sx={{
                                fontFamily: "Pacifico",
                                backgroundColor: "red",
                                fontSize: "25px",
                                fontWeight: "300",
                                textTransform: "None",
                                marginTop: "50px"
                            }}
                            >
                            More
                        </Button>
                    </a>

                </Grid>
                </Grid>
            
            
            </Grid>


            </Grid>
            
        </div>
    )
}

export default About;