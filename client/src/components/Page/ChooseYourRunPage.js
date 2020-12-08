import React from "react";
import styled from "styled-components/macro";

import AppHeader from "../../components/AppHeader/AppHeader";

import RunCard from "../../components/RunCard/RunCard";
import BottomNav from "../../components/BottomNav/BottomNav";
import { Link } from "react-router-dom";
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

  a {
    text-decoration: none;
  }
`;
export default function ChooseYourRunPage() {
  return (
    <>
      <ChooseYourRunPageContainer>
        <AppHeader title={"Choose Your Run"} />
        <ScrollContainer>
          <Link to="/created_run">
            <RunCard
              date={"44.44.444"}
              time={"14:44"}
              distance={"10"}
              isFavorite={true}
              runName={"Severin Brücke Run"}
            ></RunCard>
            <RunCard
              date={"44.44.444"}
              time={"14:44"}
              distance={"10"}
              runName={"Grüngürtel"}
            ></RunCard>
            <RunCard
              date={"44.44.444"}
              time={"14:44"}
              distance={"10"}
            ></RunCard>

            <RunCard
              date={"44.44.444"}
              time={"14:44"}
              distance={"10"}
            ></RunCard>
          </Link>
        </ScrollContainer>
      </ChooseYourRunPageContainer>
      <BottomNav />
    </>
  );
}
