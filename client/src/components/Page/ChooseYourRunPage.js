import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import AppHeader from "../../components/AppHeader/AppHeader";
import RunCard from "../../components/RunCard/RunCard";
import BottomNav from "../../components/BottomNav/BottomNav";
import { Link } from "react-router-dom";
import { getRuns } from "../../api/runs";
const ChooseYourRunPageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

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
export default function ChooseYourRunPage() {
  const [runs, setRuns] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const newRuns = await getRuns();
      setRuns(newRuns);
    }
    fetchData();
  }, []);

  return (
    <>
      <ChooseYourRunPageContainer>
        <AppHeader title={"Choose Your Run"} />
        <ScrollContainer>
          {runs?.map((run) => (
            <Link key={run.id} to="/created_run">
              <RunCard
                date={run.date}
                time={run.time}
                distance={run.distance}
                isFavorite={true}
                runName={run.runName}
                onFavoriteClick={() => alert("click")}
              ></RunCard>
            </Link>
          ))}
          ;
        </ScrollContainer>
      </ChooseYourRunPageContainer>
      <BottomNav />
    </>
  );
}
