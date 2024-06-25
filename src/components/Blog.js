import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaThumbtack } from 'react-icons/fa';

const BlogWrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accentColor};
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 1rem 0;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ active, theme }) => active ? theme.accentColor : theme.backgroundAlt};
  color: ${({ active, theme }) => active ? theme.textAlt : theme.textColor};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accentColor};
    color: ${({ theme }) => theme.textAlt};
  }
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const PostBox = styled.div`
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PinnedIcon = styled(FaThumbtack)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${({ theme }) => theme.accentColor};
  font-size: 1.2rem;
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: 1rem;
`;

const PostTitle = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 0.5rem;
`;

const PostDate = styled.p`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const PostSummary = styled.p`
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 1rem;
`;

const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.textAlt};
  padding: 0.2rem 0.5rem;
  border-radius: 15px;
  font-size: 0.8rem;
`;

const blogPosts = [
  {
    id: 1,
    title: "Minimum Cost Path Algorithm",
    date: "June 10, 2024",
    summary: "Different ways to solve MCP using algorithms and their complexities.",
    image: "https://example.com/mcp-image.jpg",
    tags: ["Algorithms", "Dynamic Programming", "Computer Science"],
    link: "/blog/MCPADA",
    pinned: true
  },
  {
    id: 2,
    title: "Types of Data Structures Trees",
    date: "June 23, 2024",
    summary: "An overview of various types of trees in data structures.",
    image: "https://example.com/trees-image.jpg",
    tags: ["Data Structures", "Trees", "Computer Science"],
    link: "/blog/TypesOfDataStructuresTrees",
    pinned: false
  },
  {
    id: 3,
    title: "Differential Equations",
    date: "June 22, 2024",
    summary: "An introduction to differential equations and their applications.",
    image: "https://example.com/differential-equations-image.jpg",
    tags: ["Mathematics", "Differential Equations", "Physics"],
    link: "/blog/DifferentialEquations",
    pinned: false
  },
  // Add more blog posts here
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterClick = (tag) => {
    if (activeFilters.includes(tag)) {
      setActiveFilters(activeFilters.filter(filter => filter !== tag));
    } else {
      setActiveFilters([...activeFilters, tag]);
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilters = activeFilters.length === 0 || activeFilters.some(filter => post.tags.includes(filter));
    return matchesSearch && matchesFilters;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return 0;
  });

  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  return (
    <BlogWrapper>
      <BlogHeader>
        <BlogTitle>Blog</BlogTitle>
        <SearchBar 
          type="text" 
          placeholder="Search blog posts..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FilterContainer>
          {allTags.map(tag => (
            <FilterButton 
              key={tag} 
              active={activeFilters.includes(tag)}
              onClick={() => handleFilterClick(tag)}
            >
              {tag}
            </FilterButton>
          ))}
        </FilterContainer>
      </BlogHeader>
      <PostGrid>
        {sortedPosts.map(post => (
          <PostBox key={post.id}>
            {post.pinned && <PinnedIcon />}
            <Link to={post.link}>
              <PostImage src={post.image} alt={post.title} />
              <PostContent>
                <PostTitle>{post.title}</PostTitle>
                <PostDate>{post.date}</PostDate>
                <PostSummary>{post.summary}</PostSummary>
                <PostTags>
                  {post.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </PostTags>
              </PostContent>
            </Link>
          </PostBox>
        ))}
      </PostGrid>
    </BlogWrapper>
  );
};

export default Blog;