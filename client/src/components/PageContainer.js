import styled from "styled-components/macro";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30%;
`;

export const CreatedRunContainer = styled(PageContainer)`
  margin-bottom: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RunsDoneContainer = styled(PageContainer)`
  margin-bottom: 30%;
`;

export const ChooseRunContainer = styled(PageContainer)`
  margin-bottom: 30%;
`;
