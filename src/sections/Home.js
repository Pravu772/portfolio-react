// src/sections/Home.js
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Avatar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Download, ArrowDownward } from '@mui/icons-material';

const Home = ({ scrollToSection, sectionRefs }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "Welcome to my portfolio website!";
  const typingSpeed = 100; // milliseconds per character
  const cursorBlinkSpeed = 500; // milliseconds

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  // Cursor blink effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorTimer);
  }, []);

  // Safe function to handle scrolling
  const handleScrollToSection = (ref) => {
    if (scrollToSection && ref) {
      scrollToSection(ref);
    }
  };

  return (
    <Box className="section home-section" sx={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: 4 
        }}>
          {/* Profile Image */}
          <Avatar
            src="itzme.jpg"
            sx={{ 
              width: isMobile ? 200 : 280, 
              height: isMobile ? 200 : 280,
              border: '4px solid',
              borderColor: 'primary.main',
              boxShadow: '0 0 30px rgba(121, 134, 203, 0.5)',
            }}
          />

          {/* Text Content */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              component="h1"
              variant={isMobile ? "h3" : "h2"}
              color="primary.main"
              gutterBottom
              sx={{ fontWeight: 'bold', mb: 2 }}
            >
              Hi, I'm Pravin M
            </Typography>
            
            <Typography
              variant={isMobile ? "h6" : "h5"}
              color="text.secondary"
              paragraph
              sx={{ 
                mb: 3, 
                maxWidth: '800px', 
                mx: 'auto',
                minHeight: isMobile ? '4rem' : '3.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {displayText}
              <Box
                component="span"
                sx={{
                  width: '2px',
                  height: isMobile ? '1.2rem' : '1.5rem',
                  bgcolor: 'primary.main',
                  ml: 0.5,
                  animation: 'blink 1s infinite',
                  opacity: showCursor ? 1 : 0,
                  transition: 'opacity 0.3s ease'
                }}
              />
            </Typography>
            
            {/* Action Buttons */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 2, 
              flexWrap: 'wrap', 
              mb: 4 
            }}>
              <Button
                variant="contained"
                onClick={() => handleScrollToSection(sectionRefs?.projectsRef)}
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  backgroundColor: 'rgba(121, 134, 203, 0.8)',
                  '&:hover': {
                    backgroundColor: 'rgba(121, 134, 203, 1)',
                  }
                }}
              >
                View My Work
              </Button>
              
              <Button
                variant="outlined"
                startIcon={<Download />}
                href="/Resume _ PRAVIN M.pdf"
                download="PRAVIN M_Resume.pdf"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  borderColor: 'rgba(121, 134, 203, 0.5)',
                  color: 'rgba(121, 134, 203, 0.9)',
                  '&:hover': {
                    borderColor: 'rgba(121, 134, 203, 0.8)',
                    backgroundColor: 'rgba(121, 134, 203, 0.1)',
                  }
                }}
              >
                Download Resume
              </Button>
            </Box>
            
            {/* Learn More Button */}
            <Button
              color="primary"
              onClick={() => handleScrollToSection(sectionRefs?.aboutRef)}
              startIcon={<ArrowDownward />}
              sx={{ 
                mt: 2,
                fontWeight: 'medium',
                color: 'rgba(121, 134, 203, 0.9)',
              }}
            >
              Learn more about me
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;