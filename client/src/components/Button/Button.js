import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Button = styled.button`
  height: 40px;
  margin: 0 15px;
  border-radius: 15px;
  background: ${(props) =>
    props.main ? "var(--secondary-color)" : "var(--primary-color)"};

  color: ${(props) =>
    props.main ? "var(--primary-color)" : "var(--secondary-color)"};

  border: 2px solid var(--secondary-color);
  cursor: pointer;

  font-size: 2rem;
  font-family: "Heiti SC", sans-serif;
  font-weight: 700;
`;

Button.propTypes = {
  main: PropTypes.bool,
};

export default Button;
