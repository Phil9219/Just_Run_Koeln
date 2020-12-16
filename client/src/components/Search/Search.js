import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { useState } from "react";

import { searchForKm } from "../../api/runs";
const Form = styled.form`
  input {
    height: 40px;
    width: 100%;
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
        handleSubmit(await searchForKm(searchKm));
      }}
    >
      <input
        value={searchKm}
        type="number"
        onChange={(event) => setSearchKm(event.target.value)}
        placeholder=" Search for km"
      ></input>
    </Form>
  );
}

export default Search;

Search.propTypes = {
  handleSubmit: PropTypes.func,
};
