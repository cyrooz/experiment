'use client';

import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin-top: 5em;
  margin-bottom: 5em;
  text-align: center;

  img {
    width: 200px;
    border-radius: 10px;
  }

  h1 {
    font-family: 'CircularStd-Bold', sans-serif;
    font-size: 18px;
    margin-bottom: 0.5em;
  }

  p {
    font-family: 'Roboto', sans-serif;
    color: gray;
    font-weight: bold;
    font-size: 16px;
    margin-top: 0.5em;
  }
`;

const ImageSection = ({ src, alt, title, description }) => (
  <SectionContainer>
    <img src={src} alt={alt} />
    <h1>{title}</h1>
    <p>{description}</p>
  </SectionContainer>
);

export default ImageSection;
