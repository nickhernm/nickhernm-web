import React from 'react';
import styled from 'styled-components';

const BlogPostWrapper = styled.section`
  padding: 4rem 2rem;
`;

const PostTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accentColor};
  margin-bottom: 1rem;
`;

const PostDate = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
`;

const PostContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
`;

const BlogPost = ({ title, date, content }) => {
  return (
    <BlogPostWrapper>
      <PostTitle>{title}</PostTitle>
      <PostDate>{date}</PostDate>
      <PostContent>{content}</PostContent>
    </BlogPostWrapper>
  );
};

export default BlogPost;
