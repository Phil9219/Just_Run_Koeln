import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import AppHeader from "../../components/AppHeader/AppHeader";
import RunCard from "../../components/RunCard/RunCard";
import BottomNav from "../../components/BottomNav/BottomNav";
import Search from "../../components/Search/Search";
import { getRuns } from "../../api/runs";
import { id } from "date-fns/locale";
import { ChooseRunContainer } from "../../components/PageContainer";

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

  function handleSubmit(searchResults) {
    setRuns(searchResults);
  }

  return (
    <>
      <AppHeader title={"Choose Your Run"} />
      <ChooseRunContainer>
        <Search handleSubmit={handleSubmit} />
        <ScrollContainer>
          {runs?.map((run) => (
            <RunCard
              key={id}
              onFavoriteClick={() => alert("click")}
              isFavorite={true}
              {...run}
            />
          ))}
          ;
        </ScrollContainer>
      </ChooseRunContainer>
      <BottomNav />
    </>
  );
}
