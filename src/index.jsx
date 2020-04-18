import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import { STORE } from './core/store';
import { ScreenResolutionContainer } from './app/modules/shared'
import { App } from './app';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <Provider store={STORE}>
        <Router>
          <ScreenResolutionContainer>
            <App/>
          </ScreenResolutionContainer>
        </Router>
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
