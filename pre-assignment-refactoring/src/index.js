import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD
=======
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
>>>>>>> 79a2be73e28190eaa82cdbc3da20e02553b84792

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
<<<<<<< HEAD

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

=======
>>>>>>> 79a2be73e28190eaa82cdbc3da20e02553b84792
