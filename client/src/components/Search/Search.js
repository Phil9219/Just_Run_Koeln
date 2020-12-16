import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { useState } from "react";

import { getRuns, searchForKm } from "../../api/runs";
const Form = styled.form`
  display: flex;
  justify-content: center;

  input {
    height: 40px;
    width: 70%;
    margin-top: 15px;
    border: solid 2px var(--secondary-color);
    background: none;
    color: var(--secondary-color);
    font-family: "Heiti SC", adobe-heiti-std, sans-serif;
    font-size: 1rem;
    font-weight: 700;
    display: flex;
    text-align: center;
    position: fixed;
    top: 80px;
  }
`;

function Search({ handleSubmit }) {
  const [searchKm, setSearchKm] = useState();

  return (
    <Form
      onSubmit={async (event) => {
        event.preventDefault();
        if (searchKm) {
          handleSubmit(await searchForKm(searchKm));
        } else {
          handleSubmit(await getRuns());
        }
      }}
    >
      <input
        value={searchKm}
        type="number"
        step="any"
        autoComplete="off"
        onChange={(event) => setSearchKm(event.target.value)}
        placeholder=" Km 0.00"
      ></input>
    </Form>
  );
}

export default Search;

Search.propTypes = {
  handleSubmit: PropTypes.func,
};
