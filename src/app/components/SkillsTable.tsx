'use client';

import React from 'react';
import styled from 'styled-components';
import ImagePopup from './ImagePopup'; // Import the ImagePopup component

const TableContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  padding: 20px 0;
  margin-bottom: 20px;
  position: relative; // Ensure the table container is the reference for absolute positioning
`;

const Title = styled.h2`
  font-family: 'CircularStd-Bold', sans-serif;
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  position: relative;
  z-index: 1; // Ensure it stays above the image
`;

const Subtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
  position: relative;
  z-index: 1; // Ensure it stays above the image
`;

const TableWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f9f9f9;
  position: relative; // Ensure relative positioning for the absolute image
  z-index: 1; // Ensure it stays above the image
`;

const TableHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: #f9f9f9;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

const TableHeaderCell = styled.div`
  flex: 1;
  text-align: left;
  font-weight: bold;
`;

const TableCell = styled.div<{ isCategory?: boolean }>`
font-family: 'CircularStd-Book', sans-serif;
  flex: 1;
  text-align: left;
  font-family: ${(props) => (props.isCategory ? 'CircularStd-Bold' : 'CircularStd-Book')}, sans-serif;
`;

const ImagePopupContainer = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

const skillsData = [
  { category: '🎨 Frontend', technologies: 'HTML/CSS, Javascript, Typescript, React.js, Next.js, Bootstrap, Tailwind, EJS' },
  { category: '⚙️ Backend', technologies: 'Rust, Go, Java, Python, C++, C, Node.js, Express.js, Gin, Actix-web' },
  { category: '🔧 Tools', technologies: 'GCP, AWS, Git/GitHub, Heroku, Vercel, Figma, GitHub Actions, Docker, Bash, Common ML libraries' },
  { category: '🗂️ Databases', technologies: 'MongoDB, Cassandra, Firebase RTD & Firestore, Postgres, Gorm, Mongoose, Redis, SQL-based DBs, iOS/Android/web local storage' },
  { category: '👨‍💻 Personal', technologies: 'Determined, communicative, honest, reliable' },
];

const CustomTable = () => {
  return (
    <TableContainer>
      <ImagePopupContainer>
        <ImagePopup imageUrl="/images/pika.png" />
      </ImagePopupContainer>
      <Title>Skills</Title>
      <Subtitle>With new tech comes new challenges; I welcome them.</Subtitle>
      <TableWrapper>
        <TableHeaderRow>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>Technologies</TableHeaderCell>
        </TableHeaderRow>
        {skillsData.map((skill, index) => (
          <TableRow key={index}>
            <TableCell isCategory>{skill.category}</TableCell>
            <TableCell>{skill.technologies}</TableCell>
          </TableRow>
        ))}
      </TableWrapper>
    </TableContainer>
  );
};

export default CustomTable;
