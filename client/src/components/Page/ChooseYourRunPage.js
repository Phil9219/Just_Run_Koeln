import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import AppHeader from "../../components/AppHeader/AppHeader";
import RunCard from "../../components/RunCard/RunCard";
import BottomNav from "../../components/BottomNav/BottomNav";
import { getRuns } from "../../api/runs";
import { id } from "date-fns/locale";
const ChooseYourRunPageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30%;
  margin-bottom: 15%;
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
      <AppHeader title={"Choose Your Run"} />
      <ChooseYourRunPageContainer>
        <ScrollContainer>
          {runs?.map((run) => (
            <RunCard
              key={id}
              onFavoriteClick={() => alert("click")}
              isFavorite={true}
              {...run}
            ></RunCard>
          ))}
          ;
        </ScrollContainer>
      </ChooseYourRunPageContainer>
      <BottomNav />
    </>
  );
}
