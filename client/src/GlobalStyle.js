import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
  box-sizing:border-box}

:root {

  --primary-color: #2b2b2b;
  --secondary-color: #f0eaea;



}

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--primary-color)
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;
