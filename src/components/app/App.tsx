import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { Routes } from './Routes';
import { GlobalContextProvider } from 'context/global/GlobalContextProvider';
import { appTheme } from 'config/style-config';

const theme = createMuiTheme(appTheme);

const App = (props: any) => {
  return (
    <div className="App">
        <MuiThemeProvider theme={theme}>
          <BrowserRouter >
            <GlobalContextProvider>
              <Routes />
            </GlobalContextProvider>
          </BrowserRouter>
        </MuiThemeProvider>
    </div>
  );
};

export default App;