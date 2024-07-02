'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import useHeaderVisibility from '../hooks/useHeaderVisibility';

const HeaderContainer = styled.header.attrs<{ visible: boolean; isMobile: boolean }>(props => ({
  style: {
    transform: props.isMobile || props.visible ? 'translateY(0)' : 'translateY(-100%)',
    opacity: props.isMobile || props.visible ? 1 : 0,
    position: props.isMobile ? 'fixed' : 'sticky',
  },
}))`
  text-align: center;
  flex-shrink: 0;
  top: 0;
  width: 100%;
  background-color: #FBFBFB;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  padding: 1rem;
  display: flex;
  overscroll: hidden;
  align-items: center;
  justify-content: center;
  z-index: 5;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 0.2rem;
  }
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    & > :first-child {
      display: none;
    }
  }
`;

const CenterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    display: none;
  }
`;

const BreadcrumbItem = styled.span`
  display: flex;
  align-items: center;
  font-family: var(--font-circular);
  font-size: 16px;
  color: #333;
  margin-right: 5px;

  & > a {
    color: #333;
    text-decoration: none;
    background-color: #e0e0e0;
    padding: 5px 10px;
    border-radius: 5px;
    margin-right: 5px;
  }

  & > a:hover {
    background-color: #d0d0d0;
  }
`;

const RocketEmoji = styled.span`
  margin-left: 10px;
`;

const Header = () => {
  const { visible, isMobile } = useHeaderVisibility();
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <HeaderContainer visible={visible} isMobile={isMobile}>
      <NavWrapper>
        <NavSection>
          <BreadcrumbItem>Site:</BreadcrumbItem>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href="/socials">Socials</Link>
          </BreadcrumbItem>
        </NavSection>
        <CenterSection>
          Cyrus<RocketEmoji>🪿</RocketEmoji>
        </CenterSection>
        <NavSection>
          {showFeatures && (
            <>
              <BreadcrumbItem>Blog:</BreadcrumbItem>
              <BreadcrumbItem>
                <Link href="/articles">Articles</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link href="/collections">Collections</Link>
              </BreadcrumbItem>
            </>
          )}
        </NavSection>
      </NavWrapper>
    </HeaderContainer>
  );
};

export default Header;
