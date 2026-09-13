import React from 'react';
import { Box, Container, Divider, Link, Stack, Typography } from '@mui/material';

const nav = [['Home', '/'], ['Services', '/services'], ['About Us', '/about'], ['Contact Us', '/contact']];
const services = ['Frontend Development', 'Backend Development', 'Website Development', 'Mobile Apps', 'AI Solutions', 'Custom Software'];

export default function Footer({ navigate }) {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Box className="footer-grid">
          <Box><Typography sx={{ color: '#fff', fontWeight: 800, fontSize: 24 }}>Dikvora<span className="accent-x">X</span></Typography><Typography sx={{ color: '#909bb0', maxWidth: 410, lineHeight: 1.75, mt: 2 }}>Building modern digital experiences, software solutions and AI-powered products.</Typography></Box>
          <Box><Typography className="footer-title">Navigate</Typography><Stack spacing={1.4} sx={{ mt: 2 }}>{nav.map(([name, href]) => <Link key={name} href={href} onClick={(event) => { event.preventDefault(); navigate(href); }} className="footer-link">{name}</Link>)}</Stack></Box>
          <Box><Typography className="footer-title">Services</Typography><Stack spacing={1.4} sx={{ mt: 2 }}>{services.map((name) => <Typography key={name} className="footer-link">{name}</Typography>)}</Stack></Box>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,.09)', mt: 7, mb: 3 }} />
        <Typography sx={{ color: '#778398', fontSize: 14 }}>© 2026 DikvoraX. All rights reserved.</Typography>
      </Container>
    </Box>
  );
}
