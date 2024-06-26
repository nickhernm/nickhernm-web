import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaThumbtack, FaSearch, FaClock } from 'react-icons/fa';

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
  justify-content: center;
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
  flex-wrap: wrap;
  gap: 2rem;
`;

const PostBox = styled.div`
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: ${props => props.pinned ? '100%' : 'calc(50% - 1rem)'};
  display: flex;
  flex-direction: ${props => props.pinned ? 'row' : 'column'};

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

const PostImage = styled.div`
  width: ${props => props.pinned ? '40%' : '40%'};
  height: ${props => props.pinned ? '300px' : '200px'};
  background-image: url(${props => props.src || '/path/to/default-image.jpg'});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const PostContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PostTitle = styled.h2`
  font-size: ${props => props.pinned ? '1.8rem' : '1.4rem'};
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 0.5rem;
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  svg {
    margin-right: 0.3rem;
  }
`;

const PostDate = styled.span`
  font-style: italic;
`;

const PostSummary = styled.p`
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 1rem;
`;

const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.accentColor};
  font-size: 0.9rem;
  font-weight: 500;

  &:not(:last-child)::after {
    content: "·";
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.textColor};
  }
`;

const PinnedIcon = styled(FaThumbtack)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${({ theme }) => theme.accentColor};
  font-size: 1.2rem;
  z-index: 1;
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

const NoResultsMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.secondaryColor};
  margin-top: 2rem;
`;

const blogPosts = [
  {
    id: 1,
    title: "Minimum Cost Path Algorithm",
    date: "2024-06-10",
    summary: "Different ways to solve MCP using algorithms and their complexities.",
    image: "https://subscription.packtpub.com/book/application_development/9781786465153/8/ch08lvl1sec57/minimum-cost-spanning-tree",
    tags: ["Algorithms", "Dynamic Programming", "Computer Science"],
    link: "/blogPost/MCPADA",
    pinned: true
  },
  {
    id: 2,
    title: "Types of Data Structures Trees",
    date: "2024-06-23",
    summary: "An overview of various types of trees in data structures.",
    image: "https://www.sampleassignment.com/blog/advanced-data-structures",
    tags: ["Data Structures", "Trees", "Computer Science"],
    link: "/blogPost/TypesOfDataStructuresTrees",
    pinned: false
  },
  {
    id: 3,
    title: "Differential Equations",
    date: "2024-06-22",
    summary: "An introduction to differential equations and their applications.",
    image: "https://www.qwant.com/?client=brz-moz&q=differential+equations&t=images&license=public&o=0%3A5144475AD76ED86223981E9BE56F66BCA7DC35C6",
    tags: ["Mathematics", "Differential Equations", "Physics"],
    link: "/blogPost/DifferentialEquations",
    pinned: false
  },
  {
    id: 4,
    title: "Understanding Big O Notation and Algorithm Complexity",
    date: "2024-08-22",
    summary: "A comprehensive guide to Big O notation, algorithm complexity analysis, and its importance in computer science.",
    image: "",
    tags: ["Computer Science", "Algorithms", "Complexity Analysis"],
    link: "/blogPost/BigONotation",
    pinned: true
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

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

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
        {currentPosts.length > 0 ? (
          currentPosts.map(post => (
            <PostBox key={post.id} pinned={post.pinned}>
              
              {post.pinned && <PinnedIcon />}
              <PostImage src={post.image} alt=""/>
              <PostContent>
                <div>
                <Link to={post.link}>
                  <PostTitle pinned={post.pinned}>{post.title}</PostTitle>
                  <PostMeta>
                    <MetaItem>
                      <PostDate>{formatDate(post.date)}</PostDate>
                    </MetaItem>
                    <MetaItem>
                      <FaClock />
                      {calculateReadTime(post.summary)} min read
                    </MetaItem>
                  </PostMeta>
                  <PostSummary>{post.summary}</PostSummary>
                  <PostTags>
                    {post.tags.map((tag, index) => (
                      <Tag key={index}>#{tag}</Tag>
                    ))}
                  </PostTags>
                  </Link>
                </div>
              </PostContent>
              
            </PostBox>
          ))
        ) : (
          <NoResultsMessage>No posts found matching your search criteria.</NoResultsMessage>
        )}
      </PostGrid>
      {filteredPosts.length > POSTS_PER_PAGE && (
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
      )}
    </BlogWrapper>
  );
};

export default Blog;