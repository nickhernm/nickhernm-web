import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.headerText};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
`;

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Name = styled.h1`
  margin: 0;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.h2`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  font-weight: normal;
  color: ${({ theme }) => theme.secondaryColor};

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const AuthButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  transition: 0.3s;
  text-decoration: none;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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

const LoginButton = styled(AuthButton)`
  color: ${({ theme }) => theme.primaryColor};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.primaryColor};

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.bodyBg};
  }
`;

const RegisterButton = styled(AuthButton)`
  color: ${({ theme }) => theme.bodyBg};
  background-color: ${({ theme }) => theme.primaryColor};

  &:hover {
    background-color: ${({ theme }) => theme.primaryColorDark};
  }
`;

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => navigate('/login');
  const handleRegister = () => navigate('/register');

  return (
    <HeaderWrapper>
      <TitleSection>
        <Name>Jaime Hernández</Name>
        <Subtitle>Computer Engineering and Mathematician</Subtitle>
      </TitleSection>
      <RightSection>
        <ThemeToggle />
        {user ? (
          <>
            <UserInfo>Welcome, {user.username}</UserInfo>
            <LogoutButton onClick={logout}>Logout</LogoutButton>
          </>
        ) : (
          <AuthButtons>
            <LoginButton onClick={handleLogin}>Login</LoginButton>
            <RegisterButton onClick={handleRegister}>Register</RegisterButton>
        </AuthButtons>
        )}
      </RightSection>
    </HeaderWrapper>
  );
};

export default Header;