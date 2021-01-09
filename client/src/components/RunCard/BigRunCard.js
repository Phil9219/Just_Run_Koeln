import styled from "styled-components/macro";
import CheckHookEmpty from "../../assets/checkHookEmpty.svg";
import CheckHookFilled from "../../assets/checkHookFilled.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Map from "../Map/Map";
import toLocaleDateString from "../../utils/localDateString";
import { useState } from "react";

const Container = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 16px;

  padding: 16px;
  border-radius: 15px;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  font-weight: 600;

  div {
    display: flex;
    justify-content: space-between;

    gap: 16px;

    div {
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;

      p {
        margin: 0;
        padding: 0;
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
  height: 450px;
  width: 100%;
  border-radius: 5px;
  border: 2px solid var(--secondary-color);
  display: flex;
  align-items: center;
`;

const BigRunCard = ({
  localStorageIsFavorite = false,
  onFavoriteClick,
  startDate,
  distance,
  runName,
  _id,
  pace,
}) => {
  const parseDate = new Date(startDate).toLocaleString("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("runs_done")) || []
  );

  const [isFavorite, setIsFavorite] = useState(favorites.includes(_id));

  function changeIsFavorite() {
    setIsFavorite(!isFavorite);
  }

  function handleClickFavorites(_id) {
    let currentFavorites = null;

    currentFavorites = JSON.parse(localStorage.getItem("runs_done")) || [];

    const isFavorite = currentFavorites.includes(_id);

    if (isFavorite) {
      currentFavorites = currentFavorites.filter(
        (favorites) => favorites !== _id
      );
    } else {
      currentFavorites.push(_id);
    }

    localStorage.setItem("runs_done", JSON.stringify(currentFavorites));
  }

  return (
    <Container>
      <div>
        <div>
          <p>{parseDate}</p>
        </div>

        <div>
          <p>{distance}km</p>
          <p>{pace}ø Pace</p>

          <button
            onClick={() => {
              handleClickFavorites(_id);
              changeIsFavorite();
            }}
          >
            <img
              id={onFavoriteClick}
              src={isFavorite ? CheckHookFilled : CheckHookEmpty}
              alt="Check Hook"
            />
          </button>
        </div>
      </div>
      <p>{runName}</p>

      <MapContainer>
        <Map showHeader={false} />
      </MapContainer>
    </Container>
  );
};

BigRunCard.propTypes = {
  localStorageIsFavorite: PropTypes.bool,
  onFavoriteClick: PropTypes.func,
  distance: PropTypes.number.isRequired,
  runName: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date),
  pace: PropTypes.number.isRequired,
};
export default BigRunCard;
