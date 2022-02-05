import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { makeStyles } from '@material-ui/core/styles'
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { ThemeProvider } from '@mui/material/styles'
import AddIcCallTwoToneIcon from '@mui/icons-material/AddIcCallTwoTone'
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone'
import Chip from '@mui/material/Chip'
import GitHubIcon from '@material-ui/icons/GitHub'
import { CardActionArea } from '@material-ui/core'
import background from './images/Streetart1.jpeg'
import artist from './images/artist.png'
import theme from './theme'
import cards from './cards'
import { Parallax } from 'react-scroll-parallax'
import ReactPlayer from 'react-player'
import easywave3 from './video/easywave3.MP4'
import Typewriter from 'typewriter-effect'

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://github.com/devarie'>
        DEVARIE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=B2DFDB&secondary.color=F3E5F5
const useStyles = makeStyles(theme => ({
  overlay: {
    backgroundImage: `url(${artist})`,
    backgroundSize: '70% 80%, 70% 30%.20% 30%',
    backgroundPosition: '5% 0%, 1% 1%, 20% 20%',
    backgroundRepeat: 'repeat, repeat, repeat',
  },
  // background: {
  //   backgroundImage: `url(${background})`,
  //   backgroundPosition: 'center',
  // },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    opacity: 0.8,
    textTransform: 'uppercase',
  },
  card: {
    '&:hover': { boxShadow: 3 },
  },
  soundcloud: {
    opacity: 0.3,
    padding: '1rem 0px',
    width: '90%',
    borderRadius: '150px',
  },
  SoundcloudBox: {
    opacity: 0.1,
    borderRadius: '150px',
  },
}))

export default function Main() {
  const classes = useStyles()

  // const matches = mediaquery function.....
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          className={classes.background}
          sx={{
            position: 'relative',
            height: 1000,
            bgcolor: 'primary.light',
            pt: 0,
            pb: 0,
          }}
        >
          <video autoPlay='video' muted playsinline='true' loop id='video'>
            <source src={easywave3} type='video/mp4' />
          </video>
          <Parallax x={['0%', '0%']} y={['0%', '0%']} scale={[0.1, 1]} opacity={[1, 0]} className={classes.prlxappbar}>
            <AppBar position='relative' sx={{ borderBottom: 0, color: 'black', background: 'transparent !important', boxShadow: 0 }}>
              <Toolbar className={classes.toolbar}>
                {/* <CameraIcon sx={{ mr: 2 }} /> */}
                <Typography
                  sx={{ letterSpacing: 10 }}
                  display='flex'
                  justifycontent='center'
                  variant='h2'
                  color='text.primary'
                  align='center'
                  fontFamily='sans'
                >
                  Portfolio{' '}
                </Typography>
              </Toolbar>
            </AppBar>
          </Parallax>
          <Parallax x={['0px', '0px']} y={['-40%', '40%']} scale={[1.0, 1.0]} opacity={[1, 0]} className={classes.foo}>
            <div className='bar' />
            <Container
              sx={{
                maxWidth: '350px',
                bgcolor: 'primary.main',
                boxShadow: 3,
                borderRadius: 5,
                opacity: '0.72',
                border: 0,
                '&:hover': {
                  background: '#4db6ac',
                },
              }}
            >
              <Typography variant='h6' align='center' color='text.primary' opacity='0.6' lineHeight={1.6}>
                <Typewriter
                  onInit={typewriter => {
                    typewriter
                      .typeString('A warm welcome to you')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(
                        'I am Arie a software developer. I am specialized making React apps. Technologys i like to work with are: React, HTML5, SCSS, Material UI, Typescript, NPM, Github. In need of my skills? Feel free to contact me...',
                      )
                      .pauseFor(3000)
                      .start()
                  }}
                />
              </Typography>
            </Container>
          </Parallax>
          <Parallax x={['0px', '110px']} y={['0px', '280px']} scale={[0.5, 1.5]} opacity={[1, 0]} className='foo'>
            <Stack direction='row' spacing={1} justifyContent='center' opacity='0.56'>
              <Chip icon={<EmailTwoToneIcon />} label='Schaaparie@gmail.com' opacity='0.56' color='primary' />
            </Stack>
            <Stack direction='row' spacing={4} justifyContent='center'>
              <Chip icon={<AddIcCallTwoToneIcon />} label='0031646286086' color='primary' />
            </Stack>
            <Stack direction='row' justifyContent='center'>
              <Link color='inherit' href='https://github.com/devarie' underline='hover' justifyContent='center'>
                <Chip icon={<GitHubIcon />} label='devarie' justifyContent='center' color='primary' />
              </Link>
            </Stack>
          </Parallax>
        </Box>
        <Box display='flex' alignItems='flex-end' justifyContent='center' className='SoundcloudBox' sx={{ bgcolor: 'primary.main' }}>
          <ReactPlayer className={classes.soundcloud} width={350} height={130} url='https://soundcloud.com/lautundluise/montagssorbet037' />
        </Box>
        <Box>
          <Box className={classes.overlay} sx={{ boxShadow: 0, bgcolor: 'primary.dark' }}>
            <Container sx={{ py: 8, bgcolor: 'primary.light', boxShadow: 0 }} maxWidth='md'>
              {/* End hero unit */}
              <Grid container spacing={2}>
                {cards.map(card => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                      className={classes.card}
                      sx={{
                        bgcolor: 'primary.main',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        border: 1,
                        borderRadius: 5,
                        '&:hover': {
                          background: '#4db6ac',
                        },
                      }}
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
                          <Typography gutterBottom variant='h6' component='h2' lineHeight={0.8}>
                            {card.title}
                          </Typography>
                          <Typography>{card.info}</Typography>
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
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'primary.main', p: 6 }} component='footer'>
        <Typography variant='h6' align='center' gutterBottom></Typography>
        <Typography variant='subtitle1' align='center' color='text.secondary' component='p'></Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  )
}
