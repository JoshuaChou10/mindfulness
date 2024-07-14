import { useState, useEffect, useRef } from 'react';
import '../app/globals.css'
import Link from 'next/link'
const Meditation = () => {
  const [goal, setGoal] = useState(0);
  const [timeMeditated, setTimeMeditated] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const savedGoal = localStorage.getItem('meditationGoal');
    if (savedGoal) {
      setGoal(parseInt(savedGoal));
    }
    const savedTimeMeditated = localStorage.getItem('timeMeditated');
    if (savedTimeMeditated) {
      setTimeMeditated(parseInt(savedTimeMeditated));
    }
    // Set up interval for meditation timer
    startTimer();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setTimeMeditated((prev) => {
          const newTimeMeditated = prev + 1;
          localStorage.setItem('timeMeditated', newTimeMeditated.toString());
          return newTimeMeditated;
        });
      }
    }, 1000); // 1 second interval
  };

  const handlePauseResume = () => {
    setIsPaused((prev) => !prev);
  };

  const handleReset = () => {
    setTimeMeditated(0);
    localStorage.setItem('timeMeditated', '0');
    setIsPaused(false);
    startTimer();
  };

  const formatTime = (seconds: number) => {
    if(seconds<=0){
      return "0:00"
    }
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  };

  return (
    <div className="relative bg-black text-white flex items-center justify-center min-h-screen">
      <Link className="absolute top-4 left-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center" href="/">
          Home
      </Link>
      <div className="text-center">
        <h1 className="text-3xl mb-4">Meditation</h1>
        <p className="text-xl">Meditated: {formatTime(timeMeditated)}</p>
        <p className="text-xl">Time Left: {formatTime(goal-timeMeditated)} minutes</p>
        <div className="mt-4">
          <button 
            onClick={handlePauseResume} 
            className="mr-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {isPaused ? 'Resume' : 'Pause'}
          </button>
          <button 
            onClick={handleReset} 
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meditation;
