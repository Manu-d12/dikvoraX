import React, { useState } from 'react';
import { AppBar, Box, Button, Container, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const links = [['Home', '/'], ['Services', '/services'], ['About Us', '/about'], ['Contact Us', '/contact']];

export default function Navbar({ path, navigate }) {
  const [open, setOpen] = useState(false);
  const go = (nextPath) => { setOpen(false); navigate(nextPath); };

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ bgcolor: 'rgba(255,255,255,.94)', backdropFilter: 'blur(18px)', borderBottom: '1px solid #eaecf0' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 78 } }}>
          <Box onClick={() => go('/')} sx={{ display: 'flex', alignItems: 'center', gap: 1.2, cursor: 'pointer' }}>
            <Box className="brand-mark">DX</Box>
            <Typography sx={{ color: '#101828', fontWeight: 800, fontSize: 21, letterSpacing: '-.03em' }}>Dikvora<span className="accent-x">X</span></Typography>
          </Box>
          <Stack direction="row" spacing={.5} sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {links.map(([label, href]) => <Button key={href} onClick={() => go(href)} sx={{ color: path === href ? 'primary.main' : '#344054', px: 1.6, bgcolor: path === href ? '#f2f6ff' : 'transparent' }}>{label}</Button>)}
            <Button variant="contained" onClick={() => go('/contact')} sx={{ ml: '12px !important' }}>Let's Talk</Button>
          </Stack>
          <IconButton aria-label="Open menu" onClick={() => setOpen(true)} sx={{ ml: 'auto', color: '#101828', display: { md: 'none' } }}><MenuRoundedIcon /></IconButton>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: 290, bgcolor: '#fff', color: '#101828', p: 3 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}><IconButton aria-label="Close menu" onClick={() => setOpen(false)}><CloseRoundedIcon /></IconButton></Box>
        <Stack spacing={1}>{links.map(([label, href]) => <Button key={href} onClick={() => go(href)} sx={{ color: path === href ? 'primary.main' : '#101828', justifyContent: 'flex-start', fontSize: 17, py: 1.5 }}>{label}</Button>)}</Stack>
        <Button variant="contained" sx={{ mt: 3 }} onClick={() => go('/contact')}>Let's Talk</Button>
      </Drawer>
    </AppBar>
  );
}
