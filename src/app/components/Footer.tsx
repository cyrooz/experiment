'use client';

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #41546d;
  color: #ffffff; /* Ensure text is readable */
  

`;

const FooterText = styled.span`
  font-size: 14px;
font-weight: regular;

  & span {
    
    text-decoration: underline;
    margin: 0 0.5rem;
    cursor: pointer;
  }
`;

const Footer = () => {
  const scrollToTop = (e: React.MouseEvent) => { // Explicitly define the type of 'e' parameter as React.MouseEvent
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <FooterText>
        © 2024 Cyrus • <span onClick={scrollToTop}>Back to Top? 👆</span>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;

