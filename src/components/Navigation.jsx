// Navigation.jsx
import { Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <Box>
      {['About', 'Portfolio', 'Contact', 'Resume'].map((section) => (
        <Button
          key={section}
          component={NavLink}
          to={`/${section.toLowerCase()}`}
          sx={{
            color: 'inherit', // Use theme color for text
            textDecoration: 'none', // Remove default underline style
            margin: '0 10px', // Add margin between buttons
            '&.active': {
              backgroundColor: 'secondary.main', // Highlight the active button
              color: 'white', // White text for the active button
            },
            '&:hover': {
              backgroundColor: 'primary.dark', // Darker color on hover
            },
          }}
        >
          {section}
        </Button>
      ))}
    </Box>
  );
}
