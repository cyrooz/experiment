'use client';
// app/layout.tsx
import React from 'react';
import StyledComponentsRegistry from './lib/registry';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/GlobalStyle'; // Ensure the path is correct
import Cursor from './components/Cursor';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>🪿 Cyrus </title>
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Header />
          {children}
        
      {/* Add the custom cursor component */}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
