import React from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import styled from 'styled-components';
import { myTheme } from './theme/theme';
import Home from './pages/Home';
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body, button, p, input {
    font-family: ${props => props.theme.fontFamily};
  }
`;

export const Container = styled.div`
  height: 100%;
  /* overflow: hidden; */
`;

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Container>
        {/* <Header /> */}
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
