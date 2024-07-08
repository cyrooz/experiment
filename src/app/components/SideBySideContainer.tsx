'use client';
import styled from 'styled-components';

const SideBySideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
  gap: 20px; /* Add space between the columns */

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 16px;
    gap: 0; /* Reset gap for mobile view */
  }
`;

const LeftAlignedColumn = styled.div`
  flex: 1;
  margin: 10px;
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

  @media (max-width: 768px) {
    text-align: left;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
`;

const RightAlignedColumn = styled.div`
  flex: 1;
  margin: 10px;
  text-align: right;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  
  @media (max-width: 768px) {
    text-align: right;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
`;

export { SideBySideContainer, LeftAlignedColumn, RightAlignedColumn };
