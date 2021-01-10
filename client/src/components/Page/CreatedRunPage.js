import React, { useState, useEffect } from "react";
import AppHeader from "../AppHeader/AppHeader";
import RunCard from "../RunCard/RunCard";
import BottomNav from "../../components/BottomNav/BottomNav";
import { getRunsById } from "../../api/runs";
import { useParams } from "react-router-dom";
import { CreatedRunContainer } from "../../components/PageContainer";
import styled from "styled-components/macro";

const Page = styled.div`
  margin: 0 15px;
`;

export default function CreatedRunPage() {
  const { _id } = useParams();
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
      <Page>
        <CreatedRunContainer>
          <RunCard big {...run}></RunCard>
        </CreatedRunContainer>
      </Page>
      <BottomNav />
    </>
  );
}
