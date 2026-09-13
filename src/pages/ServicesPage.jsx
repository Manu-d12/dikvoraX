import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import PageHero from '../components/PageHero';
import ServiceCards from '../components/ServiceCards';

export default function ServicesPage({ navigate }) {
  return <>
    <PageHero eyebrow="OUR SERVICES" title="The right expertise for your next digital product." description="From a focused website to a complete software platform, we bring together strategy, design and engineering around your needs." />
    <Box className="page-section soft-section"><Container maxWidth="lg"><ServiceCards navigate={navigate} /></Container></Box>
    <Box className="page-section"><Container maxWidth="lg" className="service-note"><Typography variant="h2">Not sure which service fits?</Typography><Typography color="text.secondary" sx={{ fontSize: 17, lineHeight: 1.75, mt: 2 }}>Start with the business challenge. We’ll help you define the right solution and a practical route forward.</Typography></Container></Box>
  </>;
}
