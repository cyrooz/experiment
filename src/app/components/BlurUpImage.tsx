'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* Adjust this to match the aspect ratio of your images */
  overflow: hidden;
  border-radius: 50%;
`;

const StyledImage = styled.img<{ loaded: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.5s ease-in-out, opacity 0.5s ease-in-out;
  filter: ${({ loaded }) => (loaded ? 'blur(0)' : 'blur(20px)')};
  opacity: ${({ loaded }) => (loaded ? 1 : 0.5)};
  border-radius: 50%;
`;

interface BlurUpImageProps {
  src: string;
  alt: string;
}

const BlurUpImage: React.FC<BlurUpImageProps> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <ImageWrapper>
      <StyledImage src={src} alt={alt} loaded={loaded} onLoad={() => setLoaded(true)} />
    </ImageWrapper>
  );
};

export default BlurUpImage;
