import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCopy, FaCheck } from 'react-icons/fa';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlockWrapper = styled.div`
  position: relative;
  margin: 1rem 0;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: ${({ theme }) => theme.accentColor};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    background: ${({ theme }) => theme.accentColorHover};
  }
`;

const CodeBlock = ({ code, language }) => {
  const [isCopied, setIsCopied] = useState(false);
  const theme = useTheme();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <CodeBlockWrapper>
      <SyntaxHighlighter 
        language={language} 
        style={theme.mode === 'dark' ? atomOneDark : atomOneLight}
      >
        {code}
      </SyntaxHighlighter>
      <CopyButton onClick={handleCopy}>
        {isCopied ? <><FaCheck /> Copiado</> : <><FaCopy /> Copiar</>}
      </CopyButton>
    </CodeBlockWrapper>
  );
};

export default CodeBlock;