import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlogWrapper = styled.div`
  padding: 2rem;
  text-align: center;
`;

const PostBox = styled.div`
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 1rem;
  margin-bottom: 1rem;
  max-width: 600px;
  margin: 1rem auto;
`;

const PostTitle = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
`;

const PostDate = styled.p`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 0.9rem;
`;

const PostSummary = styled.p`
  color: ${({ theme }) => theme.textColor};
`;

const Blog = () => (
  <BlogWrapper>
    <h1>Blog</h1>
    <PostBox>
      <Link to="/blog/TypesOfDataStructuresTrees">
        <PostTitle>Types of Data Structures Trees</PostTitle>
      </Link>
      <PostDate>June 23, 2024 - 5 min read</PostDate>
      <PostSummary>An overview of various types of trees in data structures.</PostSummary>
    </PostBox>
    <PostBox>
      <Link to="/blog/DifferentialEquations">
        <PostTitle>Differential Equations</PostTitle>
      </Link>
      <PostDate>June 22, 2024 - 7 min read</PostDate>
      <PostSummary>An introduction to differential equations and their applications.</PostSummary>
    </PostBox>
  </BlogWrapper>
);

export default Blog;
