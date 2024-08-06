import { useState, useEffect, useRef } from 'react';
import '../app/globals.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Meditation = () => {
  const [goal, setGoal] = useState(0);
  const [timeMeditated, setTimeMeditated] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [modalOpen, setModalOpen]=useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const savedGoal = localStorage.getItem('meditationGoal');
    if (savedGoal) {
      setGoal(parseInt(savedGoal)*60);
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
  
  useEffect(() => {
    if (!isPaused) {
      startTimer();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }, [isPaused]);

  useEffect(() => {
    if (timeMeditated >= goal && goal > 0) {
      playAlarm();
    }
  }, [timeMeditated, goal]);

  const playAlarm = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
  
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
  
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 1);
    oscillator.stop(audioContext.currentTime + 1);
  };
  
  
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
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="relative bg-black text-white flex items-center justify-center min-h-screen">
      <Link className="absolute top-4 left-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center" href="/">
      <FontAwesomeIcon icon={faHome} />
      </Link>
      <FontAwesomeIcon icon={faInfoCircle} className="absolute top-4 right-4 text-white text-3xl cursor-pointer" onClick={toggleModal} />
      <div className="text-center">
        <h1 className="text-3xl mb-4">Meditation</h1>
        <p className="text-xl">Meditated: {formatTime(timeMeditated)}</p>
        <p className="text-xl">Time Left: {formatTime(goal - timeMeditated)} minutes</p>
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
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-2xl mb-4">Information</h2>
            <p className="text-gray-800">When using a stopwatch to meditate, set it aside and forget about it. Then you can meditate without thinking about the time. When the timer rings then you know to get up. </p>
            <button onClick={toggleModal} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

;

export default Meditation;
