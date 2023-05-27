import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        const now = Date.now();
        setElapsedTime(now - startTime);
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, startTime]);

  const handleStart = () => {
    setStartTime(Date.now());
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 100);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${milliseconds}`;
  };

  return (
    <div className="flex flex-row items-center my-6 px-4 space-x-3 w-[90%] h-[90px]">     
      {!isRunning ? (
        <img src='/studyMap/playbutton.png' className="object-scale-down h-[30px] w-[30px]" onClick={handleStart}/>
        // <button onClick={handleStart}>Start</button>
      ) : (
        <img src='/studyMap/stopbutton.png' className="object-scale-down h-[30px] w-[30px]" onClick={handleStop}/>
        // <button onClick={handleStop}>Stop</button>
      )}
      <div>{formatTime(elapsedTime)}</div>
    </div>
  );
};

export default Timer;