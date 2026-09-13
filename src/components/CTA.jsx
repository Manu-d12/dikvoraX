import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export default function CTA() {
  return (
    <Box component="section" sx={{ px: { xs: 2, md: 3 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg" className="cta-panel">
        <Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: '2.2rem', md: '3.5rem' } }}>Have an Idea? Let's Build It.</Typography>
        <Typography sx={{ color: '#c4cae8', maxWidth: 690, mx: 'auto', mt: 2, lineHeight: 1.75, fontSize: { md: 18 } }}>Whether you need a website, application, custom software or an AI-powered solution, let's turn your idea into something real.</Typography>
        <Button variant="contained" color="inherit" endIcon={<ArrowForwardRoundedIcon />} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} sx={{ mt: 4, color: '#3f25cf', bgcolor: '#fff', '&:hover': { bgcolor: '#eef0ff' } }}>Start a Conversation</Button>
      </Container>
    </Box>
  );
}
