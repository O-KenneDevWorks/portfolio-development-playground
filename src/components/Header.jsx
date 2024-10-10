import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function Header({ activeSection, setActiveSection }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Owen Kenne
        </Typography>
        <Box>
          {['About', 'Portfolio', 'Contact', 'Resume'].map((section) => (
            <Button
              key={section}
              color="inherit"
              onClick={() => setActiveSection(section)}
              variant={activeSection === section ? 'contained' : 'text'}
            >
              {section}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
