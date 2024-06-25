import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaThumbtack, FaSearch } from 'react-icons/fa';

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

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 20px;
`;

const SearchIcon = styled(FaSearch)`
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.secondaryColor};
`;

const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  background: none;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PostBox = styled.div`
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
  margin-bottom: 2rem;

  ${props => props.pinned ? `
    display: flex;
    flex-direction: column;
  ` : `
    display: flex;
    flex-direction: row;
  `}

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
  ${props => props.pinned ? `
    width: 100%;
    height: 200px;
  ` : `
    width: 150px;
    height: 150px;
  `}
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: 1rem;
  flex: 1;
`;

const PostTitle = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 0.5rem;
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const PostDate = styled.span``;

const ReadTime = styled.span``;

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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const PageButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  background-color: ${({ active, theme }) => active ? theme.accentColor : theme.backgroundAlt};
  color: ${({ active, theme }) => active ? theme.textAlt : theme.textColor};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accentColorHover};
    color: ${({ theme }) => theme.textAlt};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const blogPosts = [
  {
    id: 1,
    title: "Minimum Cost Path Algorithm",
    date: "2024-06-10",
    summary: "Different ways to solve MCP using algorithms and their complexities.",
    image: "http://stackoverflow.com/questions/13249057/dijkstra-find-shortest-path-in-directed-graph",
    tags: ["Algorithms", "Dynamic Programming", "Computer Science"],
    link: "/blogPost/MCPADA",
    pinned: true
  },
  {
    id: 2,
    title: "Types of Data Structures Trees",
    date: "2024-06-23",
    summary: "An overview of various types of trees in data structures.",
    image: "https://yottagin.com/?p=3423",
    tags: ["Data Structures", "Trees", "Computer Science"],
    link: "/blogPost/TypesOfDataStructuresTrees",
    pinned: false
  },
  {
    id: 3,
    title: "Differential Equations",
    date: "2024-06-22",
    summary: "An introduction to differential equations and their applications.",
    image: "https://www.pplusplus.lima-city.de/femfluid.html",
    tags: ["Mathematics", "Differential Equations", "Physics"],
    link: "/blogPost/DifferentialEquations",
    pinned: false
  },
];

const POSTS_PER_PAGE = 5;

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterClick = (tag) => {
    if (activeFilters.includes(tag)) {
      setActiveFilters(activeFilters.filter(filter => filter !== tag));
    } else {
      setActiveFilters([...activeFilters, tag]);
    }
  };

  const calculateReadTime = (text) => {
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return readTime;
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
    return new Date(b.date) - new Date(a.date);
  });

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  const pageCount = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <BlogWrapper>
      <BlogHeader>
        <BlogTitle>Blog</BlogTitle>
        <SearchBar>
          <SearchIcon />
          <SearchInput 
            type="text" 
            placeholder="Search blog posts..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>
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
        {currentPosts.map(post => (
          <PostBox key={post.id} pinned={post.pinned}>
            {post.pinned && <PinnedIcon />}
            <Link to={post.link}>
              <PostImage src={post.image} alt={post.title} pinned={post.pinned} />
              <PostContent>
                <PostTitle>{post.title}</PostTitle>
                <PostMeta>
                  <PostDate>{new Date(post.date).toLocaleDateString()}</PostDate>
                  <ReadTime>{calculateReadTime(post.summary)} min read</ReadTime>
                </PostMeta>
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
      <Pagination>
        <PageButton onClick={() => paginate(1)} disabled={currentPage === 1}>
          First
        </PageButton>
        <PageButton onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </PageButton>
        {pageNumbers.map(number => (
          <PageButton key={number} active={currentPage === number} onClick={() => paginate(number)}>
            {number}
          </PageButton>
        ))}
        <PageButton onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageCount}>
          Next
        </PageButton>
        <PageButton onClick={() => paginate(pageCount)} disabled={currentPage === pageCount}>
          Last
        </PageButton>
      </Pagination>
    </BlogWrapper>
  );
};

export default Blog;