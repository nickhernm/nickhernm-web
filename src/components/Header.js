import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.headerText};
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;

const TitleSection = styled.div`
  grid-column: 2;
  text-align: center;
`;

const Name = styled.h1`
  margin: 0;
  font-size: 1.8rem;
`;

const Subtitle = styled.h2`
  margin: 0.5rem 0 0;
  font-size: 1rem;
  font-weight: normal;
  color: ${({ theme }) => theme.secondaryColor};
`;

const RightSection = styled.div`
  grid-column: 3;
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const AuthButton = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accentColorHover};
    transform: translateY(-2px);
  }
`;

const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accentColorHover};
    transform: translateY(-2px);
  }
`;

const UserInfo = styled.span`
  font-size: 0.9rem;
`;

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <HeaderWrapper>
      <TitleSection>
        <Name>Jaime Hernández</Name>
        <Subtitle>Computer Engineering and Mathematics</Subtitle>
      </TitleSection>
      <RightSection>
        {user ? (
          <>
            <UserInfo>Welcome, {user.username}</UserInfo>
            <LogoutButton onClick={logout}>Logout</LogoutButton>
          </>
        ) : (
          <AuthButtons>
            <AuthButton to="/login">Login</AuthButton>
            <AuthButton to="/register">Register</AuthButton>
          </AuthButtons>
        )}
        <ThemeToggle />
      </RightSection>
    </HeaderWrapper>
  );
};

export default Header;