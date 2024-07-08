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
`;

const Content = styled.div`
  max-width: 600px;
  margin-left: 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 16px;
  color: #333;
`;

const Description = styled.p`
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: gray;
  margin-bottom: 24px;
`;

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundContainer>
      <Image src="/images/dog.png" alt="Dog" width={300} height={300} />
      <Content>
        <Title>404: Page Not Found</Title>
        <Description>Whoops! Sorry, but this page doesn't exist.</Description>
        <Description>You could go back to where you were or start again from the <a href="/">home page</a>.</Description>
      </Content>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
