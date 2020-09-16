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

  #profile-master {
    background-color: #000;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button, p, input, h1, h2, h3, h4, h5, h6 {
      font-family: ${props => props.theme.fontFamily};
    }
  }
`;

export const Container = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  height: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Container>
        {/* <Header /> */}
        <Content>
          <Home />
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default App;
