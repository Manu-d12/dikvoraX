import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import ProjectForm from '../components/ProjectForm';
import PageHero from '../components/PageHero';

export default function ContactPage() {
  return <><PageHero eyebrow="CONTACT US" title="Let’s talk about what you’re building." description="Share a few details about your idea, challenge or existing product. We’ll respond with useful next steps." /><Box className="page-section soft-section"><Container maxWidth="lg" className="contact-layout"><Box><Typography variant="h2" sx={{ fontSize: '2rem' }}>Start a conversation</Typography><Typography color="text.secondary" sx={{ lineHeight: 1.75, mt: 2 }}>Whether your requirements are detailed or still taking shape, you can start here.</Typography><Box className="contact-detail"><AccessTimeRoundedIcon /><Box><Typography variant="body2" color="text.secondary">Typical response</Typography><Typography fontWeight={700}>Within 1–2 business days</Typography></Box></Box></Box><ProjectForm compact /></Container></Box></>;
}
