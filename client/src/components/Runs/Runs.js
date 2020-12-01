import styled from "styled-components/macro";

const Container = styled.div`
  height: 166px;
  width: 315px;
  border-radius: 15px;
  border: 2px solid var(--secondary-color);
`;

const Date = styled.div`
  color: var(--secondary-color);
  font-size: 1rem;
  font-weight: 700;
`;

const RunCard = () => {
  return (
    <Container>
      <Date>01.12.2020</Date>
    </Container>
  );
};

export default RunCard;
