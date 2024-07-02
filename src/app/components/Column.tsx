'use client';

import React from 'react';
import styled from 'styled-components';

const ColumnContainer = styled.div`
  flex: 1;
  margin: 0 10px;
  text-align: left;

  &:nth-child(odd) {
    text-align: left;
  }

  &:nth-child(even) {
    text-align: right;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;

    &:nth-child(even),
    &:nth-child(odd) {
      text-align: center;
    }
  }
`;

const Column = ({ children }) => (
  <ColumnContainer>
    {children}
  </ColumnContainer>
);

export default Column;
