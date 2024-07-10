import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

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

const StyledImgWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 202px;
  height: 202px;
  margin-bottom: 1em;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const StyledH1 = styled.h1`
  font-family: 'CircularStd-Bold', sans-serif;
  font-size: 40px;
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

const ProfileSection = ({ src, alt, blurSrc }: { src: string; alt: string; blurSrc: string }) => (
  <>
    <StyledImgWrapper>
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={202}
        height={202}
        placeholder="blur"
        blurDataURL={blurSrc}
      />
    </StyledImgWrapper>
    <StyledH1>
      <Emoji>👋</Emoji> Hey, I'm <Highlight>Cyrus</Highlight>
    </StyledH1>
  </>
);

export default ProfileSection;
