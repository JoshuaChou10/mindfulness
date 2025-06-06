'use client';

import Link from 'next/link';
import { useState, useEffect} from 'react';
import Calendar from '../components/calendar'

const Home = () => {
  const [goal, setGoal] = useState('');


  const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGoal =e.target.value;
    setGoal(newGoal);
    localStorage.setItem('meditationGoal', newGoal);
  };

  useEffect(() => {
    const savedGoal = localStorage.getItem('meditationGoal');
    if (savedGoal) {
      setGoal(savedGoal);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-green-200 to-blue-200">
        {/* Center the title and button using a flex column layout */}
        <div className="flex flex-col items-center justify-center w-full text-center">
  <h1 className="text-4xl font-bold mb-4 text-gray-800">
    Mindfulness
  </h1>
  <Link href="/mindfulness-course?section=Mindfulness">
    <button
      className="
        mb-8
        px-6 py-3
        bg-blue-600 text-white text-lg
        rounded-lg
        hover:bg-blue-700
        mx-auto      /* <-- center */
      "
    >
      Go to Mindfulness Course
    </button>
  </Link>
</div>

        <div className="flex flex-col md:flex-row justify-center w-full px-10 gap-10">
          {/* Learn about Meditation */}
          <Link href="/mindfulness-course?section=Meditation" className="flex-1">
  <div
    className="
      flex flex-col items-center
      text-center
      border p-6
      bg-white shadow-lg rounded-lg h-full
      transition-transform transform
      hover:scale-105 hover:bg-blue-300 hover:text-white
      cursor-pointer
    "
  >
    <h2 className="text-3xl font-semibold mb-2 text-green-700">
      Meditation
    </h2>
    <p className="text-lg text-green-600">
      Click here to learn about Meditation
    </p>
  </div>
</Link>

  
          {/* Meditation Timer */}
          <div className="flex flex-col items-center border p-6 flex-1 bg-white shadow-lg rounded-lg">
            <Link href="/timer">
              <button className="mb-4 px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700">
                Meditate
              </button>
            </Link>
            <div>
              <input
                type="number"
                placeholder="Daily Goal (minutes)"
                value={goal}
                onChange={handleGoalChange}
                className="mt-4 px-4 py-2 border rounded-lg text-black"
              />
            </div>
          </div>
  
          {/* Calendar Component */}
          <div className="flex flex-col items-center border p-6 flex-1 bg-white shadow-lg rounded-lg">
            <Calendar />
          </div>
        </div>
      </div>
  
      <footer className="mt-8 text-center text-gray-500">
        Made by Joshua Chou © {new Date().getFullYear()}
      </footer>
    </>
  );
  
  
  
};

export default Home;
