import React from "react";
import Splashlogo from "../../assets/logo_JRK.svg";
import styled from "styled-components/macro";

const Logo = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: var(--primary-color);
  img {
    height: 20vh;
    width: 80vw;
  }
`;
export default function SplashPage() {
  return (
    <Logo>
      <img src={Splashlogo} alt="Just Run Köln" />
    </Logo>
  );
}
