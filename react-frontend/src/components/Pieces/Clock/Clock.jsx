import React, { useEffect, useState } from 'react';
import ClockComponent from 'react-clock';
import 'react-clock/dist/Clock.css';
import './Clock.css';

const Clock = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div>{new Date(value).toLocaleDateString()}</div>
      <div>{new Date(value).toLocaleTimeString()}</div>
      <ClockComponent value={value} />
    </div>
  );
};

export default Clock;
