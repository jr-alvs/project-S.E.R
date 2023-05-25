import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Poppins';
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    width: 100vw;
    height: 100vh;
    background: #f1f1f1;
    overflow-x: hidden;
  }
`;
