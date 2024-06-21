import React from 'react';
import styled from 'styled-components';

const TimelineWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: ${({ theme }) => theme.timelineLine};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;

  ${props => props.left ? 'left: 0;' : 'left: 50%;'}

  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: ${props => props.left ? '-17px' : 'auto'};
    left: ${props => props.left ? 'auto' : '-17px'};
    background-color: ${({ theme }) => theme.timelineDot};
    border: 4px solid ${({ theme }) => theme.accentColor};
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
`;

const TimelineContent = styled.div`
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.cardBg};
  position: relative;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

function Experience() {
  const experiences = [
    {
      title: "Administrative Assistant",
      company: "Auge Asesores S.L., Alicante, Spain",
      date: "September 2021 - October 2023",
      description: "Handled telephone and customer service, financial administration, verification of financial analysis and results, and documentation management."
    },
    {
      title: "Sales Associate",
      company: "Zara, Inditex, Alicante, Spain",
      date: "November 2022 - September 2023",
      description: "Managed product replenishment, cash register tasks, customer service, organization and management of supplier orders, and window display preparation."
    }
  ];

  return (
    <section>
      <h2>Experience</h2>
      <TimelineWrapper>
        {experiences.map((exp, index) => (
          <TimelineItem left={index % 2 === 0} key={index}>
            <TimelineContent>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.date}</p>
              <p>{exp.description}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineWrapper>
    </section>
  );
}

export default Experience;