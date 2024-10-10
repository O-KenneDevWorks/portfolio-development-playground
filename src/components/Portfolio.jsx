import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import weatherForecast from '../assets/weather_forecast.png';
import futureProject from '../assets/future_project.webp';
import futureProject2 from '../assets/future_project_2.webp';

export default function Portfolio() {
  const projects = [
    { 
      title: 'Weather Forecast', 
      deployedUrl: 'https://weatherforecast-webapp.onrender.com', 
      githubUrl: 'https://github.com/O-KenneDevWorks/WeatherForecast-WebApp',
      image: weatherForecast
    },
    { 
      title: 'Future Project #1', 
      deployedUrl: 'https://comingsoon.webapp', 
      githubUrl: 'https://github.com/O-KenneDevWorks', 
      image: futureProject
    },
    { 
      title: 'Future Project #2', 
      deployedUrl: 'https://comingsoon.webapp', 
      githubUrl: 'https://github.com/O-KenneDevWorks', 
      image: futureProject2
    },
    // More projects here...
  ];

  // Styling for application buttons
  const buttons =
  {
    marginTop: 1,
    marginRight: 2,
    backgroundColor: 'secondary.main', // Use secondary.main color for background
    color: 'white', // White text color
    '&:hover': {
      backgroundColor: 'secondary.dark', // Darker color on hover
    },
  }

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia component="img" height="140" image={project.image} alt={project.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Button
                size="small" href={project.deployedUrl}
                target="_blank"
                sx={buttons}>
                Live Demo
              </Button>
              <Button
                size="small" href={project.githubUrl}
                target="_blank"
                sx={buttons}>
                GitHub
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
