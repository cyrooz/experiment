import { GetServerSideProps } from 'next';
import Page from '../../page'; // Import the client component
import React from 'react';
import { fetchWeatherAndTime } from '../../lib/fetchWeatherAndTime';

interface ServerProps {
  initialWeather: string;
  initialTimeMessage: string;
  userLocation: string;
  userEmoji: string;
}

const ServerPage = ({ initialWeather, initialTimeMessage, userLocation, userEmoji }: ServerProps) => {
  console.log('Server props:', { initialWeather, initialTimeMessage, userLocation, userEmoji });
  return (
    <Page
      initialWeather={initialWeather}
      initialTimeMessage={initialTimeMessage}
      userLocation={userLocation}
      userEmoji={userEmoji}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await fetchWeatherAndTime();
    return {
      props: {
        ...data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        initialWeather: '',
        initialTimeMessage: '',
        userLocation: '',
        userEmoji: '',
      },
    };
  }
};

export default ServerPage;
