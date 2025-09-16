// src/components/LoadingScreen.js
import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

const LoadingScreen = ({ progress = 0 }) => {
  const codeLines = [
    "import React from 'react';",
    "import { Portfolio } from './components';",
    "",
    "function App() {",
    "  return <Portfolio />;",
    "}",
    "",
    "export default App;",
    "// Loading awesome content...",
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: '#1e1e1e',
        color: '#d4d4d4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Fira Code", "Monaco", monospace',
        zIndex: 9999,
      }}
    >
      <Box sx={{ width: '80%', maxWidth: 600 }}>
        <Typography variant="h6" sx={{ color: '#569cd6', mb: 2 }}>
          Compiling Portfolio... {Math.round(progress)}%
        </Typography>
        
        <Box sx={{ bgcolor: '#2d2d2d', p: 2, borderRadius: 1 }}>
          {codeLines.map((line, index) => (
            <Typography key={index} sx={{ fontFamily: 'monospace', fontSize: 14 }}>
              {line}
            </Typography>
          ))}
          <Box sx={{ display: 'inline-block', width: 8, height: 16, bgcolor: '#569cd6', animation: 'blink 1s infinite' }} />
        </Box>
        
        <LinearProgress 
          variant="determinate"
          value={progress}
          sx={{ 
            mt: 3, 
            height: 8, 
            borderRadius: 4,
            bgcolor: '#2d2d2d',
            '& .MuiLinearProgress-bar': {
              bgcolor: '#569cd6',
              transition: 'transform 0.3s ease',
            }
          }} 
        />
        
        <Typography variant="caption" sx={{ color: '#858585', mt: 1, display: 'block' }}>
          {progress < 30 && "Loading dependencies..."}
          {progress >= 30 && progress < 60 && "Building components..."}
          {progress >= 60 && progress < 90 && "Optimizing assets..."}
          {progress >= 90 && "Initializing animations..."}
        </Typography>
      </Box>
    </Box>
  );
};

export default LoadingScreen;