import React, { useEffect } from 'react';
import styled from 'styled-components';

const Emoji = styled.div`
  position: fixed;
  font-size: 2rem; /* Adjust size as needed */
  top: -1rem; /* Adjust position based on font size */
  left: -1rem; /* Adjust position based on font size */
  pointer-events: none;
  z-index: 10000; /* Ensure it is on top */
  transition: opacity 0.5s ease, transform 0.1s ease; /* Add transition for opacity and transform */
  opacity: 0; /* Start with the cursor hidden */
`;

const Cursor: React.FC = () => {
  useEffect(() => {
    const emojiElement = document.querySelector('.emoji') as HTMLElement;

    const mouse = { x: 0, y: 0 };
    const previousMouse = { x: 0, y: 0 };
    const emoji = { x: 0, y: 0 };

    let currentScale = 0;
    let currentAngle = 0;
    let fadeTimeout: NodeJS.Timeout;

    const updateMousePosition = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Clear previous timeout if mouse moves again
      clearTimeout(fadeTimeout);
      emojiElement.style.opacity = '1'; // Ensure cursor is visible
    };

    const handleScroll = () => {
      emojiElement.style.opacity = '0'; // Hide cursor during scroll
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', handleScroll);

    const speed = 0.2;

    const tick = () => {
      emoji.x += (mouse.x - emoji.x) * speed;
      emoji.y += (mouse.y - emoji.y) * speed;
      const translateTransform = `translate(${emoji.x}px, ${emoji.y}px)`;

      const deltaMouseX = mouse.x - previousMouse.x;
      const deltaMouseY = mouse.y - previousMouse.y;
      previousMouse.x = mouse.x;
      previousMouse.y = mouse.y;

      const mouseVelocity = Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2);
      const scaleValue = (mouseVelocity / 50) * 0.5; // Increase sensitivity to mouse movement
      currentScale += (scaleValue - currentScale) * speed;
      const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

      const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
      if (mouseVelocity > 10) { // Lower the threshold for angle update
        currentAngle = angle;
      }
      const rotateTransform = `rotate(${currentAngle}deg)`;

      // Set a timeout to fade out the cursor after a delay
      fadeTimeout = setTimeout(() => {
        emojiElement.style.opacity = '0';
      }, 1000); // Adjust the delay to 1000ms (1 second) for a smoother transition

      if (emojiElement) {
        emojiElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
      }

      window.requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(fadeTimeout);
    };
  }, []);

  return <Emoji className="emoji">🚀</Emoji>;
};

export default Cursor;
