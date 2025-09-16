// src/sections/Honors.js
import React from 'react';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  Paper
} from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Honors = () => {
  const [ref, isVisible] = useIntersectionObserver(0.1);
  
  const honors = [
    {
      title: 'Academic Excellence Award',
      organization: 'Issued by The The Kongu Vellalar Institute of Technology Trust',
      date: '2024',
      description: 'Awarded for outstanding academic performance during the 2023–2024 academic year, associated with Kongu Engineering College. (May 2024)',
    },
    {
      title: 'Certificate of Merit Scholarship',
      organization: 'Issued by The Kongu Vellalar Institute of Technology Trust',
      date: '2023–2024',
      description: 'Honored with a monetary scholarship in recognition of sustained academic excellence throughout the 2023–2024 academic year',
    }
  ];

  return (
    <Box className={`section ${isVisible ? 'section-visible' : 'section-hidden'}`} ref={ref} id="honors">
      <Container maxWidth="lg">
        <Typography variant="h2" className="section-title" gutterBottom>
          Honors & Awards
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Paper className="section-card" elevation={3} sx={{ p: 3 }}>
            <List sx={{ width: '100%' }}>
              {honors.map((honor, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <ListItem alignItems="flex-start" sx={{ py: 2 }}>
                    <ListItemIcon>
                      <EmojiEvents color="primary" className="section-icon" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                          <Typography variant="h6">{honor.title}</Typography>
                          <Chip label={honor.date} variant="outlined" className="section-chip" />
                        </Box>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body1" color="text.primary">
                            {honor.organization}
                          </Typography>
                          <Box sx={{ height: '1em' }} /> {/* One line gap */}
                          <Typography component="span" variant="body2" color="text.secondary">
                            {honor.description}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  {index < honors.length - 1 && <Divider variant="inset" component="li" sx={{ my: 2 }} />}
                </Box>
              ))}
            </List>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Honors;