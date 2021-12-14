import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { makeStyles } from "@material-ui/core/styles";
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddIcCallTwoToneIcon from '@mui/icons-material/AddIcCallTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import Chip from '@mui/material/Chip';
import GitHubIcon from '@material-ui/icons/GitHub';
import bitter from 'typeface-bitter';
import sans from 'typeface-work-sans'
import { CardActionArea } from '@material-ui/core';
import background from './images/Streetart1.jpeg'
import styleimage from './images/artist.png'
import theme from './theme'
import cards from './cards'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/devarie">
        DEVARIE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=B2DFDB&secondary.color=F3E5F5
const useStyles = makeStyles(theme => ({
  overlay: { 
    backgroundImage: `url(${styleimage})`,
    // backgroundRepeat: "no-repeat",
    // width: 500,
    // height: 500,
    top: 0,
    left: 0,
    backgroundPosition: "center",
    zIndex: 10,
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
  },
    toolbar: {
        display: "flex",
        justifyContent: "center"
    },
}))

export default function Main() {
    const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" color="primary" sx={{ borderBottom: 2, color: "black"}}>
        <Toolbar className={classes.toolbar}>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography display="flex" justifycontent="center"variant="h3" color="text.primary" align="center" fontFamily="bitter" >
         Portfolio </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box className={classes.background}
          sx={{
            bgcolor: 'primary.light',
            pt: 8,
            pb: 6,
          }}
        >
          <Container sx={{ bgcolor: 'primary.main', boxShadow: 3, border: 0}} maxWidth="sm" >
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Technology experience
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Hi, i am Arie a software developer. To introduce myself shortly, i started with Python, switched to building Wordpress websites and now i am specializing in making React apps.
            I have experience working with Typescript, Material-UI, Eslint, Prettier, Databases API's and third party integrations. In need of my skills? Feel free to contact me...
            </Typography>
              {/* <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button> */}
          </Container>
          <Stack direction="row" spacing={1} justifyContent="center">
          <Chip icon={<EmailTwoToneIcon/>} label="Schaaparie@gmail.com" color='primary'/>
              </Stack>
          <Stack direction="row" spacing={4} justifyContent="center">
      <Chip icon={<AddIcCallTwoToneIcon/>} label="0031646286086" color='primary'/>
      </Stack>
      <Stack direction="row" justifyContent="center">
      <Link color="inherit" href="https://github.com/devarie" underline='hover' justifyContent="center">
      <Chip icon={<GitHubIcon/>} label="devarie" justifyContent="center" color='primary'/>
      </Link>
      </Stack>
        </Box>
        <Box className={classes.overlay} sx={{ boxShadow: 0, bgcolor: 'primary.dark'}}>
        <Container sx={{ py: 8, bgcolor: 'primary.light', boxShadow: 0 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card 
                  sx={{ bgcolor: 'primary.main', height: '100%', display: 'flex', flexDirection: 'column', border: 1 }}
                >
                <CardActionArea href={card.link}>
                  <CardMedia
                    component={cards.id}
                    sx={{
                      // 16:9
                      pt: '116.25%',
                    }}
                    image={card.img}
                    alt={card.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.info}
                    </Typography>
                  </CardContent>
                  {/* <CardActions href={card.link}>
                    <Button color='inherit' size="small" href={card.link}>View</Button>
                  </CardActions> */}
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'primary.main', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}