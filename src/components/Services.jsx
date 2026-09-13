import React from 'react';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import WebRoundedIcon from '@mui/icons-material/WebRounded';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import SectionHeading from './SectionHeading';

const services = [
  [<WebRoundedIcon />, 'Frontend Development', 'Modern, responsive and high-performance user interfaces using React and modern JavaScript.'],
  [<DnsRoundedIcon />, 'Backend Development', 'Reliable APIs, business logic, databases and scalable backend systems.'],
  [<LanguageRoundedIcon />, 'Website Development', 'Professional business websites, landing pages, e-commerce platforms and custom web applications.'],
  [<PhoneIphoneRoundedIcon />, 'Mobile App Development', 'Modern mobile experiences for businesses, customers and internal teams.'],
  [<PsychologyRoundedIcon />, 'AI-Based Solutions', 'AI-powered applications, generative AI integrations, chatbots, automation and intelligent workflows.'],
  [<AppsRoundedIcon />, 'Custom Software', 'End-to-end software solutions designed around unique business requirements.'],
];

export default function Services() {
  return (
    <Box component="section" id="services" className="section-pad">
      <Container maxWidth="lg">
        <SectionHeading eyebrow="OUR EXPERTISE" title="What We Build" subtitle="From web experiences to intelligent software, we build solutions around your business needs." />
        <Grid container spacing={3}>
          {services.map(([icon, title, desc], i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={title}>
              <Card className="service-card reveal" sx={{ animationDelay: `${i * .06}s` }}>
                <CardContent sx={{ p: { xs: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box className="icon-box">{icon}</Box>
                  <Typography variant="h3" sx={{ fontSize: 20, mt: 3 }}>{title}</Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.75, mt: 1.5, flexGrow: 1 }}>{desc}</Typography>
                  <Box className="learn-more">Learn more <ArrowOutwardRoundedIcon fontSize="small" /></Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
