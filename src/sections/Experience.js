// src/sections/Experience.js
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Chip,
  Divider
} from '@mui/material';
import { Work } from '@mui/icons-material';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Experience = () => {
  const [ref, isVisible] = useIntersectionObserver(0.1);
  
  const experiences = [
    {
      position: 'Python Intern',
      company: 'SAN Technovation Pvt. Ltd.',
      period: 'August 2025 - Present',
      description: 'Actively working on SAN Technovation’s real-time Resume Job Matcher project, where I leverage Python and APIs to parse resumes and extract key details with precision. while strengthening my skills in data processing and project collaboration, Gaining hands-on experience with real-world problem solving and software development best practices.',
      skills: ['Python', 'Fast API','Google Colab']
    }
  ];

  return (
    <Box className={`section ${isVisible ? 'section-visible' : 'section-hidden'}`} ref={ref} id="experience">
      <Container maxWidth="lg">
        <Typography variant="h2" className="section-title" gutterBottom>
          Experience
        </Typography>
        <Box sx={{ mt: 4 }}>
          {experiences.map((exp, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Paper className="section-card" elevation={3} sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Work color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h5" component="h2">
                    {exp.position}
                  </Typography>
                </Box>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  {exp.company} | {exp.period}
                </Typography>
                <Typography variant="body1" paragraph>
                  {exp.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {exp.skills.map((skill, i) => (
                    <Chip key={i} label={skill} className="section-chip" sx={{ mr: 1, mb: 1 }} />
                  ))}
                </Box>
              </Paper>
              {index < experiences.length - 1 && (
                <Divider sx={{ my: 2 }} />
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;