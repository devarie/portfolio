import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
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
import Housebotel from './images/Housebotel.jpeg'
import KayakplusBavaria from './images/KayakplusBavaria.jpeg'
import Vanleersumdranken from './images/Vanleersumdranken.jpeg'
import freshservice_banner_groot from './images/freshservice_banner_groot.jpeg'
import Mestudio from './images/Mestudio.jpeg'
import streetart1 from './images/Streetart1.jpeg'
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import Icon from '@mui/material/Icon';
import AddIcCallTwoToneIcon from '@mui/icons-material/AddIcCallTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import Chip from '@mui/material/Chip';
import GitHubIcon from '@material-ui/icons/GitHub';

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
    toolbar: {
        display: "flex",
        justifyContent: "center"
    },
}))

const cards = [
 {
        id:1,
        img: KayakplusBavaria,
        title: 'Kayakexpeditions.nl',
        info: 'A React Javascript website, using Prettier, Eslint and Typescript controlled, image loading due Cloudinary SDK, styling by Material UI',
        link: 'https://devarie.github.io/kayakka/',
 },
     {
        id:2,
        img: Vanleersumdranken,
    title: 'Vanleersumdranken.nl',
    info: 'Wordpress website built with visual basic, and a Woocommerce integration connected with a Payment Merchant',
    link: 'https://wijnwereld.online/',
},
    {
        id:3,
    img: Housebotel,
title: 'Housebotel.nl',
info: 'This Wordpress website is built with elementor, has API extern software integrated, and connected with a Payment Merchant',
link: 'https://housebotel.nl/',
},
{
  id:4,
img: streetart1,
title: 'Portfolio.nl',
info: 'This React.js website is styled by Material UI, using a grid layout, styled with palette colors from Material UI',
link: '',
},
{
  id:5,
img: Mestudio,
title: 'Mestudio.nl',
info: 'Basic wordpress blog, backing up, maintenance and migrating to different server ',
link: 'https://Mestudio.info',
},
{
  id:6,
img: freshservice_banner_groot,
title: 'Bussinesportal.nl',
info: 'Implemented new styling to a employee portal',
link: '',
},
];

const theme = createTheme({
  palette: {
    primary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    },
    secondary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700]
    }
  },
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage:
            "url(https://designshack.net/wp-content/uploads/gradient-background.jpg)"
        }
      }
    }
  }
});


export default function Main() {
    const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" color="primary">
        <Toolbar className={classes.toolbar}>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography display="flex" justifycontent="center"variant="h3" color="text.primary" align="center" >
         PORTFOLIO DEVARIE </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'primary.light',
            pt: 8,
            pb: 6,
          }}
        >
          <Container sx={{ bgcolor: 'primary.main', boxShadow: 3 }} maxWidth="sm">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              TECH INTRODUCTION
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Hi, cool you looked me up. To introduce myself shortly, i am a medior developer with 2 years of experience. Starting off with Python, switched and builded Wordpress websites, i now landed at making front-end Javascript React Websites with all kind of integrations.
            Known with Typescript, Eslint, Prettier, Databases and API third party software loading. I am looking for new projects, contact me if you are interested in my services.
            </Typography>
              {/* <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button> */}
          </Container>
          <Stack direction="row" spacing={1} justifyContent="center">
          <Chip icon={<EmailTwoToneIcon/>} label="Schaaparie@gmail.com" />
      <Chip icon={<AddIcCallTwoToneIcon/>} label="0031646286086" />
      <Chip icon={<GitHubIcon/>} label="devarie" />
      </Stack>
        </Box>
        <Box sx={{ boxShadow: 0, bgcolor: 'primary.dark'}}>
        <Container sx={{ py: 8, bgcolor: 'primary.light', boxShadow: 3 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ bgcolor: 'primary.main', height: '100%', display: 'flex', flexDirection: 'column' }}
                >
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
                  <CardActions>
                    <Button color='inherit' size="small" href={card.link}>View</Button>
                  </CardActions>
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
          Made by "Me aka devarie"
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}