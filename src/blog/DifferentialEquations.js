// src/blog/DifferentialEquations.js

import React from 'react';
import styled from 'styled-components';

const PostWrapper = styled.div`
  padding: 2rem;
  margin: 2rem auto;
  max-width: 800px;
  text-align: left;
`;

const PostTitle = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
`;

const PostDate = styled.p`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 0.9rem;
`;

const PostContent = styled.div`
  line-height: 1.6;
`;

const Equation = styled.div`
  background: ${({ theme }) => theme.backgroundSecondary};
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const DifferentialEquations = () => (
  <PostWrapper>
    <PostTitle>Differential Equations</PostTitle>
    <PostDate>June 22, 2024</PostDate>
    <PostContent>
      <p>Differential equations are mathematical equations that involve derivatives of a function. They are used to describe various phenomena in fields such as physics, engineering, and economics.</p>
      <ul>
        <li>Ordinary Differential Equations (ODEs)</li>
        <li>Partial Differential Equations (PDEs)</li>
      </ul>
      <p>Solving these equations often requires specialized techniques and tools.</p>
      
      <h3>Ordinary Differential Equations (ODEs)</h3>
      <p>An ordinary differential equation (ODE) is an equation containing a function of one independent variable and its derivatives. An example of a first-order ODE is:</p>
      <Equation>
        <span>dy/dx = ky</span>
      </Equation>
      <p>This equation states that the rate of change of y with respect to x is proportional to y itself.</p>
      
      <h3>Partial Differential Equations (PDEs)</h3>
      <p>A partial differential equation (PDE) is an equation involving multiple independent variables, their partial derivatives, and a function of those variables. An example of a PDE is the heat equation:</p>
      <Equation>
        <span>∂u/∂t = α ∇²u</span>
      </Equation>
      <p>This equation describes how heat diffuses through a given region over time.</p>

      <ImageWrapper>
        <img src="https://marvelousmaths-fantasticphysics.blogspot.com/2020/08/differential-equations-classification.html" alt="Differential Equation Example" />
      </ImageWrapper>
      
      <p>The methods for solving ODEs and PDEs vary greatly and can be quite complex. Some common techniques include separation of variables, integrating factors, and numerical methods.</p>
    </PostContent>
  </PostWrapper>
);

export default DifferentialEquations;
