import styled from "styled-components/macro";
import PropTypes from "prop-types";
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

const DropdownPace = ({ pace, setPace }) => {
  const handlePacePick = (event) => {
    setPace(event.target.value);
  };

  return (
    <Select onChange={handlePacePick} value={pace}>
      <option pace="2.5 min/km"> 2.5 min/km</option>
      <option pace="2.5 min/km"> 2.5 min/km</option>
      <option pace="3.0 min/km"> 3.0 min/km</option>
      <option pace="3.5 min/km"> 3.5 min/km</option>
      <option pace="4.0 min/km"> 4.0 min/km</option>
      <option pace="4.5 min/km"> 4.5 min/km</option>
      <option selected pace="5.0 min/km">
        {" "}
        5.0 min/km
      </option>
      <option pace="5.5 min/km"> 5.5 min/km</option>
      <option pace="6.0 min/km"> 6.0 min/km</option>
      <option pace="6.5 min/km"> 6.5 min/km</option>
      <option pace="7.0 min/km"> 7.0 min/km</option>
      <option pace="7.5 min/km"> 7.5 min/km</option>
      <option pace="8.0 min/km"> 8.0 min/km</option>
      <option pace="8.5 min/km"> 8.5 min/km</option>
      <option pace="9.0 min/km"> 9.0 min/km</option>
      <option pace="9.5 min/km"> 9.5 min/km</option>
      <option pace="10 min/km"> 10 min/km</option>
    </Select>
  );
};

DropdownPace.propTypes = {
  pace: PropTypes.string,
  setPace: PropTypes.string,
};

export default DropdownPace;
