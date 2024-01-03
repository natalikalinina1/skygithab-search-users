import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/style'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.style'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
  </React.StrictMode>
);


