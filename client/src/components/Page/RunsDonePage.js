import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import AppHeader from "../../components/AppHeader/AppHeader";
import RunCard from "../../components/RunCard/RunCard";
import BottomNav from "../../components/BottomNav/BottomNav";
import { getRuns } from "../../api/runs";
import { id } from "date-fns/locale";
import { RunsDoneContainer } from "../../components/PageContainer";

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
export default function RunsDonePage() {
  const [runs, setRuns] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const newRuns = await getRuns();
      setRuns(newRuns);
    }
    fetchData();
  }, []);

  function handleClickFavorites() {
    let isFavorites = true;
    console.log(isFavorites);
    try {
      isFavorites = JSON.parse(localStorage.getItem("runs_done")) || [];
    } catch (error) {
      console.error(error);
      isFavorites = false;
    }
    if (isFavorites.includes(id)) {
      console.log(isFavorites);
      return;
    }
  }
  return (
    <>
      <AppHeader title={"Your Runs"} />
      <RunsDoneContainer>
        <ScrollContainer>
          {runs
            ?.filter(
              (run) => new Date(run.startDate).getTime() > new Date().getTime()
            )
            .map((run) => (
              <RunCard
                key={id}
                onFavoriteClick={() => handleClickFavorites}
                {...run}
              />
            ))}
          ;
        </ScrollContainer>
      </RunsDoneContainer>

      <BottomNav />
    </>
  );
}
