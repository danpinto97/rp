import React, { useState } from 'react';
import LinkTemp from './LinkTemp'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core';
import Header from './Header'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { amber, blueGrey } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider'
import 'fontsource-roboto'

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 1,
      marginTop: 3,
      color: '#1238'
    }
  },
  palette: {
    primary: {
      main: amber[300],
    },
    secondary: {
      main: blueGrey[400],
    }

  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header></Header>

        <Container>
          <LinkTemp></LinkTemp>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
