import React from 'react';
import styled from 'styled-components';
import Latex from 'react-latex-next';

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
  p {
    margin-bottom: 1rem;
  }
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

const Sidebar = styled.div`
  position: fixed;
  left: 20px;
  top: 100px;
  width: 200px;
  background: ${({ theme }) => theme.backgroundSecondary};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SidebarItem = styled.div`
  margin: 0.5rem 0;
  a {
    color: ${({ theme }) => theme.primaryColor};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const DifferentialEquations = () => (
  <div>
    <Sidebar>
      <h3>Contents</h3>
      <SidebarItem><a href="#intro">Introduction</a></SidebarItem>
      <SidebarItem><a href="#ode">Ordinary Differential Equations</a></SidebarItem>
      <SidebarItem><a href="#pde">Partial Differential Equations</a></SidebarItem>
      <SidebarItem><a href="#methods">Solving Methods</a></SidebarItem>
    </Sidebar>
    <PostWrapper>
      <PostTitle>Differential Equations</PostTitle>
      <PostDate>June 22, 2024</PostDate>
      <PostContent>
        <p id="intro">Differential equations are mathematical equations that involve derivatives of a function. They are used to describe various phenomena in fields such as physics, engineering, and economics.</p>
        <p>There are two main types of differential equations:</p>
        <ul>
          <li>Ordinary Differential Equations (ODEs)</li>
          <li>Partial Differential Equations (PDEs)</li>
        </ul>
        <p>Solving these equations often requires specialized techniques and tools.</p>
        
        <h3 id="ode">Ordinary Differential Equations (ODEs)</h3>
        <p>An ordinary differential equation (ODE) is an equation containing a function of one independent variable and its derivatives. An example of a first-order ODE is:</p>
        <Equation>
          <Latex>{`$$\\frac{dy}{dx} = ky$$`}</Latex>
        </Equation>
        <p>This equation states that the rate of change of y with respect to x is proportional to y itself.</p>
        <p>Another example of an ODE is the second-order linear differential equation:</p>
        <Equation>
          <Latex>{`$$\\frac{d^2y}{dx^2} + p(x)\\frac{dy}{dx} + q(x)y = g(x)$$`}</Latex>
        </Equation>
        <p>This type of equation appears frequently in physics, for example, in the analysis of mechanical vibrations and electrical circuits.</p>
        
        <h3 id="pde">Partial Differential Equations (PDEs)</h3>
        <p>A partial differential equation (PDE) is an equation involving multiple independent variables, their partial derivatives, and a function of those variables. An example of a PDE is the heat equation:</p>
        <Equation>
          <Latex>{`$$\\frac{\\partial u}{\\partial t} = \\alpha \\nabla^2 u$$`}</Latex>
        </Equation>
        <p>This equation describes how heat diffuses through a given region over time.</p>
        <p>Another common PDE is the wave equation:</p>
        <Equation>
          <Latex>{`$$\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\nabla^2 u$$`}</Latex>
        </Equation>
        <p>This equation is used to describe the propagation of waves, such as sound or light waves, in a medium.</p>

        <ImageWrapper>
          <img src="https://marvelousmaths-fantasticphysics.blogspot.com/2020/08/differential-equations-classification.html" alt="Differential Equation Example" />
        </ImageWrapper>
        
        <h3 id="methods">Solving Methods</h3>
        <p>The methods for solving ODEs and PDEs vary greatly and can be quite complex. Some common techniques include:</p>
        <ul>
          <li>Separation of variables</li>
          <li>Integrating factors</li>
          <li>Numerical methods</li>
        </ul>
        <p>Separation of variables involves rewriting the equation so that each variable and its differential are on opposite sides of the equation, then integrating both sides. Integrating factors are used to solve linear first-order ODEs by multiplying through by a function that simplifies the equation. Numerical methods, such as the finite difference method or finite element method, approximate solutions by discretizing the variables and solving a system of algebraic equations.</p>
      </PostContent>
    </PostWrapper>
  </div>
);

export default DifferentialEquations;
