// src/sections/Projects.js
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver(0.1);
  
  const projects = [
    {
      title: 'Job Matcher - MERN',
      description: 'A MERN Stack web application that intelligently analyzes uploaded resumes and recommends the most suitable job roles based on extracted skills and experience.',
      technologies: ['React.js','Node.js','Express.js', 'MongoDB'],
      githubUrl: 'https://github.com/Pravu772/Job-Matcher-MERN.git',
      liveUrl: '',
    },
    {
      title: 'Campus Power Usage Optimization - Sql',
      description: 'A SQL-based project to track and optimize power usage in a campus.',
      technologies: ['Sql', 'Database Design', 'Database Modeling'],
      githubUrl: 'https://github.com/Pravu772/Campus-Power-Usage-Optimization-DB-System.git',
      liveUrl: '',
    },
    {
      title: 'Accounting System - Java',
      description: 'A basic console-based accounting system built with Java. This project helps track accounts, deposit/withdraw money, view balances, and maintain a simple transaction history.',
      technologies: ['Java', 'Object-Oriented Programming (OOP)'],
      githubUrl: 'https://github.com/Pravu772/Java_project.git',
      liveUrl: '',
    },
    {
      title: 'Portfolio - React.js',
      description: 'A personal portfolio website built with React.js to showcase my projects, skills, and experience. It features a clean and modern design with smooth scrolling and responsive layout.',
      technologies: ['React.js', 'JavaScript', 'CSS'],
      githubUrl: '',
      liveUrl: 'wsdfergtyj',
    },
  ];

  return (
    <Box 
      className={`section ${isVisible ? 'section-visible' : 'section-hidden'}`} 
      ref={ref} 
      id="projects"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        py: 4
      }}
    >
      <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography 
          variant="h2" 
          className="section-title" 
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: 4
          }}
        >
          Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} md={8} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card 
                className="section-card" 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  textAlign: 'center',
                  width: '100%',
                  maxWidth: '600px',
                  boxShadow: 3,
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography paragraph sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        className="section-chip"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button
                    size="small"
                    startIcon={<GitHub />}
                    href={project.githubUrl}
                    target="_blank"
                    className="section-button"
                    variant="outlined"
                  >
                    VIEW CODE
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="small"
                      startIcon={<Launch />}
                      href={project.liveUrl}
                      target="_blank"
                      className="section-button"
                      variant="contained"
                    >
                      LIVE DEMO
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;