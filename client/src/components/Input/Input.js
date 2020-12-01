import styled from "styled-components/macro";

const Input = styled.input`
  height: 40px;
  width: 330px;
  border: solid 2px var(--secondary-color);
  background: none;
  color: var(--secondary-color);
  font-family: "Heiti SC", adobe-heiti-std, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  text-align: center;

  ::placeholder {
    color: var(--inputfield-color);
  }
`;

export default Input;
