'use client';

import Link from 'next/link';
import { useState } from 'react';

const Home = () => {
  const [goal, setGoal] = useState('');
  const [modal,setModal]=useState(false)

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
 
        <div onClick={()=>setModal(prev=>!prev)} className="flex flex-col items-center border p-6 w-1/3 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Meditation</h2>
          <p className="text-gray-600">Learn about Meditation</p>
        </div>

        {modal && (
        <>
          <div className="modal-overlay" onClick={()=>setModal(prev=>!prev)} />
          <section className="meditation-modal" id="meditation-modal">
            <h1>What is Meditation?</h1>
            <p>Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.</p>
            <h1>How to Meditate</h1>
            <p>To meditate, find a quiet and comfortable place to sit. Close your eyes and focus on your breath. Notice the sensation of the breath as it enters and leaves your body. When your mind wanders, gently bring your attention back to your breath.</p>
            <h1>Going Forward</h1>
            <p>Regular meditation practice can help you manage stress, increase self-awareness, and improve overall well-being. Start with just a few minutes a day and gradually increase the duration as you become more comfortable with the practice.</p>
          </section>
        </>
      )}
    </div>


        

        
      </div>

  );
};

export default Home;
