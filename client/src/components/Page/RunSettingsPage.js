import React from "react";
// import styled from "styled-components/macro";

import AppHeader from "../../components/AppHeader/AppHeader";
import BottomNav from "../../components/BottomNav/BottomNav";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

export default function RunSettingsPage() {
  return (
    <div>
      <AppHeader></AppHeader>
      <Input></Input>
      {/* MAP */}
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Button></Button>
      <BottomNav></BottomNav>
    </div>
  );
}
