import React, { useEffect, useState } from 'react';
import { Alert, Box, Button, CircularProgress, MenuItem, TextField, Typography } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { serviceNames } from '../data/services';

const empty = { name: '', email: '', company: '', phone: '', service: '', budget: '', details: '' };
const budgets = ['Under ₹1 lakh', '₹1–3 lakhs', '₹3–8 lakhs', '₹8 lakhs+', 'Not decided yet'];
const sendProject = () => new Promise((resolve) => setTimeout(resolve, 800));

export default function ProjectForm({ selectedService = '', compact = false }) {
  const [form, setForm] = useState({ ...empty, service: selectedService });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => setForm((current) => ({ ...current, service: selectedService })), [selectedService]);

  const change = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSuccess(false);
  };
  const submit = async (event) => {
    event.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (!form.service) next.service = 'Please select a service.';
    if (!form.details.trim()) next.details = 'Tell us about your project.';
    if (Object.keys(next).length) { setErrors(next); return; }
    setLoading(true);
    await sendProject(form);
    setLoading(false);
    setSuccess(true);
    setForm({ ...empty, service: selectedService });
  };

  return (
    <Box component="form" onSubmit={submit} noValidate className={compact ? 'project-form compact-form' : 'project-form'}>
      {success && <Alert severity="success" sx={{ mb: 3 }}>Thanks! We've received your project details. We'll get back to you soon.</Alert>}
      <Box className="form-grid">
        <TextField required label="Name" name="name" value={form.name} onChange={change} error={!!errors.name} helperText={errors.name} />
        <TextField required label="Work email" name="email" value={form.email} onChange={change} error={!!errors.email} helperText={errors.email} />
        <TextField label="Company / Business" name="company" value={form.company} onChange={change} />
        <TextField label="Phone number" name="phone" value={form.phone} onChange={change} />
        <TextField select required label="Service" name="service" value={form.service} onChange={change} error={!!errors.service} helperText={errors.service} disabled={!!selectedService}>
          {serviceNames.map((name) => <MenuItem key={name} value={name}>{name}</MenuItem>)}
        </TextField>
        <TextField select label="Estimated budget" name="budget" value={form.budget} onChange={change}>
          {budgets.map((budget) => <MenuItem key={budget} value={budget}>{budget}</MenuItem>)}
        </TextField>
        <TextField className="form-full" required multiline minRows={5} label="Project details" name="details" value={form.details} onChange={change} error={!!errors.details} helperText={errors.details} placeholder="Tell us what you want to build, your goals and expected timeline." />
      </Box>
      <Button type="submit" variant="contained" size="large" disabled={loading} endIcon={!loading && <SendRoundedIcon />} sx={{ mt: 3, minWidth: 190 }}>
        {loading ? <><CircularProgress size={19} color="inherit" sx={{ mr: 1 }} /> Sending...</> : 'Send project details'}
      </Button>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>No obligation. Your details stay private and are not sent to any third party.</Typography>
    </Box>
  );
}
