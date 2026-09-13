import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import PageHero from '../components/PageHero';
import logo from '../../DikvoraX.jpg';

const values = [['Clarity first', 'Straightforward decisions, honest communication and no unnecessary complexity.'], ['Business-minded', 'Technology choices are grounded in the outcome your business needs.'], ['Quality in the details', 'Thoughtful interfaces and maintainable engineering from day one.'], ['Built to evolve', 'Products designed for the next stage, not only the first release.']];

export default function AboutPage({ navigate }) {
  return <>
    <PageHero eyebrow="ABOUT DIKVORAX" title="Technology should move your business forward." description="DikvoraX is a software and technology services company helping ambitious teams turn ideas into useful, dependable digital products." />
    <Box className="page-section"><Container maxWidth="lg" className="split-section about-split"><Box className="about-image"><img src={logo} alt="DikvoraX logo" /></Box><Box><Typography variant="h2">Built for teams who value quality and clarity</Typography><Typography color="text.secondary" sx={{ fontSize: 17, lineHeight: 1.8, mt: 2.5 }}>We work with startups and established businesses that need a capable technology partner. Our role is to simplify complex decisions, keep delivery transparent and build software that works well for the people who use it.</Typography><Typography color="text.secondary" sx={{ fontSize: 17, lineHeight: 1.8, mt: 2 }}>From a first product release to a custom business platform, we combine practical planning with modern engineering.</Typography></Box></Container></Box>
    <Box className="page-section soft-section"><Container maxWidth="lg"><Box className="section-intro"><Typography className="eyebrow" color="primary.main">OUR PRINCIPLES</Typography><Typography variant="h2">How we approach every project</Typography></Box><Box className="values-grid">{values.map(([title, text]) => <Box className="value-card" key={title}><Box className="check-icon"><CheckRoundedIcon /></Box><Typography variant="h3" sx={{ fontSize: 21, mt: 2.5 }}>{title}</Typography><Typography color="text.secondary" sx={{ lineHeight: 1.7, mt: 1 }}>{text}</Typography></Box>)}</Box></Container></Box>
    <Box className="page-section"><Container maxWidth="lg"><Box className="light-cta"><Box><Typography variant="h2">Looking for a dependable technology partner?</Typography><Typography color="text.secondary" sx={{ mt: 1.5 }}>Tell us what you’re working on.</Typography></Box><Button variant="contained" onClick={() => navigate('/contact')}>Talk to our team</Button></Box></Container></Box>
  </>;
}
