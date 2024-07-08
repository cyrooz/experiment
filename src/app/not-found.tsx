'use client';
// app/404.page.tsx
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 20px;
  text-align: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 90px 20px 0;
    height: auto;
  }
`;

const Content = styled.div`
  max-width: 600px;
  margin: 20px;

  @media (max-width: 768px) {
    margin: 20px 10px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 16px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: gray;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StyledImage = styled(Image)`
  @media (max-width: 768px) {
    width: 200px !important;
    height: 200px !important;
  }
`;


const HomeLink = styled.a`
  color: #41546d;  // Sets the color of the link to blue
  text-decoration: underline;  // Adds underline to the link
`;

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundContainer>
      <StyledImage src="/images/dog.png" alt="Dog" width={300} height={300} />
      <Content>
        <Title>404: Page Not Found</Title>
        <Description>Whoops! Sorry, but this page doesn't exist.</Description>
        <Description>You could go back to where you were or start again from the <HomeLink href="/">home page</HomeLink>.</Description>
      </Content>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
