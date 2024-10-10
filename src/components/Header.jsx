// Header.jsx
import { AppBar, Toolbar, Typography } from '@mui/material';
import Navigation from './Navigation'; // Import the abstracted Navigation component

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Owen Kenne
        </Typography>
        <Navigation />
      </Toolbar>
    </AppBar>
  );
}
