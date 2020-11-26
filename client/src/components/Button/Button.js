import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const Button = styled.button`
  height: 40px;
  width: 330px;
  border-radius: 15px;
  background: var(--primary-color);
  border: 2px solid var(--secondary-color);
  cursor: pointer;
  color: var(--secondary-color);
  font-size: 29px;
`;
export const Buttons = ({ title }) => {
  return <Button>{title}</Button>;
};

Buttons.propTypes = {
  title: PropTypes.string.isRequired,
};
