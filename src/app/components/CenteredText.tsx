'use client';

import React from 'react';
import styled from 'styled-components';
import HoverLink from './HoverLink';

const TextContainer = styled.div`
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: gray;
  margin-bottom: 1em;

  div {
    margin: 0.5em 0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CenteredText = ({ timeMessage, weather, userTime, location, emoji }) => (
  <TextContainer>
    <div>
      Currently, I am what is known as{' '}
      <HoverLink href="https://www.reddit.com/r/NoStupidQuestions/comments/1bkpj5h/why_are_people_asking_am_i_cooked_and_what_does/" gifSrc="/images/gifs/crying.gif" rounded>
        cooked
      </HoverLink>
      . Scratch that; I am WELL DONE.
    </div>
    <div>
      I am almost always{' '}
      <HoverLink href="https://my.clevelandclinic.org/health/diseases/23970-sleep-deprivation" gifSrc="/images/gifs/cat-snore.gif">
        sleep-deprived
      </HoverLink>
      . Sometimes I make{' '}
      <HoverLink href="/somepage" gifSrc="/images/gifs/dance-dancing.gif" rounded>
        cool stuff
      </HoverLink>{' '}
      and actually use my brain...
    </div>
    <div>
      {timeMessage} {weather}
    </div>
    <div>Your current time is: {userTime}. Based on this, I'd guess you're in {location} {emoji}</div>
  </TextContainer>
);

export default CenteredText;
