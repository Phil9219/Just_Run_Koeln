import { createGlobalStyle } from "styled-components/macro";

import STHeitiLight from "../src/assets/STHeitiLight.ttc";
import STHeitiMedium from "../src/assets/STHeitiMedium.ttc";

const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
  box-sizing:border-box}


@font-face {
  font-family: "STHeitiLight";
  font-style: normal;
  font-weight: 400;
  src: url(${STHeitiLight});
}

@font-face {
  font-family: "STHeitiMedium";
  font-style: bold;
  font-weight: 600;
  src: url(${STHeitiMedium});
}

:root {

  --primary-color: #2b2b2b;
  --secondary-color: #f0eaea;
  --inputfield-color: #9a9797;


}

  body {
    margin: 0;
    font-family: "Heiti SC";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--primary-color);
  


  }

  
`;

export default GlobalStyle;
