import { amber, blueGrey, cyan, teal } from '@material-ui/core/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import purple from "@material-ui/core/colors/purple";
import sans from 'typeface-work-sans'

const theme = createTheme({
    palette: {
      primary: {
        light: teal[400],
        main: teal[600],
        dark: teal[800]
      },
      secondary: {
        light: purple[300],
        main: purple[500],
        dark: purple[700]
      }
    },
    typography:{ fontFamily: '"bitter", "sans", cursive',
    },
      // useNextVariants: true
    overrides: {
      MuiCssBaseline: {
        "@global": {
          '@font-face': [sans],
          }
        }
      }
    });

    export default theme