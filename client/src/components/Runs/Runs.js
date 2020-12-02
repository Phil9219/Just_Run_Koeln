import styled from "styled-components/macro";
import CheckHookEmpty from "../../assets/checkHookEmpty.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  padding: 16px;
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
`;

const MapContainer = styled.div`
  height: 100px;
  width: 100%;
  border-radius: 5px;
  border: 2px solid var(--secondary-color);
  display: flex;
  align-items: center;
`;

const RunCard = () => {
  return (
    <Container>
      <div>
        <div>
          <p>01.12.2020</p>
          <p>18:30</p>
        </div>

        <div>
          <p>10km</p>
          <button>
            <img src={CheckHookEmpty} alt="Check Hook" />
          </button>
        </div>
      </div>

      <MapContainer></MapContainer>
    </Container>
  );
};

export default RunCard;
