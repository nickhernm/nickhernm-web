import React from 'react';
import styled from 'styled-components';

const BlogWrapper = styled.section`
  padding: 4rem 2rem;
`;

const Post = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 1rem 0;
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.accentColor};
`;

const PostSummary = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Blog = () => {
  const posts = [
    {
      title: "First Blog Post",
      summary: "This is a summary of the first blog post. It's an introduction to the blog and covers the basics."
    },
    {
      title: "Second Blog Post",
      summary: "This is a summary of the second blog post. It dives deeper into a specific topic and provides more detailed information."
    }
  ];

  return (
    <BlogWrapper id="blog">
      {posts.map((post, index) => (
        <Post key={index}>
          <PostTitle>{post.title}</PostTitle>
          <PostSummary>{post.summary}</PostSummary>
        </Post>
      ))}
    </BlogWrapper>
  );
};

export default Blog;
