import React from 'react';
import Countdown from 'react-countdown';

const CountDown = () => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    // Render a countdown
    return (
      <div className='countdown__wrapper'>
        <div className='days'>
          {days} <span>days</span>
        </div>
        <div className='hours'>
          {hours} <span>Hours</span>
        </div>
        <div className='minutes'>
          {minutes} <span>Minutes</span>
        </div>
        <div className='seconds'>
          {seconds} <span>seconds</span>
        </div>
      </div>
    );
  };
  return (
    <div className='countdown__main'>
      <h1>Offer will end soon!</h1>
      <Countdown date={Date.now() + 500000000} renderer={renderer} />
    </div>
  );
};

export default CountDown;
