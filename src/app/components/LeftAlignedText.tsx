import React from 'react';
import styled from 'styled-components';

// Define the interface for component props
interface LeftAlignedTextProps {
  header: string;
  paragraphs: string[];
  logoSrc: string;
}

// Styled components
const LeftAlignedContainer = styled.div`
  text-align: left;
  max-width: 740px;  // Ensure the width is consistent with other components
  margin: 0 auto;
  padding: 0px;
  margin-left: 0px;  // Adjust padding if needed to match other elements

  @media (max-width: 768px) {
    text-align: left;
    margin-left: 0px;
    padding: 0px;  // Adjust padding for smaller screens
  }
`;

const LeftAlignedHeader = styled.h2`
  font-family: var(--font-circular);
  margin-bottom: 0.5em;
  text-align: left;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const LeftAlignedParagraph = styled.p`
  font-family: 'Roboto', sans-serif;
  color: gray;
  margin-bottom: 0.5em;
  text-align: left;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Logo = styled.img`
  height: 2em;
  vertical-align: middle;
  margin: 0 0.5em;

  @media (max-width: 768px) {
    height: 1.5em;
  }
`;

// Component definition using TypeScript props
const LeftAlignedText: React.FC<LeftAlignedTextProps> = ({ header, paragraphs, logoSrc }) => (
  <LeftAlignedContainer>
    <LeftAlignedHeader>{header}</LeftAlignedHeader>
    {paragraphs.map((text, index) => (
      <LeftAlignedParagraph key={index}>
        {text.includes('logo') ? <Logo src={logoSrc} alt="logo" /> : text}
      </LeftAlignedParagraph>
    ))}
  </LeftAlignedContainer>
);

export default LeftAlignedText;
