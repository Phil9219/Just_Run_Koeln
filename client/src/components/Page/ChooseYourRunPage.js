import React from "react";
import styled from "styled-components/macro";

import AppHeader from "../../components/AppHeader/AppHeader";

import RunCard from "../../components/RunCard/RunCard";

const ChooseYourRunPageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  margin: 0 15px;
  gap: 15px;
`;
export default function ChooseYourRunPage() {
  return (
    <ChooseYourRunPageContainer>
      <AppHeader title={"Choose Your Run"} />
      <ScrollContainer>
        <RunCard
          date={"44.44.444"}
          time={"14:44"}
          distance={"10"}
          isFavorite={true}
        ></RunCard>
        <RunCard date={"44.44.444"} time={"14:44"} distance={"10"}></RunCard>
        <RunCard date={"44.44.444"} time={"14:44"} distance={"10"}></RunCard>
        <RunCard date={"44.44.444"} time={"14:44"} distance={"10"}></RunCard>
      </ScrollContainer>
    </ChooseYourRunPageContainer>
  );
}