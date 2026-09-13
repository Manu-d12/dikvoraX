import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ProjectForm from '../components/ProjectForm';

export default function ServiceDetailPage({ service, navigate }) {
  const Icon = service.icon;
  return <>
    <Box className="service-detail-hero"><Container maxWidth="lg"><Button startIcon={<ArrowBackRoundedIcon />} onClick={() => navigate('/services')} sx={{ px: 0 }}>All services</Button><Box className="detail-heading"><Box className="large-service-icon"><Icon /></Box><Box><Typography className="eyebrow" color="primary.main">DIKVORAX SERVICE</Typography><Typography variant="h1" sx={{ fontSize: { xs: '2.7rem', md: '4.3rem' }, mt: 1.5 }}>{service.title}</Typography><Typography color="text.secondary" sx={{ fontSize: 19, lineHeight: 1.75, mt: 2, maxWidth: 720 }}>{service.description}</Typography></Box></Box></Container></Box>
    <Box className="page-section"><Container maxWidth="lg" className="detail-columns"><Box><Typography variant="h2">What we can build</Typography><Box className="detail-list">{service.deliverables.map((item) => <Box key={item}><CheckRoundedIcon /><Typography>{item}</Typography></Box>)}</Box></Box><Box className="outcome-panel"><Typography className="eyebrow" color="primary.main">DESIGNED FOR RESULTS</Typography><Typography variant="h2" sx={{ fontSize: '2rem', mt: 1.5 }}>What this creates for you</Typography>{service.outcomes.map((item) => <Box className="outcome-row" key={item}><span /><Typography fontWeight={650}>{item}</Typography></Box>)}</Box></Container></Box>
    <Box className="page-section soft-section" id="project-form"><Container maxWidth="md"><Box className="form-heading"><Typography className="eyebrow" color="primary.main">START A PROJECT</Typography><Typography variant="h2">Tell us about your {service.title.toLowerCase()} project</Typography><Typography color="text.secondary">The service is already selected. Add your details and we’ll get back to you.</Typography></Box><ProjectForm selectedService={service.title} /></Container></Box>
  </>;
}
