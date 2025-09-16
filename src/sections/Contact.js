// src/sections/Contact.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Alert,
  Paper,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import { Send, Email, Phone, LocationOn, Close } from '@mui/icons-material';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver(0.1);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [autoReplyOpen, setAutoReplyOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // show auto-reply immediately
  setAutoReplyOpen(true);

  emailjs
    .send(
      'service_yj6pr2b',     // Replace with your EmailJS Service ID
      'template_6uc0bqt',    // Replace with your EmailJS Template ID
      formData,
      'ImNBjBPbojLxWbhUA'    // Replace with your EmailJS Public Key
    )
    .then(
      () => {
        setSubmitStatus('success');
        setFormData({ from_name: '', from_email: '', message: '' });

        // Close dialog automatically after 3 sec
        setTimeout(() => {
          setAutoReplyOpen(false);
          setSubmitStatus(null);
        }, 5000);
      },
      (error) => {
        console.error('FAILED...', error);
        setSubmitStatus('error');
        setAutoReplyOpen(false); // close dialog if failed
      }
    );
};


  const handleCloseAutoReply = () => {
    setAutoReplyOpen(false);
  };

  return (
    <Box
      className={`section ${isVisible ? 'section-visible' : 'section-hidden'}`}
      ref={ref}
      id="contact"
    >
      <Container maxWidth="lg">
        <Typography variant="h2" className="section-title" gutterBottom>
          Contact Me
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Left Contact Info */}
          <Grid item xs={12} md={6}>
            <Paper className="section-card" elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom color="primary.main">
                Get in Touch
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email sx={{ mr: 2 }} className="section-icon" />
                <Typography>pravinm2686@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone sx={{ mr: 2 }} className="section-icon" />
                <Typography>+91 63810 17750</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ mr: 2 }} className="section-icon" />
                <Typography>Tiruchengode, Tamilnadu</Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Right Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper className="section-card" elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom color="primary.main">
                Send a Message
              </Typography>

              {submitStatus === 'error' && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  Failed to send your message. Please try again.
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="from_email"
                  type="email"
                  value={formData.from_email}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<Send />}
                  className="section-button"
                  sx={{ mt: 2 }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>

        {/* Auto-Reply Dialog */}
        <Dialog 
          open={autoReplyOpen} 
          onClose={handleCloseAutoReply}
          PaperProps={{
            sx: {
              borderRadius: 2,
              p: 1,
              background: 'linear-gradient(45deg, #02111bff 30%, #4c0114ff 90%)'
            }
          }}
        >
          <DialogContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                Message Confirmation
              </Typography>
              <IconButton onClick={handleCloseAutoReply} size="small">
                <Close />
              </IconButton>
            </Box>
            <Typography>
              Thanks for reaching out, I will get back to you soon!
            </Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
            <Button 
              onClick={handleCloseAutoReply} 
              variant="contained" 
              color="primary"
              sx={{ borderRadius: 2 }}
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Contact;