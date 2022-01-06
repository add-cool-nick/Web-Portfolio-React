import React from 'react';
import './styles/skills.css';
import SkillsTable from './SkillsTable';
import Grid from '@mui/material/Grid';


const About = () => {
    return (
        <div className='skills-section'>
            <Grid container spacing={0} direction="row-reverse">

                <Grid item xs={12} md={5}>
                    <div className='skills-text'>
                        <p className='skills-text-heading'>
                            Skills
                        </p>
                    </div>
                </Grid>

                <Grid item xs={12} md={7}>
                    <Grid container justifyContent="space-around" alignItems="center">
                        <div className='skills-table-div'>
                            <SkillsTable />
                        </div>
                    </Grid>
                </Grid>

            </Grid>
            
        </div>
    )
}

export default About;