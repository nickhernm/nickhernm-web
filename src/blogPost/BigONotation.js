import React from 'react';
import styled from 'styled-components';
import Latex from 'react-latex-next';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import RelatedPosts from '../components/RelatedPosts';
import Comments from '../components/Comments';

const PostWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const PostTitle = styled.h1`
  color: ${({ theme }) => theme.primaryColor};
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const HighlightedText = styled.span`
  background-color: ${({ theme }) => theme.accentColor}40;
  padding: 0 4px;
  border-radius: 4px;
`;

const CodeBlock = styled(SyntaxHighlighter)`
  margin-bottom: 1rem;
`;

const LatexWrapper = styled.div`
  overflow-x: auto;
  margin: 1rem 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

const Th = styled.th`
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundAlt};
`;

const Td = styled.td`
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 0.5rem;
`;

const BigONotation = ({ relatedPosts, postId }) => {
  return (
    <PostWrapper>
      <PostTitle>Understanding Big O Notation and Algorithm Complexity</PostTitle>
      
      <Section>
        <h2>1. Introduction to Algorithm Complexity</h2>
        <Paragraph>
          In computer science, <HighlightedText>algorithm complexity</HighlightedText> refers to the amount of resources (such as time and space) an algorithm needs to run as a function of the input size. Understanding algorithm complexity is crucial for several reasons:
        </Paragraph>
        <ul>
          <li>It helps us predict the performance of an algorithm for large inputs.</li>
          <li>It allows us to compare different algorithms and choose the most efficient one for a given problem.</li>
          <li>It guides us in optimizing our code and making informed trade-offs between time and space complexity.</li>
        </ul>
        <Paragraph>
          One of the most common ways to express algorithm complexity is through <HighlightedText>Big O notation</HighlightedText>.
        </Paragraph>
      </Section>

      <Section>
        <h2>2. What is Big O Notation?</h2>
        <Paragraph>
          Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In computer science, it's used to classify algorithms according to how their run time or space requirements grow as the input size grows.
        </Paragraph>
        <Paragraph>
          More formally, for a function f(n), we say f(n) = O(g(n)) if there exist positive constants c and n₀ such that:
        </Paragraph>
        <LatexWrapper>
          <Latex>{'$0 \\leq f(n) \\leq cg(n)$ for all $n \\geq n_0$'}</Latex>
        </LatexWrapper>
        <Paragraph>
          In simpler terms, Big O notation gives an upper bound of the complexity in the worst case, helping to quantify performance as the input size becomes arbitrarily large.
        </Paragraph>
      </Section>

      <Section>
        <h2>3. Common Time Complexities</h2>
        <Paragraph>
          Here are some of the most common time complexities you'll encounter, ordered from best to worst:
        </Paragraph>
        <Table>
          <thead>
            <tr>
              <Th>Big O Notation</Th>
              <Th>Name</Th>
              <Th>Description</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td><Latex>{'$O(1)$'}</Latex></Td>
              <Td>Constant</Td>
              <Td>The algorithm always takes the same amount of time, regardless of input size.</Td>
            </tr>
            <tr>
              <Td><Latex>{'$O(\\log n)$'}</Latex></Td>
              <Td>Logarithmic</Td>
              <Td>The algorithm's time complexity grows logarithmically in proportion to the input size.</Td>
            </tr>
            <tr>
              <Td><Latex>{'$O(n)$'}</Latex></Td>
              <Td>Linear</Td>
              <Td>The algorithm's time complexity grows linearly with the input size.</Td>
            </tr>
            <tr>
              <Td><Latex>{'$O(n \\log n)$'}</Latex></Td>
              <Td>Linearithmic</Td>
              <Td>The algorithm's time complexity grows in proportion to n log n.</Td>
            </tr>
            <tr>
              <Td><Latex>{'$O(n^2)$'}</Latex></Td>
              <Td>Quadratic</Td>
              <Td>The algorithm's time complexity grows quadratically with the input size.</Td>
            </tr>
            <tr>
              <Td><Latex>{'$O(2^n)$'}</Latex></Td>
              <Td>Exponential</Td>
              <Td>The algorithm's time complexity doubles with each addition to the input.</Td>
            </tr>
            <tr>
              <Td><Latex>{'$O(n!)$'}</Latex></Td>
              <Td>Factorial</Td>
              <Td>The algorithm's time complexity grows factorially with the input size.</Td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section>
        <h2>4. Analyzing Algorithm Complexity</h2>
        <Paragraph>
          When analyzing the time complexity of an algorithm, we focus on the worst-case scenario. Here are some general rules to keep in mind:
        </Paragraph>
        <ul>
          <li>Ignore constants and lower-order terms.</li>
          <li>Analyze the dominant operations.</li>
          <li>Consider the input size and how it affects the number of operations.</li>
        </ul>
        <Paragraph>
          Let's look at some examples to better understand how to analyze algorithm complexity.
        </Paragraph>
        
        <h3>4.1 Constant Time: O(1)</h3>
        <Paragraph>
          Operations that don't depend on the input size are considered constant time.
        </Paragraph>
        <CodeBlock language="python" style={dracula}>
          {`
def get_first_element(arr):
    return arr[0]
          `}
        </CodeBlock>
        <Paragraph>
          This function always performs one operation, regardless of the size of the input array.
        </Paragraph>

        <h3>4.2 Linear Time: O(n)</h3>
        <Paragraph>
          Algorithms with linear time complexity perform operations proportional to the input size.
        </Paragraph>
        <CodeBlock language="python" style={dracula}>
          {`
def sum_array(arr):
    total = 0
    for num in arr:
        total += num
    return total
          `}
        </CodeBlock>
        <Paragraph>
          This function iterates through each element once, so its time complexity is O(n), where n is the length of the array.
        </Paragraph>

        <h3>4.3 Quadratic Time: O(n²)</h3>
        <Paragraph>
          Nested iterations over the input often result in quadratic time complexity.
        </Paragraph>
        <CodeBlock language="python" style={dracula}>
          {`
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
          `}
        </CodeBlock>
        <Paragraph>
          Bubble sort has two nested loops, each potentially iterating n times, resulting in O(n²) complexity.
        </Paragraph>

        <h3>4.4 Logarithmic Time: O(log n)</h3>
        <Paragraph>
          Algorithms that reduce the problem size by a constant factor in each step often have logarithmic time complexity.
        </Paragraph>
        <CodeBlock language="python" style={dracula}>
          {`
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
          `}
        </CodeBlock>
        <Paragraph>
          Binary search halves the search space in each iteration, resulting in O(log n) complexity.
        </Paragraph>
      </Section>

      <Section>
        <h2>5. Space Complexity</h2>
        <Paragraph>
          While time complexity measures the running time of an algorithm, <HighlightedText>space complexity</HighlightedText> measures the amount of memory an algorithm needs as a function of the input size.
        </Paragraph>
        <Paragraph>
          Space complexity is also expressed using Big O notation. Here are some examples:
        </Paragraph>
        <ul>
          <li><HighlightedText>O(1) space complexity</HighlightedText>: The algorithm uses a constant amount of extra space, regardless of input size.</li>
          <li><HighlightedText>O(n) space complexity</HighlightedText>: The algorithm's space usage grows linearly with the input size.</li>
          <li><HighlightedText>O(n²) space complexity</HighlightedText>: The algorithm's space usage grows quadratically with the input size.</li>
        </ul>
        <Paragraph>
          Let's look at an example of analyzing space complexity:
        </Paragraph>
        <CodeBlock language="python" style={dracula}>
          {`
def create_matrix(n):
    matrix = []
    for i in range(n):
        row = [0] * n
        matrix.append(row)
    return matrix
          `}
        </CodeBlock>
        <Paragraph>
          This function creates an n x n matrix, so its space complexity is O(n²).
        </Paragraph>
      </Section>

      <Section>
        <h2>6. Trade-offs Between Time and Space Complexity</h2>
        <Paragraph>
          Often in algorithm design, we face trade-offs between time and space complexity. An algorithm that runs faster might require more memory, and vice versa. Here's an example:
        </Paragraph>
        <CodeBlock language="python" style={dracula}>
          {`
def fibonacci_recursive(n):
    if n <= 1:
        return n
    return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)

def fibonacci_dynamic(n):
    fib = [0] * (n + 1)
    fib[1] = 1
    for i in range(2, n + 1):
        fib[i] = fib[i-1] + fib[i-2]
    return fib[n]
          `}
        </CodeBlock>
        <Paragraph>
          The recursive version has O(2ⁿ) time complexity but O(n) space complexity (due to the call stack). The dynamic programming version has O(n) time complexity but also O(n) space complexity. It trades space for time.
        </Paragraph>
      </Section>

      <Section>
        <h2>7. Amortized Analysis</h2>
        <Paragraph>
          <HighlightedText>Amortized analysis</HighlightedText> is an advanced technique used to analyze algorithms that occasionally perform expensive operations, but on average perform well.
        </Paragraph>
        <Paragraph>
          A classic example is the dynamic array (like ArrayList in Java or list in Python). While resizing the array is an O(n) operation, it happens so infrequently that the amortized time for adding an element is O(1).
        </Paragraph>
      </Section>

      <Section>
        <h2>8. Best, Average, and Worst Case Complexity</h2>
        <Paragraph>
          When discussing algorithm complexity, we often refer to three scenarios:
        </Paragraph>
        <ul>
          <li><HighlightedText>Best Case</HighlightedText>: The input that results in the fastest running time.</li>
          <li><HighlightedText>Average Case</HighlightedText>: The expected running time for a typical input.</li>
          <li><HighlightedText>Worst Case</HighlightedText>: The input that results in the slowest running time.</li>
          </ul>
        <Paragraph>
          For example, for a simple search algorithm:
        </Paragraph>
        <ul>
          <li>Best case: O(1) - The element is found at the first position.</li>
          <li>Average case: O(n/2) - On average, we might expect to search half the list.</li>
          <li>Worst case: O(n) - The element is at the last position or not in the list.</li>
        </ul>
        <Paragraph>
          In Big O notation, we typically focus on the worst-case scenario, as it provides an upper bound on the algorithm's performance.
        </Paragraph>
      </Section>

      <Section>
        <h2>Conclusion</h2>
        <Paragraph>
          Understanding Big O notation and algorithm complexity is crucial for writing efficient code and solving complex problems. As you develop your skills as a programmer, you'll find that thinking about complexity becomes second nature, helping you make informed decisions about algorithm design and optimization.
        </Paragraph>
        <Paragraph>
          Remember, the goal isn't always to achieve the lowest possible time complexity. Sometimes, a simpler algorithm with slightly worse complexity might be preferred for its readability or ease of implementation. Always consider the specific requirements and constraints of your project when choosing or designing algorithms.
        </Paragraph>
      </Section>
      {<Comments postId={postId} />}
    </PostWrapper>
  );
};

export default BigONotation;