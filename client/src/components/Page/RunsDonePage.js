import React from "react";
import styled from "styled-components/macro";

import AppHeader from "../../components/AppHeader/AppHeader";
import BottomNav from "../../components/BottomNav/BottomNav";
import RunCard from "../../components/RunCard/RunCard";

export default function RunsDonePage() {
  return (
    <div>
      <AppHeader></AppHeader>
      <RunCard></RunCard>
      <BottomNav></BottomNav>
    </div>
  );
}
