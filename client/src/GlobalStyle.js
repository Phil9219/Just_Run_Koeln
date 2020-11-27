import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
  box-sizing:border-box}

:root {

  --primary-color: #2b2b2b;
  --secondary-color: #f0eaea;
  --inputfield-color: #9a9797;


}

  body {
    margin: 0;
    font-family: "Heiti SC",adobe-heiti-std, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--primary-color);
  


  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;
