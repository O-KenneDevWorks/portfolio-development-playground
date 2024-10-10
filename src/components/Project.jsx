// src/components/Project.jsx
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';

export default function Project({ title, image, deployedUrl, githubUrl }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Button size="small" href={deployedUrl} target="_blank">Live Demo</Button>
          <Button size="small" href={githubUrl} target="_blank">GitHub</Button>
        </CardContent>
      </Card>
    </Grid>
  );
}
