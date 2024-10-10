import { Grid, Container } from '@mui/material';
import weatherForecast from '../assets/weather_forecast.png';
import futureProject from '../assets/future_project.webp';
import futureProject2 from '../assets/future_project_2.webp';
import Project from './Project.jsx';

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

  return (
    <Container>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </Grid>
    </Container>
  );
}
