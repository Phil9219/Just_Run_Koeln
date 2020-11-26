import React from "react";
import styled from "styled-components";
import LogoHeader from "../../../src/assets/header_logo_JRK.svg";

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  img {
    height: 55px;
    padding: 0 2rem;
  }
`;

const Header = () => (
  <AppHeader>
    <div className="wrapper">
      <img src={LogoHeader} alt="Just Run Köln" />
    </div>
  </AppHeader>
);

export default Header;
