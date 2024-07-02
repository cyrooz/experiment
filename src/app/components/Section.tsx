'use client';

import React from 'react';
import styled from 'styled-components';

const SectionHeader = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: black;
  margin-bottom: 0.5em;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SectionParagraph = styled.p`
  font-family: 'Roboto', sans-serif;
  margin-top: 5px;
  margin-bottom: 0.5em;
  line-height: 1.5;
  color: gray;
  font-size: 16px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Section = ({ title, children }) => (
  <div>
    <SectionHeader>{title}</SectionHeader>
    <SectionParagraph>{children}</SectionParagraph>
  </div>
);

export default Section;
