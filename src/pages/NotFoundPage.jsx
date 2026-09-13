import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
export default function NotFoundPage({ navigate }) { return <Box className="not-found"><Container maxWidth="sm"><Typography className="eyebrow" color="primary.main">404</Typography><Typography variant="h1" sx={{ fontSize: '3rem', mt: 2 }}>Page not found</Typography><Typography color="text.secondary" sx={{ mt: 2 }}>The page you requested does not exist.</Typography><Button variant="contained" sx={{ mt: 4 }} onClick={() => navigate('/')}>Back to home</Button></Container></Box>; }
