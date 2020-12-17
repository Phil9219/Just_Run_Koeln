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

const SelectPace = ({ pace, onPaceChange }) => {
  const handlePacePick = (event) => {
    onPaceChange(event.target.value);
  };

  return (
    <Select onChange={handlePacePick} value={pace}>
      <option value="2.5">2.0 min/km</option>
      <option value="2.5">2.5 min/km</option>
      <option value="3.0">3.0 min/km</option>
      <option value="3.5">3.5 min/km</option>
      <option value="4.0">4.0 min/km</option>
      <option value="4.5">4.5 min/km</option>
      <option selected value="5.0">
        5.0 min/km
      </option>
      <option value="5.5">5.5 min/km</option>
      <option value="6.0">6.0 min/km</option>
      <option value="6.5">6.5 min/km</option>
      <option value="7.0">7.0 min/km</option>
      <option value="7.5">7.5 min/km</option>
      <option value="8.0">8.0 min/km</option>
      <option value="8.5">8.5 min/km</option>
      <option value="9.0">9.0 min/km</option>
      <option value="9.5">9.5 min/km</option>
      <option value="10">10 min/km</option>
    </Select>
  );
};

SelectPace.propTypes = {
  pace: PropTypes.number,
  onPaceChange: PropTypes.string,
};

export default SelectPace;
