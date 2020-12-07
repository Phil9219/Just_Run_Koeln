import React from "react";
import styled from "styled-components/macro";
import AppHeader from "../AppHeader/AppHeader";
import Input from "../Input/Input";
import Calendar from "../Calendar/Calendar";
import Map from "../Map/Map";
import Button from "../Button/Button";

const RunSetupContainer = styled.div`
  display: grid;
  justify-content: center;
  padding: 15px;

  button:nth-child(4) {
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: Red;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    padding: 0;
  }
`;

const InputfieldsContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-evenly;
  gap: 15px;
`;

export default function RunSetupPage() {
  return (
    <>
      <AppHeader title={"Create Your Run"} />
      <RunSetupContainer>
        <Calendar />

        <Map />
        <InputfieldsContainer>
          <Input placeholder="Choose Your Distance" />
          <Input placeholder="Name Your Run" />
        </InputfieldsContainer>
        <Button>Create Run</Button>
      </RunSetupContainer>
    </>
  );
}
