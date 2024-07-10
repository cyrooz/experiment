import { useState, useEffect } from 'react';

const useTime = () => {
  const [timeMessage, setTimeMessage] = useState<string>('');
  const [userTime, setUserTime] = useState<string>(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const updateTimes = () => {
      const myTimeZone = 'America/Los_Angeles'; // Pacific Time Zone
      const myTime = new Date().toLocaleString('en-US', { timeZone: myTimeZone });
      const myTimeDate = new Date(myTime);

      const userTime = new Date();
      const timeDifference = (Number(myTimeDate) - Number(userTime)) / (1000 * 60 * 60); // Difference in hours
      const aheadBehind = timeDifference > 0 ? 'ahead' : 'behind';
      const absoluteHoursDiff = Math.abs(timeDifference);

      const timeMessage = `It's ${myTimeDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} for me (${absoluteHoursDiff.toFixed(0)} hours ${aheadBehind} of you).`;

      setTimeMessage(timeMessage);
      setUserTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    updateTimes();
    const intervalId = setInterval(updateTimes, 1000); // Polling every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return { timeMessage, userTime };
};

export default useTime;
