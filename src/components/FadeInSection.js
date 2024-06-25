import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <FadeInWrapper ref={domRef} isVisible={isVisible}>
      {children}
    </FadeInWrapper>
  );
};

const FadeInWrapper = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateY(${({ isVisible }) => (isVisible ? 0 : '20px')});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

export default FadeInSection;