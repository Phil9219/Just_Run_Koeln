import React from "react";
import styled from "styled-components";
import LogoHeader from "../../../src/assets/header_logo_JRK.svg";

const AppHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  img {
    height: 55px;
    padding: 0 20 rem;
    vertical-align: top;
    margin: 15px;
  }
  h1 {
    margin-top: 40px;
    color: var(--secondary-color);
    display: inline-block;
    vertical-align: top;
  }
`;

const Header = () => (
  <AppHeader>
    <div className="wrapper">
      <img src={LogoHeader} alt="Just Run Köln" />
      <h1>Choose Your Run</h1>
    </div>
  </AppHeader>
);

export default Header;
