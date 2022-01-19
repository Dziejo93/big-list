import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }
  
  html,body {
    height: 100%;
    font-family: Roboto, serif;
    font-style: normal;
    
    --font-size-xsmall: 11px;
    --font-size-small: 12px;
    --font-size-normal: 15px;
    
    --font-weight-bold: 700; 
    --font-weight-normal: 400;
    
    --line-height-xsmall: 16px;
    --line-height-normal: 20px;
    --line-height-large: 24px;

    --color-ink: #59697B;
    --color-white: #ffffff;
    --color-background: #F5F6F7;
    --color-primary: #2F6DB5;
    --color-green-light: #E2F0DC;
    --color-green-dark: #1E824C;
    --color-table-header-background: #E6E9EA;
    --color-table-header-background-text: #59697B;
    
    --shadow: 0 1px 2px -0.4px rgba(53, 64, 78, 0.02), 
              0px 2px 3px rgba(53, 64, 78, 0.16),
              0px 0px 1px rgba(53, 64, 78, 0.32); 
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
`;
