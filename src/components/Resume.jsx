import { Button, Container, Typography, Grid, List, ListItem, ListItemText, Card, CardContent } from '@mui/material';

export default function Resume() {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Resume
            </Typography>

            {/* Frontend Skills Card */}
            <Card variant="outlined" sx={{ marginBottom: 3 }}>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Frontend Development
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <List>
                                <ListItem>
                                    <ListItemText primary="TypeScript" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="JavaScript" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="React.js" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="HTML" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="CSS" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* Backend Skills Card */}
            <Card variant="outlined" sx={{ marginBottom: 3 }}>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Backend Development
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Express.js" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Node.js" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Python" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* Database Skills Card */}
            <Card variant="outlined" sx={{ marginBottom: 3 }}>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Database Development
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <List>
                                <ListItem>
                                    <ListItemText primary="PostgreSQL (PSQL)" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="MongoDB" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* Download Resume Button */}
            <Button variant="contained" sx={{
                marginTop: 3,
                backgroundColor: 'secondary.main', // Use secondary.main color for background
                color: 'white', // White text color
                '&:hover': {
                    backgroundColor: 'secondary.dark', // Darker color on hover
                },
            }}
            >
                Download Resume
            </Button>
        </Container>
    );
}
