import React, { useState, useEffect } from "react";
import AppHeader from "../AppHeader/AppHeader";
import BigRunCard from "../RunCard/BigRunCard";
import BottomNav from "../../components/BottomNav/BottomNav";
import { getRunsById } from "../../api/runs";
import { useParams } from "react-router-dom";
import { CreatedRunContainer } from "../../components/PageContainer";

export default function CreatedRunPage() {
  const { _id } = useParams();
  console.log(_id);
  const [run, setRun] = useState(_id);
  useEffect(() => {
    async function fetchData() {
      const runDetails = await getRunsById(_id);
      setRun(runDetails);
    }
    fetchData();
  }, [_id]);

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
