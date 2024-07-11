import { useState, useEffect, useRef } from 'react';
import '../app/globals.css';
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
        setTimeMeditated((prev) => prev + 1);
      }
    }, 60000); // 1 minute interval
  };

  const handlePauseResume = () => {
    setIsPaused((prev) => !prev);
  };

  const handleReset = () => {
    setTimeMeditated(0);
    setIsPaused(false);
    startTimer();
  };

  return (
    <div className="bg-black text-white flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl mb-4">Meditation</h1>
        <p className="text-xl">Time Meditated: {timeMeditated} minutes</p>
        <p className="text-xl">Goal: {goal} minutes</p>
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
