import React from "react";
import styled from "styled-components/macro";

import AppHeader from "../../components/AppHeader/AppHeader";
// import BottomNav from "../../components/BottomNav/BottomNav";
import BigRunCard from "../../components/RunCard/BigRunCard";

const CreateRunPageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default function CreateRunPage() {
  return (
    <CreateRunPageContainer>
      <AppHeader title={"Choose Your Run"} />
      <BigRunCard
        date={"44.44.444"}
        time={"14:44"}
        distance={"10"}
        isFavorite={true}
      ></BigRunCard>
    </CreateRunPageContainer>
  );
}
