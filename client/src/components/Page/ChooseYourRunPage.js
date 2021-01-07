import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import AppHeader from "../../components/AppHeader/AppHeader";
import RunCard from "../../components/RunCard/RunCard";
import BottomNav from "../../components/BottomNav/BottomNav";
import Search from "../../components/Search/Search";
import { getRuns, searchForKm } from "../../api/runs";
import { id } from "date-fns/locale";
import { ChooseRunContainer } from "../../components/PageContainer";
// import CheckHookEmpty from "../../assets/checkHookEmpty.svg";
// import CheckHookFilled from "../../assets/checkHookFilled.svg";

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
  // const [currentFavorits, setCurrentFavorits] = useState(
  //   JSON.parse(localStorage.getItem("favorites")) || []
  // );
  // const fill = CheckHookFilled;
  // const clear = CheckHookEmpty;
  // const [favRun, setFavRun] = useState(clear);

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

  async function handleClickFavorites(id) {
    let isFavorite = null;
    try {
      isFavorite = JSON.parse(localStorage.getItem("runs_done")) || [];
    } catch (error) {
      isFavorite = [];
    }
    if (isFavorite.includes(id)) {
      return;
    }
    const newFavorites = [...isFavorite, id];
    localStorage.setItem("runs_done", JSON.stringify(newFavorites));
  }

  return (
    <>
      <AppHeader title={"Choose Your Run"} />
      <ChooseRunContainer>
        <Search onSubmit={handleTypeIn} />
        <ScrollContainer>
          {runs
            ?.filter(
              (run) => new Date(run.startDate).getTime() > new Date().getTime()
            )

            .map((run) => (
              <RunCard
                key={id}
                onFavoriteClick={handleClickFavorites}
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
