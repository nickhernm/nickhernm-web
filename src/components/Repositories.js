import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const RepositoriesWrapper = styled.section`
  padding: 4rem 2rem;
`;

const RepoItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 1rem 0;
`;

const RepoTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.accentColor};
`;

const RepoDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Repositories = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/nickhernm/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <RepositoriesWrapper id="repositories">
      {repos.map((repo, index) => (
        <RepoItem key={index}>
          <RepoTitle>{repo.name}</RepoTitle>
          <RepoDescription>{repo.description}</RepoDescription>
        </RepoItem>
      ))}
    </RepositoriesWrapper>
  );
};

export default Repositories;
