import {Provider} from 'react-redux';
import {createTheme} from '@mui/material';
import {green} from '@mui/material/colors';
import {ThemeProvider} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {AppBar} from '@mui/material';
import {Toolbar} from '@mui/material';
import {Typography} from '@mui/material';
import {Container} from '@mui/material';
import store from './store';
import RestaurantScreen from './components/RestaurantScreen';

const theme = createTheme({
  palette: {
    primary: green,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Opinion Ate</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <RestaurantScreen />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}
