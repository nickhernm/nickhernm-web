import React from 'react';
import styled from 'styled-components';
import Latex from 'react-latex-next';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaDownload } from 'react-icons/fa';

const PostWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const PostTitle = styled.h1`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const PostDate = styled.p`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 0.9rem;
  margin-bottom: 2rem;
`;

const DownloadButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accentColorHover};
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const SubSection = styled.div`
  margin-bottom: 1.5rem;
`;

const SubSectionTitle = styled.h3`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const CodeBlock = styled(SyntaxHighlighter)`
  margin-bottom: 1rem;
`;

const MCPADA = () => {
  return (
    <PostWrapper>
      <PostTitle>Minimum Cost Path Algorithm: A Branch and Bound Approach</PostTitle>
      <PostDate>June 23, 2024 - 15 min read</PostDate>
      
      <DownloadButtons>
        <DownloadButton href="https://drive.google.com/uc?export=download&id=118yr1jKFny2R5beij-XspOGbtvkRpJ9J" target="_blank" rel="noopener noreferrer">
          <FaDownload /> Download PDF (English)
        </DownloadButton>
        <DownloadButton href="https://drive.google.com/uc?export=download&id=1jd_fZsSDZAhW8Aa2GIhxy7nJC4UXmAbd" target="_blank" rel="noopener noreferrer">
          <FaDownload /> Descargar PDF (Español)
        </DownloadButton>
      </DownloadButtons>

      <Section>
        <SectionTitle>1. Introduction</SectionTitle>
        <Paragraph>
          In this work, we present a branch and bound algorithm designed to solve the minimum path problem in a map represented as a cost matrix. Our objective is to find the least costly path from the initial position (0, 0) to the final position (n-1, m-1) of the map, where n and m are the dimensions of the map.
        </Paragraph>
        <Paragraph>
          The algorithm employs a search strategy based on the expansion of promising nodes and the pruning of non-promising nodes. We have implemented various techniques to enhance the efficiency of the algorithm, including the use of pessimistic and optimistic bounds, and the implementation of pruning mechanisms.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Data Structures</SectionTitle>
        
        <SubSection>
          <SubSectionTitle>2.1 Node</SubSectionTitle>
          <Paragraph>
            In our branch and bound algorithm, a node represents a possible state within the problem's search space. Each node contains information reflecting a potential partial solution to the problem and is a point from which the algorithm can continue exploring more complete solutions.
          </Paragraph>
          <Paragraph>
            We represent a node as a tuple containing the following elements:
          </Paragraph>
          <ul>
            <li>row: Row of the node in the map</li>
            <li>col: Column of the node in the map</li>
            <li>cost: Accumulated cost to reach the node</li>
            <li>heuristic: Optimistic bound of the node</li>
            <li>pessimistic_bound: Pessimistic bound of the node</li>
            <li>path: Vector storing the path of moves to reach the node</li>
          </ul>
        </SubSection>
        
        <SubSection>
          <SubSectionTitle>2.2 Live Nodes List</SubSectionTitle>
          <Paragraph>
            We use a priority queue to store live nodes. Nodes in the priority queue are ordered according to their optimistic bound, ensuring that the node with the lowest optimistic bound is at the top of the queue. This is crucial for the efficient functioning of the branch and bound algorithm, as it allows us to explore the most promising nodes first.
          </Paragraph>
          <Paragraph>
            Here's how we implement the priority queue:
          </Paragraph>
          <CodeBlock language="cpp" style={dracula}>
            {`
// Node type definition using a tuple
using Node = std::tuple<int, int, int, int, int, std::vector<int>>;

// Priority queue comparator class
class CompareNode {
public:
    bool operator()(const Node& a, const Node& b) {
        return std::get<3>(a) > std::get<3>(b);
    }
};
            `}
          </CodeBlock>
        </SubSection>

        <SubSection>
          <SubSectionTitle>2.3 Memoization</SubSectionTitle>
          <Paragraph>
            To improve the algorithm's performance, we use a memoization matrix to store the minimum costs found for each position on the map. This avoids recalculating costs for nodes that have already been processed, thus reducing execution time.
          </Paragraph>
          <CodeBlock language="cpp" style={dracula}>
            {`
vector<vector<int>> precalculate_pessimistic_bound(...) {
    vector<vector<int>> memo(n, vector<int>(m, MAX_COST));
    memo[n-1][m-1] = mapa[n-1][m-1];
    for (int i = n-1; i >= 0; --i) {
        for (int j = m-1; j >= 0; --j) {
            if (i == n-1 && j == m-1) continue;
            int min_cost = MAX_COST;
            for (int k = 0; k < 3; ++k) {
                int ni = i + dx[k], nj = j + dy[k];
                if (ni >= 0 && ni < n && nj >= 0 && nj < m) {
                    min_cost = min(min_cost, memo[ni][nj]);
                }
            }
            memo[i][j] = min_cost + mapa[i][j];
        }
    }
    return memo;
}
            `}
          </CodeBlock>
        </SubSection>
      </Section>

      <Section>
        <SectionTitle>3. Pruning Mechanisms</SectionTitle>
        <Paragraph>
          Pruning is a crucial technique in our branch and bound algorithm. It helps reduce the search space by eliminating nodes that cannot lead to an optimal solution, significantly improving the efficiency of the algorithm.
        </Paragraph>
        
        <SubSection>
          <SubSectionTitle>3.1 Pruning Non-Feasible Nodes</SubSectionTitle>
          <Paragraph>
            We eliminate nodes that cannot be part of an optimal solution due to problem constraints or because their accumulated cost already exceeds that of a known solution.
          </Paragraph>
          <CodeBlock language="cpp" style={dracula}>
            {`
if (row < 0 || row >= n || col < 0 || col >= m) {
    n_unfeasible++;
    continue;
}
if (cost >= best_costs[row][col]) {
    n_not_promising++;
    continue;
}
            `}
          </CodeBlock>
        </SubSection>
        
        <SubSection>
          <SubSectionTitle>3.2 Pruning Non-Promising Nodes</SubSectionTitle>
          <Paragraph>
            A node is considered non-promising if its optimistic bound is greater than or equal to the best cost found so far. In this case, the node is discarded and not expanded.
          </Paragraph>
          <CodeBlock language="cpp" style={dracula}>
            {`
if (heuristic >= bestCost) {
    n_promising_but_discarded++;
    continue;
}
            `}
          </CodeBlock>
        </SubSection>
      </Section>

      <Section>
        <SectionTitle>4. Pessimistic and Optimistic Bounds</SectionTitle>
        <Paragraph>
          Pessimistic and optimistic bounds are fundamental tools in our branch and bound algorithm. They provide lower and upper limits to the cost of the optimal solution, helping to identify and discard non-promising nodes more efficiently.
        </Paragraph>
        
        <SubSection>
          <SubSectionTitle>4.1 Pessimistic Bound</SubSectionTitle>
          <Paragraph>
            The pessimistic bound is calculated using dynamic programming. It provides a lower bound on the cost to reach the final node from any given node.
          </Paragraph>
        </SubSection>
        
        <SubSection>
          <SubSectionTitle>4.2 Optimistic Bound</SubSectionTitle>
          <Paragraph>
            The optimistic bound is calculated using vectors of minimums by rows and columns. It provides an upper bound on the cost to reach the final node from any given node.
          </Paragraph>
        </SubSection>
      </Section>

      <Section>
        <SectionTitle>5. Comparative Study of Different Search Strategies</SectionTitle>
        <Paragraph>
          We compared our branch and bound algorithm with other search strategies, including backtracking and a greedy algorithm. Our results show that the branch and bound strategy significantly outperforms the others in terms of execution time and efficiency.
        </Paragraph>
        
        <SubSection>
          <SubSectionTitle>Execution Times Comparison</SubSectionTitle>
          <table>
            <thead>
              <tr>
                <th>Map</th>
                <th>Backtracking (ms)</th>
                <th>Greedy (ms)</th>
                <th>Branch and Bound (ms)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001.map</td>
                <td>25.34</td>
                <td>15.21</td>
                <td>0.017</td>
              </tr>
              <tr>
                <td>002.map</td>
                <td>48.56</td>
                <td>35.87</td>
                <td>0.09</td>
              </tr>
              <tr>
                <td>003.map</td>
                <td>67.67</td>
                <td>55.78</td>
                <td>0.037</td>
              </tr>
              <tr>
                <td>004.map</td>
                <td>33.45</td>
                <td>25.34</td>
                <td>0.028</td>
              </tr>
            </tbody>
          </table>
        </SubSection>
      </Section>

      <Section>
        <SectionTitle>6. Conclusions</SectionTitle>
        <Paragraph>
          Our branch and bound algorithm has proven to be highly efficient in solving the minimum path problem. The use of pessimistic and optimistic bounds, along with effective pruning mechanisms, has allowed us to significantly reduce the search space and improve execution times compared to other strategies.
        </Paragraph>
        <Paragraph>
          While the algorithm performs excellently on the test maps, there's still room for improvement, particularly for very large maps. Future work could focus on parallelizing the algorithm to further reduce execution times on large-scale problems.
        </Paragraph>
      </Section>
    </PostWrapper>
  );
};

export default MCPADA;