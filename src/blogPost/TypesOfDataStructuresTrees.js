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

const TreeTypes = () => (
  <div>
    <PostWrapper>
      <PostTitle>Types of Data Structures Trees</PostTitle>
      <PostDate>June 23, 2024</PostDate>
      <PostContent>
        <p id="intro">Data structures are a crucial part of programming. One of the most important types of data structures is trees. Here, we will discuss several types of trees:</p>
        <ul>
          <li>Binary Trees</li>
          <li>Binary Search Trees</li>
          <li>AVL Trees</li>
          <li>Red-Black Trees</li>
          <li>B-Trees</li>
          <li>Heaps</li>
        </ul>
        <p>Each of these trees has its own use cases and properties that make them unique.</p>

        <h3 id="binary">Binary Trees</h3>
        <p>A binary tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child. It is used in various searching and sorting algorithms.</p>
        <Equation>
          <Latex>{`$$T(n) = T(\\frac{n}{2}) + O(1)$$`}</Latex>
        </Equation>
        <p>This recurrence relation describes the time complexity of a binary tree search.</p>

        <h3 id="bst">Binary Search Trees (BST)</h3>
        <p>Binary Search Trees are a type of binary tree where the nodes are arranged in order: for each node, all elements in the left subtree are less, and all elements in the right subtree are greater.</p>
        <Equation>
          <Latex>{`$$T(n) = O(\\log n)$$`}</Latex>
        </Equation>
        <p>This denotes the average-case time complexity for searching in a BST.</p>

        <h3 id="avl">AVL Trees</h3>
        <p>AVL trees are self-balancing binary search trees. In an AVL tree, the heights of the two child subtrees of any node differ by at most one. If at any time they differ by more than one, rebalancing is performed to restore this property.</p>

        <h3 id="rbt">Red-Black Trees</h3>
        <p>Red-Black Trees are a type of self-balancing binary search tree. Each node stores an extra bit representing "color" ("red" or "black"), used to ensure the tree remains balanced during insertions and deletions.</p>

        <h3 id="btree">B-Trees</h3>
        <p>B-Trees are self-balancing tree data structures that maintain sorted data and allow searches, sequential access, insertions, and deletions in logarithmic time. They are commonly used in databases and file systems.</p>

        <h3 id="heaps">Heaps</h3>
        <p>Heaps are a special type of binary tree where the parent node is always greater (max-heap) or smaller (min-heap) than the child nodes. Heaps are commonly used to implement priority queues.</p>

        <ImageWrapper>
          <img src="https://kkjavatutorials.com/introduction-to-tree-data-structure/" alt="Tree Data Structures" />
        </ImageWrapper>
        
        <p>Understanding these tree structures and their properties is essential for solving complex computational problems efficiently.</p>
      </PostContent>
    </PostWrapper>
  </div>
);

export default TreeTypes;
