'use client';

import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HoverGif = styled.div<{ $visible: boolean; rounded?: boolean }>`
  position: fixed;
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
  pointer-events: none;
  z-index: 10;
  transform: translate(-50%, -100%);
  img {
    width: 100px;
    ${(props) => props.rounded && 'border-radius: 10px;'}
  }
`;

const HoverLink: React.FC<{ children: React.ReactNode; href: string; gifSrc: string; rounded?: boolean }> = ({ children, href, gifSrc, rounded }) => {
  const hoverGifRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (hoverGifRef.current) {
      const offsetY = 20;
      hoverGifRef.current.style.top = `${e.clientY - offsetY}px`;
      hoverGifRef.current.style.left = `${e.clientX}px`;
    }
    setMousePosition({ x: e.clientX, y: e.clientY });
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setMousePosition(null);
    setVisible(false);
  };

  // todo: useEffect to start a listener for onScroll in the window/document and then upon that event happening, alter the useState to be setVisible(false); 

  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);
    };
    window.addEventListener('scroll', handleScroll);;
    
  }, []);

  return (
    <>
      <Link 
        href={href} 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ color: '#41546d', textDecoration: 'underline' }}
      >
        {children}
      </Link>
      <HoverGif ref={hoverGifRef} $visible={visible} rounded={rounded}>
        <img src={gifSrc} alt="Hover GIF" />
      </HoverGif>
    </>
  );
};

export default HoverLink;
