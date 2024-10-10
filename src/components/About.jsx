import { Avatar, Typography, Container, Grid } from '@mui/material';

export default function About() {
  return (
    <Container>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={4}>
          <Avatar
            alt="Developer"
            src="../../src/assets/avatar-image.webp"
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1">
          Hello! I'm an aspiring full-stack developer with hands-on experience in various technologies including Python, HTML, React, Express, Node.js, JavaScript, CSS, PostgreSQL, and MongoDB. I'm passionate about creating dynamic and responsive web applications and continually expanding my skillset to build robust, user-friendly digital solutions.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}