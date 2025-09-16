// src/sections/About.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver(0.1);
  
  return (
    <Box className={`section ${isVisible ? 'section-visible' : 'section-hidden'}`} ref={ref} id="about">
      <Container maxWidth="md"> {/* Changed to md for narrower content */}
        <Typography variant="h2" className="section-title" gutterBottom>
          About Me
        </Typography>
        
        {/* Who I Am Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" gutterBottom color="primary.main" sx={{ mb: 3 }}>
            Who I Am
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            I'm Pravin M,<br/> a third-year Artificial Intelligence and Data Science Engineering student<br/> at Kongu Engineering College, passionate about building innovative solutions<br/> using AI and modern web technologies.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            
          </Typography>
        </Box>

        {/* What I Do Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom color="primary.main" sx={{ mb: 3 }}>
            What I Do
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Developing modern, scalable web applications using MERN.<br/>
            Works with AI and ML model to solve real-world problems.<br/>
            
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Specialties : <br/>
                Expertise in MERN Stack Web Development.<br />
                Skilled in Database Management & Optimization (SQL & NoSQL).<br />
                Strong problem-solving abilities with a focus on practical solutions.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;