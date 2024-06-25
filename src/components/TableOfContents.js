import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TOCWrapper = styled.nav`
  position: sticky;
  top: 2rem;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
  padding: 1rem;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.cardShadow};
`;

const TOCList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const TOCItem = styled.li`
  margin-bottom: 0.5rem;
`;

const TOCLink = styled.a`
  color: ${({ theme, active }) => active ? theme.accentColor : theme.textColor};
  text-decoration: none;
  font-weight: ${({ active }) => active ? 'bold' : 'normal'};

  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h2, h3'));
    const headingData = headingElements.map(heading => ({
      id: heading.id,
      text: heading.textContent,
      level: parseInt(heading.tagName.charAt(1))
    }));
    setHeadings(headingData);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -80% 0%' }
    );

    headingElements.forEach(heading => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  return (
    <TOCWrapper>
      <h4>Contenido</h4>
      <TOCList>
        {headings.map(heading => (
          <TOCItem key={heading.id} style={{ marginLeft: `${(heading.level - 2) * 1}rem` }}>
            <TOCLink 
              href={`#${heading.id}`} 
              active={activeId === heading.id}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${heading.id}`).scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              {heading.text}
            </TOCLink>
          </TOCItem>
        ))}
      </TOCList>
    </TOCWrapper>
  );
};

export default TableOfContents;