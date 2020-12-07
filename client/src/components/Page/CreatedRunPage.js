import React from "react";
import styled from "styled-components/macro";
import AppHeader from "../AppHeader/AppHeader";
import BigRunCard from "../RunCard/BigRunCard";
import BottomNav from "../../components/BottomNav/BottomNav";
const CreatedRunPageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default function CreatedRunPage() {
  return (
    <>
      <CreatedRunPageContainer>
        <AppHeader title={"Choose Your Run"} />
        <BigRunCard
          date={"44.44.444"}
          time={"14:44"}
          distance={"10"}
          isFavorite={true}
        ></BigRunCard>
      </CreatedRunPageContainer>
      <BottomNav />
    </>
  );
}
