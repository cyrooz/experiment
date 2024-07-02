'use client';
import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { fetchWeatherAndTime } from './lib/fetchWeatherAndTime';
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
  padding: ${({ isMobile }) => (isMobile ? '70px 20px 0' : '0 20px')};
  margin: 50px auto 0;
  max-width: 740px;
  text-align: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 70px 20px 0; /* Adjusted to add more space for the fixed header */
    margin: 0 auto 0;
  }

  @media (min-width: 769px) {
    padding: 0 40px;
  }
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

const Divider = styled.hr`
  border: 2px solid #333;
  border-radius: 5px;
  height: 4px;
  margin: 20px 0;
  width: 100%;
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

interface PageProps {
  initialWeather: string;
  initialTimeMessage: string;
  userLocation: string;
  userEmoji: string;
}

const Page: React.FC<PageProps> = ({ initialWeather, initialTimeMessage, userLocation, userEmoji }) => {
  const [weather, setWeather] = useState(initialWeather);
  const [timeMessage, setTimeMessage] = useState(initialTimeMessage);
  const [userTime, setUserTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [location, setLocation] = useState(userLocation);
  const [emoji, setEmoji] = useState(userEmoji);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { initialWeather, initialTimeMessage, userLocation, userEmoji } = await fetchWeatherAndTime();
        setWeather(initialWeather);
        setTimeMessage(initialTimeMessage);
        setLocation(userLocation);
        setEmoji(userEmoji);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const updateUserTime = () => {
      setUserTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    const intervalId = setInterval(() => {
      updateUserTime();
    }, 500000); // Polling every 5 seconds

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Set initial isMobile state
    handleResize();

    return () => {
      clearInterval(intervalId); // Cleanup on unmount
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <Container isMobile={isMobile}>
        <ProfileSection src="/images/profile.jpg" alt="Profile Picture" />
        <CenteredText
          timeMessage={timeMessage}
          weather={weather}
          userTime={userTime}
          location={location}
          emoji={emoji}
        />
        <section>
          <DividerHR>
            <Divider className='divider' />
          </DividerHR>
          <SideBySideContainer>
            <LeftAlignedColumn>
              <Section title="Who am I?">
                I'm 17 and have a cat whose nickname is Chat (meaning cat in French) 🥖🇫🇷. J'aime la musique française. I love technology, entrepreneurship, can play the piano, and am an amateur poet. I enjoy biking, running in the early morning (glutton for punishment?), photography, and nature. I'm also a bookworm and slightly a music aficionado 🎵.
              </Section>
            </LeftAlignedColumn>
            <RightAlignedColumn>
              <Section title="My story">
                I started coding after meeting a kid in California when I was around 13. His father was a software engineer. I built Discord bots 🤖 and procrastinated learning to code that first week I met him. I have always been creative and realized how much I enjoy technology and was hooked. Coding allowed me to bring my ideas to life. I've been creating ever since 👨‍💻.
              </Section>
            </RightAlignedColumn>
          </SideBySideContainer>
          <Divider />
        </section>
        <SkillsTable />
        <LeftAlignedText
          header="Catch you later, alligator 🐊"
          paragraphs={[
            'Before you go, have some free and "valuable"',
            'See what I did there? 😉 I\'m so funny.',
          ]}
          logoSrc="/images/Go.png"
        />
        <CodeBlock language="go" value={codeString} />
        <ImageSection
          src="/images/jenna-ortega.jpg"
          alt="Jenna Ortega"
          title="Why are you still here?"
          description="No, Seriously."
        />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Page;
