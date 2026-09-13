import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import SectionHeading from './SectionHeading';

const steps = [
  ['01', 'Understand', 'We understand your idea, business and requirements.'],
  ['02', 'Plan', 'We define the solution, architecture and development approach.'],
  ['03', 'Build', 'We design and develop the product with regular feedback.'],
  ['04', 'Launch', 'We help get the solution ready for real users and future improvements.'],
];

export default function Process() {
  return (
    <Box component="section" id="process" className="section-pad process-section">
      <Container maxWidth="lg">
        <SectionHeading eyebrow="OUR PROCESS" title="How We Build" subtitle="A clear, collaborative path from the first conversation to a product ready for real users." />
        <Box className="process-line" />
        <Grid container spacing={{ xs: 3, md: 2 }}>
          {steps.map(([num, title, desc]) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={title}>
              <Box className="process-card">
                <Box className="step-number">{num}</Box>
                <Typography variant="h3" sx={{ fontSize: 22, mt: 2.5 }}>{title}</Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.7, mt: 1.2 }}>{desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
