import React from 'react';
import { Router } from 'react-router-dom';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import theme from './styles/theme';
import Routes from './routes';
import history from './services/history';
import { CustomersProvider } from './contexts/customers';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomersProvider>
        <Router history={history}>
          <GlobalStyles />
          <Routes />
        </Router>
      </CustomersProvider>
    </ThemeProvider>
  );
}

export default App;