import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const Inputfield = styled.input`
  height: 40px;
  width: 330px;
  border: solid 2px var(--secondary-color);
  background: none;
  color: var(--inputfield-color);
  font-family: "Heiti SC", adobe-heiti-std, sans-serif;
  font-size: 14px;
  display: flex;
  text-align: center;
`;

export const Input = ({ title }) => {
  return <Inputfield placeholder={title} />;
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
};
