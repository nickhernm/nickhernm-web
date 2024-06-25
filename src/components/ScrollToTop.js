import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: opacity 0.3s, background-color 0.3s;
  
  &:hover {
    background-color: ${({ theme }) => theme.accentColorHover};
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <ScrollButton onClick={scrollToTop} visible={isVisible}>
          <FaArrowUp />
        </ScrollButton>
      )}
    </>
  );
};

export default ScrollToTop;