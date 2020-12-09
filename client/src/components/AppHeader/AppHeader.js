import React from "react";
import styled from "styled-components";
import LogoHeader from "../../../src/assets/header_logo_JRK.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AppHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--secondary-color);
  position: fixed;
  top: 0;
  background-color: var(--primary-color);
  z-index: 20;

  img {
    height: 55px;
    vertical-align: top;
    margin: 17px 0px 5px 15px;
  }
  h1 {
    margin-top: 40px;
    margin-left: 15px;
    margin-right: 15px;
    color: var(--secondary-color);
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

const Header = ({ title }) => (
  <AppHeader>
    <Link to="/choose_your_run">
      <img src={LogoHeader} alt="Just Run Köln" />
    </Link>
    <h1>{title}</h1>
  </AppHeader>
);
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
