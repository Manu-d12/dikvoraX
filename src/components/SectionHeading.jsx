import React from 'react';
import { Box, Typography } from '@mui/material';

export default function SectionHeading({ eyebrow, title, subtitle, light = false, align = 'center' }) {
  return (
    <Box sx={{ maxWidth: 720, mx: align === 'center' ? 'auto' : 0, mb: { xs: 5, md: 7 }, textAlign: align }}>
      {eyebrow && <Typography className="eyebrow" sx={{ color: light ? '#9ca8ff' : 'primary.main' }}>{eyebrow}</Typography>}
      <Typography variant="h2" sx={{ fontSize: { xs: '2.05rem', md: '3rem' }, color: light ? '#fff' : 'text.primary', mt: 1 }}>
        {title}
      </Typography>
      {subtitle && <Typography sx={{ color: light ? '#aab4c8' : 'text.secondary', mt: 2, fontSize: { xs: '1rem', md: '1.08rem' }, lineHeight: 1.75 }}>{subtitle}</Typography>}
    </Box>
  );
}
