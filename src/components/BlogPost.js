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

const BlogPost = ({id, title, date, content }) => (
  <PostWrapper>
    <PostTitle>{title}</PostTitle>
    <PostDate>{date}</PostDate>
    <PostContent>{content}</PostContent>
  </PostWrapper>
);

export default BlogPost;
