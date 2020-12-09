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
  margin-top: 30%;
  margin-bottom: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
      <AppHeader title={"Run"} />
      <CreatedRunPageContainer>
        <BigRunCard isFavorite={true} {...run}></BigRunCard>
      </CreatedRunPageContainer>
      <BottomNav />
    </>
  );
}
