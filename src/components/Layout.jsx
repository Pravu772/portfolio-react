// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';// Import the snow animation component
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const Layout = ({ children, scrollToSection, sectionRefs }) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#7986cb',
      },
      secondary: {
        main: '#ff4081',
      },
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
    },
    typography: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}> {/* Add snow animation here */}
      <Header scrollToSection={scrollToSection} sectionRefs={sectionRefs} />
      <main style={{ position: 'relative', zIndex: 2 }}>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;