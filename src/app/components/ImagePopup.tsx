'use client';
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: absolute;
  right: -10px; /* Adjusted value for smoother positioning */
  top: -40px;   /* Adjusted value for smoother positioning */
  width: 200px;
  height: 200px;
  z-index: 0; /* Ensure it's on the correct layer */
  overflow: hidden;
  /* Temporary border to see the container */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HoverImage = styled.img<{ isHovered: boolean }>`
  width: 120px; /* Ensure image width fits the container */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover;
  transform: translateY(${(props) => (props.isHovered ? '34%' : '0')});
  transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  pointer-events: none; /* Prevents pointer events from interfering with hover detection */
`;

interface ImagePopupProps {
  imageUrl: string;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const { left, top, right, bottom } = containerRef.current.getBoundingClientRect();
      if (
        e.clientX >= left &&
        e.clientX <= right &&
        e.clientY >= top &&
        e.clientY <= bottom
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    }
  };

  useEffect(() => {
    const handleDocumentMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, right, bottom } = containerRef.current.getBoundingClientRect();
        if (
          e.clientX >= left &&
          e.clientX <= right &&
          e.clientY >= top &&
          e.clientY <= bottom
        ) {
          setIsHovered(true);
        } else {
          setIsHovered(false);
        }
      }
    };

    document.addEventListener('mousemove', handleDocumentMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
    };
  }, []);

  return (
    <ImageContainer
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <HoverImage src={imageUrl} alt="Popup" isHovered={isHovered} />
    </ImageContainer>
  );
};

export default ImagePopup;
