import React, { useState } from 'react';
import { Alert, Box, Button, CircularProgress, Container, Grid, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

const initialForm = { name: '', email: '', company: '', service: '', details: '' };
const services = ['Frontend Development', 'Backend Development', 'Website Development', 'Mobile App Development', 'AI-Based Solution', 'Custom Software', 'Not Sure Yet'];

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name.';
  if (!form.email.trim()) errors.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email address.';
  if (!form.service) errors.service = 'Please choose a service.';
  if (!form.details.trim()) errors.details = 'Tell us a little about your project.';
  return errors;
};

// Frontend-only simulation. Replace this function with an API call when a backend is connected.
const submitProject = () => new Promise((resolve) => setTimeout(resolve, 900));

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const change = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    setSuccess(false);
  };
  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length) { setErrors(nextErrors); return; }
    setLoading(true);
    await submitProject(form);
    setLoading(false);
    setSuccess(true);
    setForm(initialForm);
  };

  return (
    <Box component="section" id="contact" className="section-pad contact-section">
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography className="eyebrow" color="primary.main">START A PROJECT</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.35rem', md: '3.4rem' }, mt: 1.5 }}>Let's Talk About Your Project</Typography>
            <Typography color="text.secondary" sx={{ fontSize: 18, lineHeight: 1.75, mt: 2.5 }}>Tell us what you're building and we'll get back to you.</Typography>
            <Stack spacing={2.2} sx={{ mt: 5 }}>
              <Stack direction="row" spacing={2} alignItems="center"><Box className="contact-icon"><AccessTimeRoundedIcon /></Box><Box><Typography variant="body2" color="text.secondary">Response time</Typography><Typography fontWeight={700}>Within 1–2 business days</Typography></Box></Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper component="form" onSubmit={submit} noValidate className="contact-form" elevation={0}>
              {success && <Alert severity="success" sx={{ mb: 3 }}>Thanks! Weve received your project details. Well get back to you soon.</Alert>}
              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth required label="Name" name="name" value={form.name} onChange={change} error={!!errors.name} helperText={errors.name} /></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth required label="Email" name="email" value={form.email} onChange={change} error={!!errors.email} helperText={errors.email} /></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth label="Company / Business" name="company" value={form.company} onChange={change} /></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><TextField select fullWidth required label="Service" name="service" value={form.service} onChange={change} error={!!errors.service} helperText={errors.service}>{services.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}</TextField></Grid>
                <Grid size={12}><TextField fullWidth required multiline minRows={5} label="Project Details" name="details" value={form.details} onChange={change} error={!!errors.details} helperText={errors.details} placeholder="What would you like to build?" /></Grid>
                <Grid size={12}><Button type="submit" variant="contained" size="large" disabled={loading} endIcon={!loading && <SendRoundedIcon />} sx={{ minWidth: 190 }}>{loading ? <><CircularProgress size={20} color="inherit" sx={{ mr: 1 }} /> Sending...</> : 'Send Project Details'}</Button></Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
