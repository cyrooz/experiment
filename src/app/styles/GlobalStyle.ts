'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'CircularStd-Bold';
    src: url('/fonts/CircularStd-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  :root {
    --font-circular: 'CircularStd-Bold', sans-serif;
    --foreground-rgb: 0, 0, 0;
    --background-start-rgb: 240, 242, 245;
    --background-end-rgb: 255, 255, 255;
    --scrollbar-track-color: #e0e0e0;
    --scrollbar-thumb-color: #c9c9c9;
    --scrollbar-thumb-hover-color: #b3b3b3;
    --scrollbar-opacity: 0;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    overscroll-behavior: none;
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
    overscroll-behavior-y: none;
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color);
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: var(--font-circular);
    overscroll-behavior: none;
    
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, p, div {
    color: inherit;
  }

  :-webkit-scrollbar{
    width: 10px;
    height: 1px;
  }
  
  ::-webkit-scrollbar-track-piece{
    background-color: #FFF;
  }
  
  ::-webkit-scrollbar-thumb{
    background-color: #CBCBCB;
    outline: 2px solid #FFF;
    outline-offset: -2px;
    border: .1px solid #B7B7B7;
  }
  
  ::-webkit-scrollbar-thumb:hover{
    background-color: #909090;
  }
`;

export default GlobalStyle;
