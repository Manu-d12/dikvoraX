import React from 'react';
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import logo from '../../DikvoraX.jpg';

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  return (
    <Box component="section" id="home" className="hero-section">
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box className="hero-grid">
          <Box className="reveal">
            <Chip label="Digital products · Software · AI" icon={<AutoAwesomeRoundedIcon />} className="hero-chip" />
            <Typography variant="h1" sx={{ color: '#fff', fontSize: { xs: '3rem', sm: '4.2rem', md: '5rem' }, maxWidth: 740, mt: 3 }}>
              Build Digital.<br /><span className="gradient-text">Build Smarter.</span>
            </Typography>
            <Typography sx={{ color: '#abb6c9', maxWidth: 640, fontSize: { xs: '1.06rem', md: '1.2rem' }, lineHeight: 1.75, mt: 3 }}>
              DikvoraX helps startups and businesses turn ideas into modern websites, applications, software platforms, and AI-powered solutions.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4.5, alignItems: { xs: 'stretch', sm: 'center' } }}>
              <Button size="large" variant="contained" endIcon={<ArrowForwardRoundedIcon />} onClick={() => goTo('contact')}>Start Your Project</Button>
              <Button size="large" variant="outlined" onClick={() => goTo('services')} sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,.06)' } }}>Explore Services</Button>
            </Stack>
            <Stack direction="row" spacing={{ xs: 2, sm: 4 }} sx={{ mt: 6, color: '#8490a6' }}>
              {[['Web', <CodeRoundedIcon />], ['Mobile', <DevicesRoundedIcon />], ['AI', <AutoAwesomeRoundedIcon />]].map(([x, icon]) => <Stack key={x} direction="row" spacing={1} alignItems="center"><span className="mini-icon">{icon}</span><Typography variant="body2" fontWeight={600}>{x}</Typography></Stack>)}
            </Stack>
          </Box>
          <Box className="hero-visual reveal delay-1">
            <Box className="visual-orbit orbit-one" />
            <Box className="visual-orbit orbit-two" />
            <Box className="logo-stage"><img src={logo} alt="DikvoraX logo" /></Box>
            <Box className="float-card card-code"><span className="status-dot" />Software engineered<br />for what's next</Box>
            <Box className="float-card card-ai"><AutoAwesomeRoundedIcon /> AI-ready</Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
