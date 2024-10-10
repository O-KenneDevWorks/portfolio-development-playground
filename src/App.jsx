// Internal imports
// Components
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

// External Imports
// CSS framework related styling imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Container, Box } from '@mui/system';

// React router imports
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
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
        contrastText: '#000',
      },
      background: {
        default: '#807090',
        paper: '#708090',
      },
      text: {
        primary: '#000',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container
          maxWidth="lg"
          sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}
        >
          <div>
            <Header />

            <Box
              component="main"
              sx={{ marginTop: 4 }}
            >
              <Routes>
                <Route path="/" element={<Navigate to="/about" replace />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </Box>

            <Footer />
          </div>
        </Container>
      </Router>
    </ThemeProvider>
  );
}
