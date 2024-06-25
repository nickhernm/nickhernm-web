import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RelatedPostsWrapper = styled.section`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
`;

const RelatedPostsTitle = styled.h3`
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 1rem;
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const PostCard = styled(Link)`
  display: block;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};

  &:hover {
    transform: translateY(-5px);
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: 1rem;
`;

const PostTitle = styled.h4`
  margin: 0 0 0.5rem;
  color: ${({ theme }) => theme.primaryColor};
`;

const PostExcerpt = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

const RelatedPosts = ({ posts }) => (
  <RelatedPostsWrapper>
    <RelatedPostsTitle>Related Posts</RelatedPostsTitle>
    <PostGrid>
      {posts.map(post => (
        <PostCard key={post.id} to={post.link}>
          <PostImage src={post.image} alt={post.title} />
          <PostContent>
            <PostTitle>{post.title}</PostTitle>
            <PostExcerpt>{post.excerpt}</PostExcerpt>
          </PostContent>
        </PostCard>
      ))}
    </PostGrid>
  </RelatedPostsWrapper>
);

export default RelatedPosts;