import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import AppHeader from "../../components/AppHeader/AppHeader";
import RunCard from "../../components/RunCard/RunCard";
import BottomNav from "../../components/BottomNav/BottomNav";
import Search from "../../components/Search/Search";
import { getRuns, searchForKm } from "../../api/runs";
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
  const [searchInputValue, setSearchInputValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (searchInputValue) {
        console.log(typeof searchInputValue);
        const filteredRuns = await searchForKm(searchInputValue);
        setRuns(filteredRuns);
      }
      if (!searchInputValue) {
        const newRuns = await getRuns();
        setRuns(newRuns);
      }
    }
    fetchData();
  }, [searchInputValue]);

  return (
    <>
      <AppHeader title={"Choose Your Run"} />
      <ChooseRunContainer>
        <Search onChange={setSearchInputValue} value={searchInputValue} />
        <ScrollContainer>
          {runs?.map((run) => (
            <RunCard
              key={run.id}
              onFavoriteClick={() => alert("click")}
              isFavorite={true}
              {...run}
            />
          ))}
        </ScrollContainer>
      </ChooseRunContainer>
      <BottomNav />
    </>
  );
}
