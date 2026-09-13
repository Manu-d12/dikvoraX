import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { services } from '../data/services';

export default function ServiceCards({ navigate }) {
  return (
    <Box className="cards-grid">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Box className="professional-card" key={service.slug} onClick={() => navigate(`/services/${service.slug}`)}>
            <Box className="service-icon"><Icon /></Box>
            <Typography variant="h3" sx={{ fontSize: 21, mt: 3 }}>{service.title}</Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.7, mt: 1.4, flexGrow: 1 }}>{service.short}</Typography>
            <Button endIcon={<ArrowForwardRoundedIcon />} sx={{ alignSelf: 'flex-start', px: 0, mt: 2.5 }}>View service</Button>
          </Box>
        );
      })}
    </Box>
  );
}
