import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function PageHero({ eyebrow, title, description }) {
  return (
    <Box className="page-hero">
      <Container maxWidth="lg">
        <Typography className="eyebrow" color="primary.main">{eyebrow}</Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2.65rem', md: '4.25rem' }, maxWidth: 820, mt: 2 }}>{title}</Typography>
        <Typography color="text.secondary" sx={{ fontSize: { xs: 17, md: 19 }, lineHeight: 1.75, maxWidth: 720, mt: 2.5 }}>{description}</Typography>
      </Container>
    </Box>
  );
}
