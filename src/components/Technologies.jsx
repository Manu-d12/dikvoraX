import React from 'react';
import { Box, Chip, Container } from '@mui/material';
import SectionHeading from './SectionHeading';

const tech = ['React', 'JavaScript', 'Java', 'Spring Boot', 'Node.js', 'MySQL', 'PostgreSQL', 'AWS', 'Docker', 'REST APIs', 'AI', 'LLMs'];

export default function Technologies() {
  return (
    <Box component="section" className="section-pad tech-section">
      <Container maxWidth="md">
        <SectionHeading eyebrow="OUR TOOLKIT" title="Technologies We Work With" subtitle="Proven tools selected to fit your product, your team and your plans for growth." />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
          {tech.map((name, i) => <Chip key={name} label={name} className="tech-chip" sx={{ animationDelay: `${i * .03}s` }} />)}
        </Box>
      </Container>
    </Box>
  );
}
