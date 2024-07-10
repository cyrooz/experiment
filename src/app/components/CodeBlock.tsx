'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styled from 'styled-components';

const CodeWrapper = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 0.5em;
  border-radius: 8px;
  margin: 1em 0;
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f0f0;
  }

  touch-action: auto; /* Allow vertical scrolling and pinch zoom */
`;

const CustomSyntaxHighlighter = styled(SyntaxHighlighter)`
  background-color: inherit !important;
  padding: 0;
  width: 100%;
`;

const CodeBlock: React.FC<{ language: string; value: string }> = ({ language, value }) => {
  return (
    <CodeWrapper>
      <CustomSyntaxHighlighter language={language} style={coy}>
        {value}
      </CustomSyntaxHighlighter>
    </CodeWrapper>
  );
};

export default CodeBlock;
