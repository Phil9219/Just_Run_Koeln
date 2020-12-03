import React from "react";
import styled from "styled-components/macro";

import AppHeader from "../../components/AppHeader/AppHeader";
import BottomNav from "../../components/BottomNav/BottomNav";
import RunCard from "../../components/RunCard/RunCard";

const Header = styled.div``;

const Card = styled.div``;

const Navigation = styled.div``;

export default function AllRunsPage() {
  return (
    <div>
      <AppHeader>
        <Header />
      </AppHeader>
      <RunCard>
        <Card />
      </RunCard>
      <BottomNav>
        <Navigation />
      </BottomNav>
    </div>
  );
}
