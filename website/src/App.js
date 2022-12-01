//import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import {Button, Typography } from '@mui/material';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import AppbarDesktop from './Appbar/AppbarDesktop';
import AppbarMobile from './Appbar/AppbarMobile';
///import AppBar from './component/APPbar/';
function App() {
  const theme = createTheme({
    palette: {
      // Name of the component ⚛️
      primary: {
        main:"#FDEEEEE"
          // The default props to change
          // No more ripple, on the whole application 💣 
      },
      secondary:{
        main:"#FF0000"
         }
        },
     });
  return (
<contaner maxWidth="sm" sx={{ bgcolor:  '#cfe8fc'}}>
        <ThemeProvider theme={theme}>
        <Typography> Hello How are you</Typography>
<Button color='primary'>Hello</Button>
<Button color='secondary'>Hello</Button>
       </ThemeProvider>
       <AppbarMobile/>
       <AppbarDesktop/>
       </contaner>
      );
      }
export default App;
