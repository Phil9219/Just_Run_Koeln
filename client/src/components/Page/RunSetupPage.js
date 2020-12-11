import React, { useState } from "react";
import styled from "styled-components/macro";
import AppHeader from "../AppHeader/AppHeader";
import Input from "../Input/Input";
import Calendar from "../Calendar/Calendar";
import Map from "../Map/Map";
import Button from "../Button/Button";
import BottomNav from "../../components/BottomNav/BottomNav";
import { Link } from "react-router-dom";
import { postRun } from "../../api/runs";

const RunSetupContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  margin-top: 30%;
  margin-bottom: 20%;
  z-index: 0;
  position: absolute;

  button:nth-child(1) {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    margin: 0 50%
    font-size: 1.5rem;
  }
`;

const InputfieldsContainer = styled.form`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-evenly;
  gap: 15px;
`;

const MapContainer = styled.div`
  height: 400px;
  width: 100%;
  border: 2px solid var(--secondary-color);
  display: flex;
  align-items: center;
`;

export default function RunSetupPage(id) {
  const [distance, setDistance] = useState(null); // numbers only!!! -> null correct?
  const [runName, setRunName] = useState("");

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
    console.log(distance);
  };

  const handleRunNameChange = (event) => {
    setRunName(event.target.value);
    console.log(runName);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(runName, distance);
    postRun(runName, distance);
  };

  return (
    <>
      <AppHeader title={"Create Your Run"} />
      <RunSetupContainer>
        <Calendar />

        <MapContainer>
          <Map />
        </MapContainer>
        <InputfieldsContainer onSubmit={handleSubmit}>
          <Input
            onChange={handleDistanceChange}
            value={distance}
            placeholder="Choose Your Distance (in km)"
          />
          <Input
            onChange={handleRunNameChange}
            value={runName}
            placeholder="Name Your Run"
          />

          <Link to={`/runs/${id}`}>
            <Button type="submit">Create Run</Button>
          </Link>
        </InputfieldsContainer>
      </RunSetupContainer>
      <BottomNav />
    </>
  );
}
