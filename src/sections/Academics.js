// src/sections/Academics.js
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  Chip
} from '@mui/material';
import { School } from '@mui/icons-material';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Academics = () => {
  const [ref, isVisible] = useIntersectionObserver(0.1);
  
  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence and Data Science',
      institution: 'Kongu Engineering College',
      period: '2023 – 2027',
      details: 'CGPA: 7.8/10.0 (till 4th Semester)',
      relevantCourses: [
        'Deep Learning',
        'Java',
        'Database Management Systems'
      ]
    },
    {
      degree: 'Class XII (Higher Secondary)',
      institution: 'Shri Vidhyabharathi Matric Higher Secondary School',
      period: '2022 – 2023',
      details: 'Percentage: 92.8% | Higher Secondary, Biology, General.',
      relevantCourses: [] // Empty array for no courses
    }
  ];

  return (
    <Box className={`section ${isVisible ? 'section-visible' : 'section-hidden'}`} ref={ref} id="academics">
      <Container maxWidth="lg">
        <Typography variant="h2" className="section-title" gutterBottom>
          Academics
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Stepper orientation="vertical">
            {education.map((edu, index) => (
              <Step key={index} active={true}>
                <StepLabel StepIconComponent={School}>
                  <Typography variant="h6">{edu.degree}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {edu.institution} | {edu.period}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Paper className="section-card" elevation={3} sx={{ p: 3, mb: 2 }}>
                    <Typography variant="body1" paragraph>
                      {edu.details}
                    </Typography>
                    
                    {/* Show relevant courses only for B.Tech */}
                    {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                      <>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                          Relevant Courses:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                          {edu.relevantCourses.map((course, i) => (
                            <Chip 
                              key={i} 
                              label={course} 
                              className="section-chip"
                              size="small"
                            />
                          ))}
                        </Box>
                      </>
                    )}
                  </Paper>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Container>
    </Box>
  );
};

export default Academics;