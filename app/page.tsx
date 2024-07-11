'use client';

import Link from 'next/link';
import { useState } from 'react';

const Home = () => {
  const [goal, setGoal] = useState('');
  

  const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGoal = e.target.value;
    setGoal(newGoal);
    localStorage.setItem('meditationGoal', newGoal);
  };

 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-green-200 to-blue-200">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Mindfulness</h1>
      <Link href="/mindfulness-course">
        <button className="mb-8 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700">
          Go to Mindfulness Course
        </button>
      </Link>
      <div className="flex justify-around w-full px-10">
        <div className="flex flex-col items-center border p-6 w-1/3 bg-white shadow-lg rounded-lg">
          <Link href="/journal">
            <div className="text-center cursor-pointer">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Mindfulness Journal</h2>
              <p className="text-gray-600">Click to open your journal</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center border p-6 w-1/3 bg-white shadow-lg rounded-lg">
          <Link href="/meditation">
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
        <div className="flex flex-col items-center border p-6 w-1/3 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Meditation Calendar</h2>
          <p className="text-gray-600">Calendar integration here</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
