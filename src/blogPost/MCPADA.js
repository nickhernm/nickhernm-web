import React from 'react';
import styled from 'styled-components';
import Latex from 'react-latex-next';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { FaDownload } from 'react-icons/fa';
import RelatedPosts from '../components/RelatedPosts';
import Comments from '../components/Comments';

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

const LatexWrapper = styled.div`
  margin: 1rem 0;
  overflow-x: auto;
`;

const HighlightedText = styled.span`
  background-color: ${({ theme }) => theme.accentColor}40;
  padding: 0 4px;
  border-radius: 4px;
`;

const MCPADA = ({ relatedPosts, postId }) => {
  return (
    <PostWrapper>
      <PostTitle>Minimum Cost Path Algorithm: A Branch and Bound Approach</PostTitle>
      <PostDate>June 23, 2024 - 30 min read</PostDate>
      <DownloadButtons>
        <DownloadButton href="https://drive.google.com/uc?export=download&id=118yr1jKFny2R5beij-XspOGbtvkRpJ9J" target="_blank" rel="noopener noreferrer">
          <FaDownload /> Download PDF (English)
        </DownloadButton>
        <DownloadButton href="https://drive.google.com/uc?export=download&id=1jd_fZsSDZAhW8Aa2GIhxy7nJC4UXmAbd" target="_blank" rel="noopener noreferrer">
          <FaDownload /> Download PDF (Spanish)
        </DownloadButton>
      </DownloadButtons>
      <Section>
        <SectionTitle>1. Introduction</SectionTitle>
        <Paragraph>
          The Minimum Cost Path (MCP) problem is a fundamental challenge in computer science and operations research. Given a cost matrix representing a map, the goal is to find the path from the top-left corner to the bottom-right corner that minimizes the total cost. This problem has numerous real-world applications, including route planning, network routing, and image processing.
        </Paragraph>
        <Paragraph>
          In this work, we present a sophisticated <HighlightedText>branch and bound algorithm</HighlightedText> designed to solve the MCP problem efficiently. Our approach leverages advanced pruning techniques, optimistic and pessimistic bounds, and careful implementation to achieve significant performance improvements over traditional methods.
        </Paragraph>
        <Paragraph>
          The algorithm employs a search strategy based on the <HighlightedText>expansion of promising nodes</HighlightedText> and the <HighlightedText>pruning of non-promising nodes</HighlightedText>. We have implemented various techniques to enhance the efficiency of the algorithm, including the use of pessimistic and optimistic bounds, and the implementation of pruning mechanisms.
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
            <li><HighlightedText>row</HighlightedText>: Row of the node in the map</li>
            <li><HighlightedText>col</HighlightedText>: Column of the node in the map</li>
            <li><HighlightedText>cost</HighlightedText>: Accumulated cost to reach the node</li>
            <li><HighlightedText>heuristic</HighlightedText>: Optimistic bound of the node</li>
            <li><HighlightedText>pessimistic_bound</HighlightedText>: Pessimistic bound of the node</li>
            <li><HighlightedText>path</HighlightedText>: Vector storing the path of moves to reach the node</li>
          </ul>
        </SubSection>
        
        <SubSection>
          <SubSectionTitle>2.2 Live Nodes List</SubSectionTitle>
          <Paragraph>
            We use a <HighlightedText>priority queue</HighlightedText> to store live nodes. Nodes in the priority queue are ordered according to their optimistic bound, ensuring that the node with the lowest optimistic bound is at the top of the queue. This is crucial for the efficient functioning of the branch and bound algorithm, as it allows us to explore the most promising nodes first.
          </Paragraph>
          <Paragraph>
            Here's how we implement the priority queue:
          </Paragraph>
          <CodeBlock language="cpp">
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

// Priority queue declaration
std::priority_queue<Node, std::vector<Node>, CompareNode> pq;
            `}
          </CodeBlock>
          <Paragraph>
            The complexity of operations with the priority queue is as follows:
          </Paragraph>
          <LatexWrapper>
            <Latex>{'$O(\\log n)$ for both insertion and extraction, where $n$ is the number of nodes in the queue.'}</Latex>
          </LatexWrapper>
          <Paragraph>
            This efficient performance is crucial for maintaining the algorithm's overall efficiency, especially when dealing with large maps and complex path configurations.
          </Paragraph>
        </SubSection>

        <SubSection>
          <SubSectionTitle>2.3 Memoization</SubSectionTitle>
          <Paragraph>
            To improve the algorithm's performance, we use a <HighlightedText>memoization matrix</HighlightedText> to store the minimum costs found for each position on the map. This avoids recalculating costs for nodes that have already been processed, thus reducing execution time.
          </Paragraph>
          <CodeBlock language="cpp">
            {`
vector<vector<int>> precalculate_pessimistic_bound(const vector<vector<int>>& mapa, int n, int m) {
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
          <Paragraph>
            The time complexity of this memoization process is:
          </Paragraph>
          <LatexWrapper>
            <Latex>{'$O(nm)$, where $n$ and $m$ are the dimensions of the map.'}</Latex>
          </LatexWrapper>
          <Paragraph>
            This pre-computation step significantly reduces the overall time complexity of the algorithm by avoiding redundant calculations during the main search process.
          </Paragraph>
        </SubSection>
      </Section>
      <Section>
        <SectionTitle>3. Pruning Mechanisms</SectionTitle>
        <Paragraph>
          <HighlightedText>Pruning</HighlightedText> is a crucial technique in our branch and bound algorithm. It helps reduce the search space by eliminating nodes that cannot lead to an optimal solution, significantly improving the efficiency of the algorithm.
        </Paragraph>
        
        <SubSection>
          <SubSectionTitle>3.1 Pruning Non-Feasible Nodes</SubSectionTitle>
          <Paragraph>
            We eliminate nodes that cannot be part of an optimal solution due to problem constraints or because their accumulated cost already exceeds that of a known solution.
          </Paragraph>
          <CodeBlock language="cpp">
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
          <Paragraph>
            The time complexity of this pruning step is O(1) for each node, as it involves only a few comparisons.
          </Paragraph>
        </SubSection>
        
        <SubSection>
          <SubSectionTitle>3.2 Pruning Non-Promising Nodes</SubSectionTitle>
          <Paragraph>
            A node is considered <HighlightedText>non-promising</HighlightedText> if its optimistic bound is greater than or equal to the best cost found so far. In this case, the node is discarded and not expanded.
          </Paragraph>
          <CodeBlock language="cpp">
            {`
if (heuristic >= bestCost) {
    n_promising_but_discarded++;
    continue;
}
            `}
          </CodeBlock>
          <Paragraph>
            The time complexity of this pruning step is also O(1) for each node.
          </Paragraph>
        </SubSection>
        <Paragraph>
          These pruning mechanisms significantly reduce the number of nodes explored, leading to substantial improvements in the algorithm's efficiency, especially for large and complex maps.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>4. Pessimistic and Optimistic Bounds</SectionTitle>
        <Paragraph>
          <HighlightedText>Pessimistic and optimistic bounds</HighlightedText> are fundamental tools in our branch and bound algorithm. They provide lower and upper limits to the cost of the optimal solution, helping to identify and discard non-promising nodes more efficiently.
        </Paragraph>
        
        <SubSection>
          <SubSectionTitle>4.1 Pessimistic Bound</SubSectionTitle>
          <Paragraph>
            The <HighlightedText>pessimistic bound</HighlightedText> is calculated using dynamic programming. It provides a lower bound on the cost to reach the final node from any given node.
          </Paragraph>
          <LatexWrapper>
            <Latex>{'$PB(i,j) = \\min_{k \\in \\{0,1,2\\}} \\{PB(i+dx[k], j+dy[k])\\} + map[i][j]$'}</Latex>
          </LatexWrapper>
          <Paragraph>
            Where dx and dy represent the possible moves (right, down-right, down).
          </Paragraph>
        </SubSection>
        
        <SubSection>
          <SubSectionTitle>4.2 Optimistic Bound</SubSectionTitle>
          <Paragraph>
            The <HighlightedText>optimistic bound</HighlightedText> is calculated using vectors of minimums by rows and columns. It provides an upper bound on the cost to reach the final node from any given node.
          </Paragraph>
          <LatexWrapper>
            <Latex>{'$OB(i,j) = \\max\\{\\sum_{k=j+1}^{m-1} min\\_col[k], \\sum_{k=i+1}^{n-1} min\\_row[k]\\}$'}</Latex>
          </LatexWrapper>
          <Paragraph>
            Where min_col and min_row are vectors containing the minimum values for each column and row, respectively.
          </Paragraph>
        </SubSection>
        <Paragraph>
          The time complexity for calculating these bounds is O(nm) during the preprocessing step, but O(1) for each node during the main algorithm execution.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>5. Comparative Study of Different Search Strategies</SectionTitle>
        <Paragraph>
          We compared our branch and bound algorithm with other search strategies, including <HighlightedText>backtracking</HighlightedText> and a <HighlightedText>greedy algorithm</HighlightedText>. Our results show that the branch and bound strategy significantly outperforms the others in terms of execution time and efficiency.
        </Paragraph>
        
        <SubSection>
          <SubSectionTitle>5.1 Backtracking Algorithm</SubSectionTitle>
          <Paragraph>
            The backtracking algorithm explores all possible paths recursively. While it guarantees finding the optimal solution, its time complexity is exponential:
          </Paragraph>
          <LatexWrapper>
            <Latex>{'$O(3^{n+m})$, where $n$ and $m$ are the dimensions of the map.'}</Latex>
          </LatexWrapper>
        </SubSection>

        <SubSection>
          <SubSectionTitle>5.2 Greedy Algorithm</SubSectionTitle>
          <Paragraph>
            The greedy algorithm always chooses the locally optimal move. Its time complexity is linear:
          </Paragraph>
          <LatexWrapper>
            <Latex>{'$O(n+m)$'}</Latex>
          </LatexWrapper>
          <Paragraph>
            However, it does not guarantee finding the globally optimal solution.
          </Paragraph>
        </SubSection>

        <SubSection>
          <SubSectionTitle>5.3 Branch and Bound Algorithm</SubSectionTitle>
          <Paragraph>
            Our branch and bound algorithm has a worst-case time complexity of:
          </Paragraph>
          <LatexWrapper>
            <Latex>{'$O(nm \\log(nm))$'}</Latex>
          </LatexWrapper>
          <Paragraph>
            However, in practice, it performs much better due to effective pruning and bounding techniques.
          </Paragraph>
        </SubSection>
        <SubSection>
          <SubSectionTitle>5.4 Execution Times Comparison</SubSectionTitle>
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
                <td><HighlightedText>0.017</HighlightedText></td>
              </tr>
              <tr>
                <td>002.map</td>
                <td>48.56</td>
                <td>35.87</td>
                <td><HighlightedText>0.09</HighlightedText></td>
              </tr>
              <tr>
                <td>003.map</td>
                <td>67.67</td>
                <td>55.78</td>
                <td><HighlightedText>0.037</HighlightedText></td>
              </tr>
              <tr>
                <td>004.map</td>
                <td>33.45</td>
                <td>25.34</td>
                <td><HighlightedText>0.028</HighlightedText></td>
              </tr>
            </tbody>
          </table>
          <Paragraph>
            As we can observe from the table, our Branch and Bound algorithm significantly outperforms both the Backtracking and Greedy approaches. The performance gap becomes even more pronounced as the size and complexity of the maps increase.
          </Paragraph>
        </SubSection>
      </Section>
      <Section>
        <SectionTitle>6. Conclusions</SectionTitle>
        <Paragraph>
          Our <HighlightedText>branch and bound algorithm</HighlightedText> has proven to be highly efficient in solving the minimum path problem. The use of pessimistic and optimistic bounds, along with effective pruning mechanisms, has allowed us to significantly reduce the search space and improve execution times compared to other strategies.
        </Paragraph>
        <Paragraph>
          The key findings of our study include:
        </Paragraph>
        <ul>
          <li>The branch and bound algorithm consistently outperforms both backtracking and greedy approaches across various map sizes and complexities.</li>
          <li>The use of a priority queue for managing live nodes proves crucial in exploring the most promising paths first.</li>
          <li>Our memoization technique significantly reduces redundant calculations, further improving efficiency.</li>
          <li>The combination of pessimistic and optimistic bounds provides a powerful mechanism for pruning the search space.</li>
        </ul>
        <Paragraph>
          While the algorithm performs excellently on the test maps, there's still room for improvement, particularly for very large maps. Future work could focus on <HighlightedText>parallelizing the algorithm</HighlightedText> to leverage multi-core processors, potentially leading to even faster execution times for large-scale problems.
        </Paragraph>
      </Section>
      {/*<Comments postId={postId} />}
     {/* <RelatedPosts posts={relatedPosts} /> */}
    </PostWrapper>
  );
};

export default MCPADA;