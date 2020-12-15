import styled from "styled-components/macro";
import CheckHookEmpty from "../../assets/checkHookEmpty.svg";
import CheckHookFilled from "../../assets/checkHookFilled.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Map from "../Map/Map";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 350px;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 15px;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  font-weight: 600;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    div {
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;

      p {
        margin: 0;
        padding: 0;
        color: var(--secondary-color);
      }
    }
    div:nth-child(2) {
      font-size: 2.5rem;
      display: flex;
      flex-direction: row;
      column-gap: 40px;

      button {
        background: none;
        border: none;
        height: 25px;
        width: 25px;
        padding: 0;

        img {
          margin: auto;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  p {
    display: flex;
    justify-content: center;
    margin: 0;
  }
`;

const MapContainer = styled.div`
  height: 250px;
  width: 100%;
  border-radius: 5px;
  border: 2px solid var(--secondary-color);
  display: flex;
  align-items: center;
`;

const RunCard = ({
  isFavorite,
  onFavoriteClick,
  startDate,

  distance,
  runName,
  id,
}) => {
  console.log(startDate);

  const parseDate = new Date(startDate).toLocaleString("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  console.log(parseDate);

  return (
    <Container>
      <div>
        <Link to={`/runs/${id}`}>
          <div>
            <p>{parseDate}</p>
          </div>
        </Link>
        <div>
          <Link to={`/runs/${id}`}>
            <p>{distance}km</p>
          </Link>
          <Link to="/runs_done" label="runs done">
            <button onClick={onFavoriteClick}>
              <img
                src={isFavorite ? CheckHookFilled : CheckHookEmpty}
                alt="Check Hook"
              />
            </button>
          </Link>
        </div>
      </div>
      <p>{runName}</p>

      <MapContainer>
        <Map showHeader={false} />
      </MapContainer>
    </Container>
  );
};

RunCard.propTypes = {
  isFavorite: PropTypes.bool,
  onFavoriteClick: PropTypes.func,
  distance: PropTypes.number.isRequired,
  runName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  startDate: PropTypes.instanceOf(Date),
};
export default RunCard;
