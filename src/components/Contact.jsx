import { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import validateEmail from '../utils/validateEmail'; // Assuming validateEmail is in a utils folder

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear errors when the user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  // // Form validation
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be blank.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Proceed with form submission (e.g., send data to a server)
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');
      // Clear form after submission
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper', // Uses the 'paper' color from the theme
        padding: 4, // Adds padding inside the box
        borderRadius: 2, // Optional: adds some rounding to the box corners
        boxShadow: 3, // Optional: adds some shadow for better aesthetics
        marginTop: 4, // Space above the contact section
        color: 'text.primary', // Ensures the text uses the theme's primary text color
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit} // Handle form submission
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2, // Adds space between the form fields
        }}
      >
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          required
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          sx={{
            backgroundColor: 'primary.light', // Sets the background to primary.light
          }}
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          required
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{
            backgroundColor: 'primary.light', // Sets the background to primary.light
          }}
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          sx={{
            backgroundColor: 'primary.light', // Sets the background to primary.light
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: 'secondary.main', // Use secondary.main color for background
            color: 'white', // White text color
            '&:hover': {
              backgroundColor: 'secondary.dark', // Darker color on hover
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
