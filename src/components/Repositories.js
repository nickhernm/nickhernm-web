import React from 'react';
import styled from 'styled-components';

const ReposWrapper = styled.section`
  padding: 2rem;
`;

const RepoCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.cardText};
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Repositories = () => (
  <ReposWrapper>
    <h1>GitHub Repositories</h1>
    <RepoCard>
      <h2>Repository 1</h2>
      <p>Description of repository 1...</p>
    </RepoCard>
    <RepoCard>
      <h2>Repository 2</h2>
      <p>Description of repository 2...</p>
    </RepoCard>
  </ReposWrapper>
);

export default Repositories;
