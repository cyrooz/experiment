'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styled from 'styled-components';

const CodeWrapper = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ddd; // Customize the background color here
  padding: 0.5em; // Add padding for better readability
  border-radius: 8px; // Add rounded corners
  margin: 1em 0; // Add margin for spacing
  font-size: 1rem; // Adjust font size
  line-height: 1.5; // Adjust line height
  width: 100%; // Make sure the wrapper takes full width
  overflow-x: auto; // Handle horizontal overflow for long lines of code

  @media (max-width: 768px) {
    font-size: 0.9rem; // Adjust font size for mobile
  }
`;

const CustomSyntaxHighlighter = styled(SyntaxHighlighter)`
  background-color: inherit !important;  // Inherit background color from wrapper
  padding: 0;  // Remove default padding from the highlighter
  width: 100%; // Make sure the highlighter takes full width
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
