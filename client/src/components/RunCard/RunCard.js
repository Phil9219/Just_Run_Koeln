import styled from "styled-components/macro";
import CheckHookEmpty from "../../assets/checkHookEmpty.svg";
import CheckHookFilled from "../../assets/checkHookFilled.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Map from "../Map/Map";
import { useState } from "react";

const RunCard = ({
  big = false,
  onFavoriteClick,
  startDate,
  distance,
  runName,
  _id,
  pace,
}) => {
  RunCard.propTypes = {
    big: PropTypes.bool,
    onFavoriteClick: PropTypes.func,
    distance: PropTypes.number.isRequired,
    runName: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date),
    pace: PropTypes.number.isRequired,
  };

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
    <Container big={big}>
      <div>
        <DateContainer>
          <Link to={`/runs/${_id}`}>
            <div>
              <p>{parseDate}</p>
            </div>
          </Link>
        </DateContainer>
        <RunInfoContainer>
          {!big && (
            <Link to={`/runs/${_id}`}>
              <p>{distance}km</p>
              <p>{pace}ø Pace</p>
            </Link>
          )}
          {big && (
            <Link>
              <p>{distance}km</p>
              <p>{pace}ø Pace</p>
            </Link>
          )}

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
        </RunInfoContainer>
      </div>
      <p>{runName}</p>

      <MapContainer big={big}>
        <Map showHeader={false} />
      </MapContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: ${(props) => (props.big ? "465px" : "350px")};
  padding: 16px;
  margin-top: 5%;
  border-radius: 15px;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  font-weight: 600;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }
  p {
    display: flex;
    justify-content: center;
    margin: 0;
  }
`;

const DateContainer = styled.div`
  a {
    text-decoration: none;
  }
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
`;

const RunInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
a{
  text-decoration:none;
}
p:first-of-type {
  font-size: 2rem;
}

p {
  color: var(--secondary-color);
}


button {
  background: none;
  border: none;
  height: 25px;
  width: 25px;
  padding: 0;


img {
  object-fit: cover;
  height: 100%;
  
        
      }
    }
  }
`;

const MapContainer = styled.div`
  height: ${(props) => (props.big ? "350px" : "250px")};
  width: 100%;
  border-radius: 5px;
  border: 2px solid var(--secondary-color);
  display: flex;
  align-items: center;
`;
export default RunCard;
