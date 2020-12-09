import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import AppHeader from "../AppHeader/AppHeader";
import BigRunCard from "../RunCard/BigRunCard";
import BottomNav from "../../components/BottomNav/BottomNav";
import { getRunsById } from "../../api/runs";
import { useParams } from "react-router-dom";
const CreatedRunPageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default function CreatedRunPage() {
  const { id } = useParams();
  const [run, setRun] = useState(id);
  useEffect(() => {
    async function fetchData() {
      const runDetails = await getRunsById(id);
      setRun(runDetails);
    }
    fetchData();
  }, [id]);

  return (
    <>
      <CreatedRunPageContainer>
        <AppHeader title={"Run"} />

        <BigRunCard
          key={run.id}
          id={run.id}
          date={run.date}
          time={run.time}
          distance={run.distance}
          isFavorite={true}
          runName={run.runName}
        ></BigRunCard>
      </CreatedRunPageContainer>
      <BottomNav />
    </>
  );
}
