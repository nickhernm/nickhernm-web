import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaStar, FaCodeBranch, FaCircle } from 'react-icons/fa';

const ReposWrapper = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RepoCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.cardText};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const RepoTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.accentColor};
`;

const RepoDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const RepoStats = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`;

const RepoStat = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const RepoLanguage = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const LanguageColor = styled(FaCircle)`
  font-size: 0.8rem;
`;

const getLanguageColor = (language) => {
  const colors = {
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    Java: '#b07219',
    // Add more languages and colors as needed
  };
  return colors[language] || '#858585';
};

const Repositories = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/nickhernm/repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <ReposWrapper>
      <h1>GitHub Repositories</h1>
      <RepoGrid>
        {repos.map((repo) => (
          <RepoCard key={repo.id}>
            <RepoTitle>{repo.name}</RepoTitle>
            <RepoDescription>{repo.description || 'No description available.'}</RepoDescription>
            <RepoStats>
              <RepoStat>
                <FaStar /> {repo.stargazers_count}
              </RepoStat>
              <RepoStat>
                <FaCodeBranch /> {repo.forks_count}
              </RepoStat>
              <RepoLanguage>
                <LanguageColor color={getLanguageColor(repo.language)} />
                {repo.language || 'Unknown'}
              </RepoLanguage>
            </RepoStats>
          </RepoCard>
        ))}
      </RepoGrid>
    </ReposWrapper>
  );
};

export default Repositories;