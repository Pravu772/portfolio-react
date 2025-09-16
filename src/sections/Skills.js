// src/sections/Skills.js
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  LinearProgress,
  Paper,
} from '@mui/material';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver(0.1);
  
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', proficiency: 90 },
        { name: 'Sql', proficiency: 85 },
        { name: 'Python', proficiency: 75 },
        { name: 'JavaScript', proficiency: 70 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [                
        { name: 'Numpy', proficiency: 95 },
        { name: 'React', proficiency: 80 },
        { name: 'Express', proficiency: 75 },
        { name: 'Matplotlib', proficiency: 85 },
      ],
    },
    { 
      title: 'Tools & Technologies', 
      skills: [
        { name: 'VS Code', proficiency: 95 },
        { name: 'Git & Github', proficiency: 75 },
        { name: 'Google colab', proficiency: 80 },
        { name: 'PowerBI', proficiency: 75 },
      ],
    },
  ];

  return (
    <Box className={`section ${isVisible ? 'section-visible' : 'section-hidden'}`} ref={ref} id="skills">
      <Container maxWidth="lg">
        <Typography variant="h2" className="section-title" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper className="section-card" elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom color="primary.main">
                  {category.title}
                </Typography>
                {category.skills.map((skill, skillIndex) => (
                  <Box key={skillIndex} sx={{ mb: 2 }}>
                    <Typography variant="body1" gutterBottom>
                      {skill.name}
                    </Typography>
                    <Box className="section-progress">
                      <LinearProgress
                        variant="determinate"
                        value={skill.proficiency}
                        sx={{ height: 8, borderRadius: 4 }}
                      />
                    </Box>
                    <Typography variant="body2" color="textSecondary" align="right">
                      {skill.proficiency}%
                    </Typography>
                  </Box>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;