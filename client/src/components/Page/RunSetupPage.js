import React from "react";
import styled from "styled-components/macro";
import AppHeader from "../AppHeader/AppHeader";
import Input from "../Input/Input";
import Calendar from "../Calendar/Calendar";
import Map from "../Map/Map";
import Button from "../Button/Button";
import BottomNav from "../../components/BottomNav/BottomNav";
import { Link } from "react-router-dom";

const RunSetupContainer = styled.div`
  display: grid;
  justify-content: center;
  padding: 15px;

  button:nth-child(1) {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    margin: 0 30px 0 90px;
    font-size: 1.5rem;
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
        <Link to="/created run" label="create">
          <Button>Create Run</Button>
        </Link>
      </RunSetupContainer>
      <BottomNav />
    </>
  );
}
