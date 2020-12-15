import styled from "styled-components/macro";

const Select = styled.select`
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
`;

const DropdownPace = () => {
  return (
    <Select>
      <option>2.0km,/h</option>
      <option>2.5km,/h</option>
      <option>3.0km,/h</option>
      <option>3.5km,/h</option>
      <option>4.0km,/h</option>
      <option>4.5km,/h</option>
      <option selected>5.0km,/h</option>
      <option>5.5km,/h</option>
      <option>6.0km,/h</option>
      <option>6.5km,/h</option>
      <option>7.0km,/h</option>
      <option>7.5km,/h</option>
      <option>8.0km,/h</option>
      <option>8.5km,/h</option>
      <option>9.0km,/h</option>
    </Select>
  );
};

export default DropdownPace;
