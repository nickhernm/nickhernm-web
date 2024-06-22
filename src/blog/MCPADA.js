// src/blog/MCP-ADA.js

import React from 'react';
import styled from 'styled-components';
import Latex from 'react-latex-next';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Equation = styled.div`
  background: ${({ theme }) => theme.backgroundSecondary};
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  background: ${({ theme }) => theme.backgroundSecondary};
  padding: 1rem;
  border-radius: 8px;
  max-height: 80%;
  overflow-y: auto;
`;

const SidebarItem = styled.div`
  margin: 0.5rem 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const MCPADA = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PostWrapper>
      <Sidebar>
        <SidebarItem onClick={() => scrollToSection('introduction')}>Introduction</SidebarItem>
        <SidebarItem onClick={() => scrollToSection('dataStructures')}>Data Structures</SidebarItem>
        <SidebarItem onClick={() => scrollToSection('branching')}>Branching Mechanisms</SidebarItem>
        <SidebarItem onClick={() => scrollToSection('bounds')}>Bounds</SidebarItem>
        <SidebarItem onClick={() => scrollToSection('strategies')}>Search Strategies</SidebarItem>
        <SidebarItem onClick={() => scrollToSection('executionTimes')}>Execution Times</SidebarItem>
        <SidebarItem onClick={() => scrollToSection('conclusions')}>Conclusions</SidebarItem>
      </Sidebar>
      <PostTitle>Final Practice MCP</PostTitle>
      <PostDate>June 23, 2024</PostDate>
      <PostContent>
        <Section id="introduction">
          <h2>Introduction</h2>
          <p>
            This work implements a <strong>branch and bound algorithm</strong> to solve the <strong>minimum path problem</strong> on a cost map represented as a matrix. The goal is to find the path of least cost from the initial position (0, 0) to the final position (n-1, m-1) of the map, where n and m are the dimensions of the map.
          </p>
          <p>
            The algorithm uses a search strategy based on the expansion of promising nodes and pruning of non-promising nodes. Various techniques have been employed to improve the algorithm's efficiency, such as the use of <strong>pessimistic and optimistic bounds</strong> and the implementation of pruning mechanisms.
          </p>
        </Section>

        <Section id="dataStructures">
          <h2>Data Structures</h2>
          <h3>Node</h3>
          <p>
            In branch and bound algorithms, a node represents a possible state within the problem's search space. Each node contains information reflecting a potential partial solution to the problem and is a potential point from which the algorithm can continue exploring more complete solutions.
          </p>
          <p>
            In this algorithm implementation, a node is represented by a tuple containing the following elements:
          </p>
          <ul>
            <li><Latex>{`\\texttt{row}`}</Latex>: Row of the node in the map.</li>
            <li><Latex>{`\\texttt{col}`}</Latex>: Column of the node in the map.</li>
            <li><Latex>{`\\texttt{cost}`}</Latex>: Accumulated cost to reach the node.</li>
            <li><Latex>{`\\texttt{heuristic}`}</Latex>: Optimistic bound of the node.</li>
            <li><Latex>{`\\texttt{pessimistic\\_bound}`}</Latex>: Pessimistic bound of the node.</li>
            <li><Latex>{`\\texttt{path}`}</Latex>: Vector storing the path of moves to reach the node.</li>
          </ul>
          <h3>Priority Queue</h3>
          <p>
            A priority queue is used to store live nodes. Nodes are ordered in the priority queue according to their optimistic bound, ensuring that the node with the lowest optimistic bound is at the top of the queue. This is crucial for the efficient functioning of the branch and bound algorithm, as it allows us to explore the most promising nodes first.
          </p>
          <p>
            The priority queue is a suitable data structure for this problem as it allows efficient extraction of the node with the lowest optimistic bound, essential for the branch and bound algorithm.
          </p>

          <h3>Implementation</h3>
          <p>The following code snippet shows how the priority queue is defined and how nodes are used in the algorithm:</p>
          <SyntaxHighlighter language="cpp" style={dracula}>
            {`// Node type definition using a tuple
using Node = std::tuple<int, int, int, int, int, std::vector<int>>;

// Priority queue comparator class
class CompareNode {
public:
    bool operator()(const Node& a, const Node& b) {
        return std::get<3>(a) > std::get<3>(b);
    }
};`}
          </SyntaxHighlighter>
          <p>
            In this code, each node is represented as a tuple containing the row, column, cost, optimistic bound, pessimistic bound, and move vector. The <Latex>{`\\texttt{CompareNode}`}</Latex> class is used to compare nodes in the priority queue according to their optimistic bound.
          </p>
        </Section>

        <Section id="branching">
          <h2>Branching Mechanisms</h2>
          <h3>Non-Feasible Node Pruning</h3>
          <p>
            Nodes that cannot form part of an optimal solution due to problem constraints or because their accumulated cost already exceeds that of a known solution are eliminated.
          </p>

          <h3>Promising Node Pruning</h3>
          <p>
            A node is considered non-promising if its optimistic bound is greater than or equal to the best cost found so far. In this case, the node is discarded and not expanded.
          </p>
        </Section>

        <Section id="bounds">
          <h2>Pessimistic and Optimistic Bounds</h2>
          <h3>Initial Pessimistic Bound</h3>
          <p>
            The initial pessimistic bound is calculated using dynamic programming. The memoization matrix is initialized with the maximum cost for all positions, except the final position (n-1, m-1), which is initialized with the map cost at that position.
          </p>

          <h3>Optimistic Bound</h3>
          <p>
            The optimistic bound is calculated using vectors of minimums by rows and columns. This bound helps identify and discard non-promising paths quickly.
          </p>
        </Section>

        <Section id="strategies">
          <h2>Search Strategies</h2>
          <h3>Backtracking</h3>
          <p>
            This strategy explores all possible solutions and backtracks when it determines a solution is not viable.
          </p>

          <h3>Greedy Algorithm</h3>
          <p>
            This algorithm makes locally optimal decisions at each step in the hope of finding a globally optimal solution.
          </p>

          <h3>Branch and Bound</h3>
          <p>
            This strategy expands promising nodes using a priority queue ordered by the optimistic bound, exploring the most promising nodes first and pruning non-promising nodes.
          </p>
        </Section>

        <Section id="executionTimes">
          <h2>Execution Times</h2>
          <table>
            <thead>
              <tr>
                <th>Map</th>
                <th>Time (ms)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001.map</td>
                <td>0.017</td>
              </tr>
              <tr>
                <td>002.map</td>
                <td>0.09</td>
              </tr>
              <tr>
                <td>003.map</td>
                <td>0.037</td>
              </tr>
              <tr>
                <td>004.map</td>
                <td>0.028</td>
              </tr>
            </tbody>
        </table>
        </Section>

        <h2 id="conclusions">Conclusions</h2>
        <p>
          This project developed and analyzed a branch and bound algorithm to solve the minimum path problem in a cost matrix. The implementation was compared to other search strategies like Backtracking and Greedy, showing significant efficiency improvements.
        </p>
        <p>
          The main contributions include the use of promising node expansion, efficient pruning mechanisms, and the utilization of pessimistic and optimistic bounds. The comparison with Backtracking and Greedy algorithms demonstrated the significant performance advantages of the branch and bound approach.
        </p>

        <p>
          The project showed that the branch and bound algorithm is a highly effective method for solving the minimum path problem in a cost matrix, significantly reducing the search space and computational time compared to other methods.
        </p>

        <p>
          Future work could explore the application of parallel processing techniques to further enhance the performance of the algorithm, especially for larger maps.
        </p>
      </PostContent>
    </PostWrapper>
  );
};

export default MCPADA;
