import React, { useState, useEffect } from 'react';
import './AboutCard.css';

function AboutCard() {
  const [aboutName, setAboutName] = useState('Anand Kumar Singh');
  const textValues = ['Adhgf Kghds Sybdk', 'Sjdsr Hhgde Bugwe', 'Jjgvk Sswdd Mynhf','Adhgf Kghds Sybdk', 'Rupgs Poybd Ljnsjb','Sjdsr Hhgde Bugwe', 'Anand Kumar Singh'];

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setAboutName(textValues[currentIndex]);

      currentIndex++;
      if (currentIndex === textValues.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, []);

  return (
    <div className='aboutCardContainer'>
      <div className='aboutHead'></div>
      <div className='aboutIntro'>
        <span>Hi, my name is </span>
        <span className='aboutName'>{aboutName}</span>
      </div>
      <div className='aboutPassion'>
      A <span className='cse'> Computer Science Student </span> passionate about programming and web development.
      </div>
    </div>
  );
}

export default AboutCard;
