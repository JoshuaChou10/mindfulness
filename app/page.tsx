'use client';

import Link from 'next/link';
import { useState, useEffect} from 'react';

const Home = () => {
  const [goal, setGoal] = useState('');


  const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGoal = e.target.value;
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
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-green-200 to-blue-200">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Mindfulness</h1>
      <Link href="/mindfulness-course?section=Mindfulness">
        <button className="mb-8 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700">
          Go to Mindfulness Course
        </button>
      </Link>
  
      <div className="flex justify-center w-full px-10 gap-10">
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
  
        <Link href="/mindfulness-course?section=Meditation" className="flex-1">
          <div className="flex flex-col items-center border p-6 bg-white shadow-lg rounded-lg h-full">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Meditation</h2>
            <p className="text-gray-600">Learn about Meditation</p>
          </div>
        </Link>
      </div>
    </div>
  );
  
  
};

export default Home;
