import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import GestureRoundedIcon from '@mui/icons-material/GestureRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import AllInclusiveRoundedIcon from '@mui/icons-material/AllInclusiveRounded';
import SectionHeading from './SectionHeading';

const benefits = [
  [<BusinessCenterRoundedIcon />, 'Built Around Your Business', 'We focus on your actual business requirements instead of forcing a generic solution.'],
  [<BoltRoundedIcon />, 'Modern Technology', 'We use modern development tools and technologies to create maintainable products.'],
  [<TrendingUpRoundedIcon />, 'Scalable Solutions', 'Solutions are designed with future growth in mind.'],
  [<GestureRoundedIcon />, 'Clean User Experience', 'We focus on interfaces that are simple, intuitive and easy to use.'],
  [<ForumRoundedIcon />, 'Transparent Communication', 'Clear communication throughout the development process.'],
  [<AllInclusiveRoundedIcon />, 'End-to-End Development', 'From idea and UI to development, deployment and ongoing improvements.'],
];

export default function WhyUs() {
  return (
    <Box component="section" id="why-us" className="section-pad dark-section">
      <Container maxWidth="lg">
        <SectionHeading eyebrow="WHY DIKVORAX" title="A better way to build" subtitle="A focused technology partner who thinks beyond the brief and stays close to your business goals." light />
        <Grid container spacing={2.5}>
          {benefits.map(([icon, title, desc], i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={title}>
              <Box className="benefit-card">
                <Box className="benefit-number">0{i + 1}</Box>
                <Box className="dark-icon">{icon}</Box>
                <Typography variant="h3" sx={{ color: '#fff', fontSize: 19, mt: 2.5 }}>{title}</Typography>
                <Typography sx={{ color: '#9da9bd', lineHeight: 1.7, mt: 1.2 }}>{desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
