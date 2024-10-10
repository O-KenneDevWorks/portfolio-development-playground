import { Box, Typography, Button, TextField } from '@mui/material';

export default function Contact() {
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
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2, // Adds space between the form fields
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          required
          sx={{
            backgroundColor: 'primary.light', // Sets the background to primary.light
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          type="email"
          sx={{
            backgroundColor: 'primary.light', // Sets the background to primary.light
          }}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          sx={{
            backgroundColor: 'primary.light', // Sets the background to primary.light
          }}
        />
        <Button
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
