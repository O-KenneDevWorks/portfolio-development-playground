import { Container, Box, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public'; // Alternative for Stack Overflow

export default function Footer() {
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, padding: 2 }}>
        <IconButton href="https://github.com/O-KenneDevWorks" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/owen-kenne/" target="_blank">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://stackoverflow.com/users/27737290/o-kennedevworks?tab=profile" target="_blank">
          <PublicIcon /> {/* Using PublicIcon as a placeholder for StackOverflow */}
        </IconButton>
      </Box>
    </Container>
  );
}