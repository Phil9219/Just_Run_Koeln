import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  justify-content: center;

  input {
    height: 40px;
    width: 70%;
    border: solid 2px var(--secondary-color);
    background-color: var(--primary-color);
    color: var(--secondary-color);
    font-family: "Heiti SC", adobe-heiti-std, sans-serif;
    font-size: 1rem;
    font-weight: 700;
    display: flex;
    text-align: center;
    top: 80px;
  }
`;

function Search({ onSubmit }) {
  const [searchKm, setSearchKm] = useState();

  function handleChange(event) {
    setSearchKm(event.target.value);
  }

  return (
    <Form onSubmit={(event) => onSubmit(event, searchKm)}>
      <input
        value={searchKm}
        type="number"
        step="any"
        autoComplete="off"
        onChange={handleChange}
        placeholder="Km 0.00"
      ></input>
    </Form>
  );
}

export default Search;

Search.propTypes = {
  onSubmit: PropTypes.func,
};
