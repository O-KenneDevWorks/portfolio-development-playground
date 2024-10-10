import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

// CSS framework related styling
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Container, Box } from '@mui/system';



export default function App() {
  const [activeSection, setActiveSection] = useState('About'); // Default section is 'About'
  const theme = createTheme({
    palette: {
      primary: {
        light: '#8d9aa6',
        main: '#708090',
        dark: '#5a6773',
        contrastText: '#000',
      },
      secondary: {
        light: '#773333',
        main: '#550000',
        dark: '#3b0000',
        contrastText: '#550000',
      },
      background: {
        default: '#807090', // Slate Grey for background
        paper: '#708090', // Slightly lighter grey for paper (cards, modals)
      },
      text: {
        primary: '#000', // White text to contrast with the slate grey
      },
    },
  });


  const renderSection = () => {
    switch (activeSection) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Resets default styles and applies theme background */}
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: 'background.default', minHeight: '100vh' }} // Applies background color from theme
      >
        <div>
          <Header activeSection={activeSection} setActiveSection={setActiveSection} />

          {/* Add margin-top to space the main section from the header */}
          <Box
            component="main"
            sx={{ marginTop: 4 }} // Adjust this value as necessary (4 = 32px)
          >
            {renderSection()}
          </Box>

          <Footer />
        </div>
      </Container>
    </ThemeProvider>
  );
}
