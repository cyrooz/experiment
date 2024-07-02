import React from 'react';
import styled, { keyframes } from 'styled-components';

const wave = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

const StyledImg = styled.img`
  border-radius: 50%;
  width: 202px;
  margin-bottom: 1em;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const StyledH1 = styled.h1`
  font-family: 'CircularStd-Bold', sans-serif;
  font-size: 36px;
  margin-bottom: 0.5em;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Highlight = styled.span`
  background-color: #66f966;
  padding: 0 5px;
  border-radius: 5px;
`;

const Emoji = styled.span`
  display: inline-block;
  animation: ${wave} 2s infinite;
  transform-origin: 70% 70%;
`;

const ProfileSection = ({ src, alt }) => (
  <>
    <StyledImg src={src} alt={alt} />
    <StyledH1>
      <Emoji>👋</Emoji> Hey, I'm <Highlight>Cyrus</Highlight>
    </StyledH1>
  </>
);

export default ProfileSection;
