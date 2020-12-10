import React, { useState, useEffect } from "react";
import AppHeader from "../AppHeader/AppHeader";
import BigRunCard from "../RunCard/BigRunCard";
import BottomNav from "../../components/BottomNav/BottomNav";
import { getRunsById } from "../../api/runs";
import { useParams } from "react-router-dom";
import { CreatedRunContainer } from "../../components/PageContainer";

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
      <CreatedRunContainer>
        <BigRunCard isFavorite={true} {...run}></BigRunCard>
      </CreatedRunContainer>
      <BottomNav />
    </>
  );
}
