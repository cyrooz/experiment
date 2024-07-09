'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  align-items: center;
`;

const SkeletonElement = styled.div<{ isLoading: boolean }>`
  height: 20px;
  background: linear-gradient(to right, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
  background-size: 2000px 100%;
  ${(props) =>
    props.isLoading &&
    css`
      animation: ${shimmer} 1.5s infinite linear;
    `}
  border-radius: 4px;
`;

const SkeletonLoader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => (
  <SkeletonContainer>
    <SkeletonElement isLoading={isLoading} style={{ width: '80%' }} />
    <SkeletonElement isLoading={isLoading} style={{ width: '100%' }} />
    <SkeletonElement isLoading={isLoading} style={{ width: '70%' }} />
    <SkeletonElement isLoading={isLoading} style={{ width: '90%' }} />
  </SkeletonContainer>
);

export default SkeletonLoader;
