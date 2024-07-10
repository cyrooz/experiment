'use client';

import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ProfileSection from './components/ProfileSection';
import CenteredText from './components/CenteredText';
import Section from './components/Section';
import { SideBySideContainer, LeftAlignedColumn, RightAlignedColumn } from './components/SideBySideContainer';
import SkillsTable from './components/SkillsTable';
import LeftAlignedText from './components/LeftAlignedText';
import ImageSection from './components/ImageSection';
import CodeBlock from './components/CodeBlock';
import Footer from './components/Footer';

const Container = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: ${({ isMobile }) => (isMobile ? '90px 20px 0' : '0 20px')};
  margin: 50px auto;
  max-width: 800px;
  text-align: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 90px 20px 0;
    margin: 0 auto;
  }

  @media (min-width: 769px) {
    padding: 0 40px;
  }
`;


const Divider = styled.hr`
  border: 2px solid #333;
  border-radius: 5px;
  height: 4px;
  margin: 20px 0;
  width: 100%;
`;

const DividerHR = styled.div`
  padding: 20px 0;
  width: 100%;
  display: block;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const codeString = `
package main

import "fmt"

func secret() int {
  return 9.27.02 // The answer to life, the universe, and everything
}

func hiddenMessage() string {
  return "wednesday" // A subtle nod to a dark and stormy day
}

func love() string {
  return "at the end of the day, it's all love." // A reminder of you.
}

func main() {
  fmt.Println(secret())
  fmt.Println(hiddenMessage())
  fmt.Println(love())
}
`;

const getInitialTimes = () => {
  const myTimeZone = 'America/Los_Angeles'; // Pacific Time Zone
  const myTime = new Date().toLocaleString('en-US', { timeZone: myTimeZone });
  const myTimeDate = new Date(myTime);

  const userTime = new Date();
  const timeDifference = (Number(myTimeDate) - Number(userTime)) / (1000 * 60 * 60); // Difference in hours
  const aheadBehind = timeDifference > 0 ? 'ahead' : 'behind';
  const absoluteHoursDiff = Math.abs(timeDifference);

  const timeMessage = `It's ${myTimeDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} for me (${absoluteHoursDiff.toFixed(0)} hours ${aheadBehind} of you).`;
  const userTimeStr = userTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return { timeMessage, userTimeStr };
};

const Page: React.FC = () => {
  const { timeMessage: initialTimeMessage, userTimeStr: initialUserTime } = getInitialTimes();
  const [timeMessage, setTimeMessage] = useState<string>(initialTimeMessage);
  const [userTime, setUserTime] = useState<string>(initialUserTime);

  useEffect(() => {
    const updateTimes = () => {
      const { timeMessage, userTimeStr } = getInitialTimes();
      setTimeMessage(timeMessage);
      setUserTime(userTimeStr);
    };

    const intervalId = setInterval(updateTimes, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial isMobile state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <main>
        <Container isMobile={isMobile}>
          <ProfileSection src="/images/profile.jpg" alt="Profile Picture" />
          <CenteredText timeMessage={timeMessage} userTime={userTime} />
          <DividerHR>
            <Divider className='divider' />
          </DividerHR>
          <SideBySideContainer>
            <LeftAlignedColumn>
              <Section title="Who am I?">
              I'm 17 and have a cat nicknamed Chat (French for cat) 🥖. J'aime la musique française. I love technology, entrepreneurship, play the piano, and write poetry. I enjoy biking, early morning runs, photography, and nature. I'm also a bookworm and a music aficionado.
              </Section>
            </LeftAlignedColumn>
            <RightAlignedColumn>
              <Section title="My story">
              I started coding at 13 after meeting a kid in California whose father was a software engineer. I built Discord bots and initially procrastinated learning to code. Always creative, I quickly realized my passion for technology and was hooked. I've been creating ever since.
              </Section>
            </RightAlignedColumn>
          </SideBySideContainer>
          <DividerHR>
            <Divider className='divider' />
          </DividerHR>
          <SkillsTable />
          <LeftAlignedText header="Catch you later, alligator 🐊" paragraphs={['Before you go, have some free and "valuable" code.', 'See what I did there? 😉 I\'m so funny.']} logoSrc="/images/Go.png" />
          <CodeBlock language="go" value={codeString} />
          <ImageSection src="/images/jenna-ortega.jpg" alt="Jenna Ortega" title="Why are you still here?" description="No, Seriously." />
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Page;
