import React from 'react';
import { Box, Button, Chip, Container, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ServiceCards from '../components/ServiceCards';
import logo from '../../DikvoraX.jpg';

const reasons = ['Business-first thinking', 'Clear, dependable communication', 'Modern, scalable engineering', 'One team from idea to launch'];
const steps = [['01', 'Discover', 'We learn your goals, users and constraints.'], ['02', 'Define', 'We shape the right solution and delivery plan.'], ['03', 'Build', 'We design and develop with regular feedback.'], ['04', 'Launch', 'We prepare your product for real users and growth.']];

export default function HomePage({ navigate }) {
  return (
    <>
      <Box className="home-hero">
        <Container maxWidth="lg" className="home-hero-grid">
          <Box>
            <Chip label="Software development partner" className="light-chip" />
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4.3rem', md: '5rem' }, mt: 3 }}>Digital products built for <span className="blue-text">real growth.</span></Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 680, fontSize: { xs: 17, md: 20 }, lineHeight: 1.7, mt: 3 }}>DikvoraX helps startups and businesses design and build high-quality websites, applications, custom software and AI-powered products.</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 4 }}>
              <Button variant="contained" size="large" endIcon={<ArrowForwardRoundedIcon />} onClick={() => navigate('/contact')}>Start your project</Button>
              <Button variant="outlined" size="large" onClick={() => navigate('/services')}>Explore services</Button>
            </Box>
            <Box className="trust-row"><Typography>Built with clarity.</Typography><Typography>Designed for scale.</Typography><Typography>Delivered collaboratively.</Typography></Box>
          </Box>
          <Box className="home-logo-panel">
            <img src={logo} alt="DikvoraX software development company" />
            <Box className="logo-caption"><span className="online-dot" /><Box><Typography fontWeight={700}>Your technology partner</Typography><Typography variant="body2" color="text.secondary">Web · Mobile · Software · AI</Typography></Box></Box>
          </Box>
        </Container>
      </Box>

      <Box className="page-section soft-section">
        <Container maxWidth="lg">
          <Box className="section-intro"><Typography className="eyebrow" color="primary.main">WHAT WE DO</Typography><Typography variant="h2">Technology services built around your business</Typography><Typography color="text.secondary">Focused expertise for every stage of your digital product.</Typography></Box>
          <ServiceCards navigate={navigate} />
          <Box sx={{ textAlign: 'center', mt: 5 }}><Button variant="outlined" onClick={() => navigate('/services')}>View all services</Button></Box>
        </Container>
      </Box>

      <Box className="page-section">
        <Container maxWidth="lg" className="split-section">
          <Box><Typography className="eyebrow" color="primary.main">WHY DIKVORAX</Typography><Typography variant="h2" sx={{ mt: 1.5 }}>A practical partner, not just a development vendor</Typography><Typography color="text.secondary" sx={{ fontSize: 17, lineHeight: 1.75, mt: 2 }}>Good software starts with understanding the business problem. We bring product thinking, design sensitivity and dependable engineering to every engagement.</Typography><Button variant="outlined" onClick={() => navigate('/about')} sx={{ mt: 3 }}>More about us</Button></Box>
          <Box className="reason-list">{reasons.map((reason) => <Box key={reason} className="reason-item"><CheckCircleRoundedIcon /><Typography fontWeight={700}>{reason}</Typography></Box>)}</Box>
        </Container>
      </Box>

      <Box className="page-section soft-section">
        <Container maxWidth="lg">
          <Box className="section-intro"><Typography className="eyebrow" color="primary.main">HOW WE WORK</Typography><Typography variant="h2">A clear path from idea to launch</Typography></Box>
          <Box className="steps-grid">{steps.map(([number, name, text]) => <Box className="step-card" key={name}><Typography className="step-label">{number}</Typography><Typography variant="h3" sx={{ fontSize: 21, mt: 3 }}>{name}</Typography><Typography color="text.secondary" sx={{ lineHeight: 1.7, mt: 1 }}>{text}</Typography></Box>)}</Box>
        </Container>
      </Box>

      <Box className="page-section"><Container maxWidth="lg"><Box className="light-cta"><Box><Typography variant="h2">Have a product idea?</Typography><Typography color="text.secondary" sx={{ mt: 1.5, fontSize: 17 }}>Let’s discuss the right way to bring it to life.</Typography></Box><Button variant="contained" size="large" onClick={() => navigate('/contact')}>Start a conversation</Button></Box></Container></Box>
    </>
  );
}
