// src/components/Footer.js
import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" gutterBottom>
          Connect with me:
        </Typography>

        {/* Social Links */}
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <IconButton
            aria-label="LinkedIn"
            component={Link}
            href="https://www.linkedin.com/in/pravinm3/"
            target="_blank"
            sx={{
              color: '#fff',
              transition: '0.3s',
              '&:hover': { color: '#0A66C2', transform: 'scale(1.2)' },
            }}
          >
            <LinkedIn />
          </IconButton>

          <IconButton
            aria-label="GitHub"
            component={Link}
            href="https://github.com/Pravu772"
            target="_blank"
            sx={{
              color: '#fff',
              transition: '0.3s',
              '&:hover': { color: '#c0c0c0', transform: 'scale(1.2)' },
            }}
          >
            <GitHub />
          </IconButton>

          <IconButton
            aria-label="Email"
            component={Link}
            href="mailto:pravinm2686@gmail.com"
            sx={{
              color: '#fff',
              transition: '0.3s',
              '&:hover': { color: '#EA4335', transform: 'scale(1.2)' },
            }}
          >
            <Email />
          </IconButton>
        </Box>

        {/* Footer Text */}
        <Typography variant="body2" align="center" mt={3} sx={{ opacity: 0.8 }}>
  © {new Date().getFullYear()} | Made with ❤️ by <span className="highlight">Pravin M</span>
</Typography>

      </Container>
    </Box>
  );
};

export default Footer;
