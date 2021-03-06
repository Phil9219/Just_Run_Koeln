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
    text-decoration: red;
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

  async function handleTypeIn(event, searchValue) {
    event.preventDefault();
    if (searchValue) {
      setRuns(await searchForKm(searchValue));
    } else {
      setRuns(await getRuns());
    }
  }

  return (
    <>
      <AppHeader title={"Choose Your Run"} />
      <ChooseRunContainer>
        <ScrollContainer>
          <Search onSubmit={handleTypeIn} />
          {runs
            ?.filter(
              (run) => new Date(run.startDate).getTime() > new Date().getTime()
            )

            .map((run) => (
              <RunCard key={id} {...run} />
            ))}
          ;
        </ScrollContainer>
      </ChooseRunContainer>
      <BottomNav />
    </>
  );
}
